import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Transport from "./pages/Transport";
import Service from "./pages/Service";
import ServiceHistory from "./pages/ServiceHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/transport", 
    element: <Transport/>,
  },
  {
    path: "/service", 
    element: <Service/>,
  },
 {
  path: "/history", 
  element: <ServiceHistory/>
 }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
