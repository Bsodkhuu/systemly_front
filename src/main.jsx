import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Human from "./pages/Human";
import Order from "./pages/Order";
import Warehouse from "./pages/Warehouse";
import Description from "./pages/Warehouse/Description";
import My from "./pages/Order/My";
import Sale from "./pages/Sale";
import Spare from "./pages/Spare"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sale", 
    element: <Sale/>
  },
  {
    path: "/spare", 
    element: <Spare/>
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/login",
    element: <Login />,
  },

 {
  path: "/human", 
  element: <Human/>
 },
 
 {
  path: "/order", 
  element: <Order />
 },
 {
  path: "/my", 
  element: <My/>
 },

 {
  path: "/warehouse", 
  element: <Warehouse/>
 }, 
 
 {
  path: "/description", 
  element: <Description/>
 },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
