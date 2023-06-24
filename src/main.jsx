import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import Status from "./pages/Status.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="status/:id" element={<Status />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
