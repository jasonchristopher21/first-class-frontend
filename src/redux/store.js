import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import cartReducer from "./features/cart/cartSlice.js"
import authReducer from "./features/auth/authSlice.js"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const userPersistConfig = {
    key: 'user',
    storage: storageSession,
}

const rootReducer = combineReducers({
    auth: persistReducer(userPersistConfig, authReducer),
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);