import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../constants";
import axios from "axios";

const initialState = {
  loading: false,
  user: {},
  token: null,
  error: null,
  success: false,
};

export const getStaff = createAsyncThunk("auth/getStaff", 
    async (props) => {
        try {
            const payload = {
                staffId: props.staffId,
                flightId: props.flightNumber,
            }
            const defaultHeaders = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const response = await axios.post(`${API_URL}/auth/staff/login`, payload, defaultHeaders);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log(error);
            return error.response.data;
        }
    })

const staffAuthSlice = createSlice({
    name: "staff",
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
        builder.addCase(getStaff.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.user = {
                "id": action.payload._id,
                "staffId": action.payload.staffId,
                "flightId": action.payload.flightId,
            }
            state.token = action.payload.token;
            state.success = true;
        });
        builder.addCase(getStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    }
});

export const { setCredentials, logout } = staffAuthSlice.actions

export default staffAuthSlice.reducer

export const selectCurrentStaff = (state) => state.staff.user
export const selectStaffToken = (state) => state.staff.token
export const selectIsStaffAuthenticated = (state) => !!state.staff.token
export const selectIsStaffLoading = (state) => state.staff.loading
