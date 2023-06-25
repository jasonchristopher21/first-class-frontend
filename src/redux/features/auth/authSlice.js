import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../constants";
import axios from "axios";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
};

export const getUser = createAsyncThunk("auth/getUser", 
    async (props) => {
        try {
            const payload = {
                surname: props.surname,
                flightNumber: props.flightNumber,
                seatNumber: props.seatNumber,
            }
            const defaultHeaders = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const response = await axios.post(`${API_URL}/auth/user/login`, payload, defaultHeaders);
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    })

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        logout: (state, action) => {
            state.user = {};
            state.token = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = {
                "id": action.payload._id,
                "surname": action.payload.surname,
                "flightNumber": action.payload.flightNumber,
            }
            state.token = action.payload.token;
            state.success = true;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    }
});

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => !!state.auth.token
export const selectIsLoading = (state) => state.auth.loading
