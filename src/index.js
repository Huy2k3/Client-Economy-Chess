import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "intersection-observer";

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import {CartProvider} from "./context/CartContext";
import {ChatHistoryProvider} from "./context/ChatHistoryContext";
import { CheckOutContext, CheckOutProvider } from "./context/CheckOutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <ChatHistoryProvider>
          <CheckOutProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CheckOutProvider>
        </ChatHistoryProvider>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
