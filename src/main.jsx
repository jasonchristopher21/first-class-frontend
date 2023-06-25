import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import Status from "./pages/Status.jsx";
import Home from "./pages/Home.jsx";
import { Product } from "./pages/Product.jsx";
import "./index.css";

import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { StaffHome } from "./pages/StaffHome.jsx";
import { StaffStatus } from "./pages/StaffStatus.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="home" element={<Home />} />
            <Route path="staff/home" element={<StaffHome />} />
            <Route path="staff/order/:id" element={<StaffStatus />} />
            <Route path="cart" element={<Cart />} />
            <Route path="status/:id" element={<Status />} />
            <Route path="product/:id" element={<Product />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
