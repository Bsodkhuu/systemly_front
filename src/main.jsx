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
import Human from "./pages/Human";
import EmployeePerformance from "./pages/EmployeePerformance";
import EmployeeSalary  from "./pages/EmployeeSalary";
import Affiliate from "./pages/Affiliate";
import Order from "./pages/Order";
import Information from "./pages/Information";
import Warehouse from "./pages/Warehouse";
import Purchase from "./pages/Purchase";
import Description from "./pages/Warehouse/Description";

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
  path: "/service/history", 
  element: <ServiceHistory/>
 }, 
 {
  path: "/human", 
  element: <Human/>
 },
 {
  path: "/employee/performance", 
  element: <EmployeePerformance/>
 },
 {
  path: "/employee/salary",
  element: <EmployeeSalary />
 },
 {
  path: "/affiliate", 
  element: <Affiliate/>
 },
 {
  path: "/order", 
  element: <Order />
 },
 {
  path: "/information", 
  element: <Information />
 },
 {
  path: "/warehouse", 
  element: <Warehouse/>
 }, 
 {
  path: "/purchase", 
  element: <Purchase/>
 },
 {
  path: "/description", 
  element: <Description/>
 },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
