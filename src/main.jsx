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
import My from "./pages/Order/My";
import History from "./pages/Order/History";
import Create from "./pages/Order/Create";
import Cart from "./pages/Order/Cart";
import Checkbox from "./pages/Order/Checkbox";
import Payment from "./pages/Order/Payment";
import Inquiry from "./pages/Order/Inquiry";
import Sale from "./pages/Customer/Sale"; 
import Spare from "./pages/Customer/Spare";
import Settings from "./pages/Settings";
import Price from "./pages/Settings/Price";
import Naryd from "./pages/Human/Naryd";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/naryd", 
    element: <Naryd/>
  },
  {
    path: "/settings", 
    element: <Settings/>
  },
  {
    path: "/price", 
    element: <Price/>
  },
  {
    path:"/spare", 
    element: <Spare/>
  },
  {
    path:"/sale", 
    element: <Sale/>
  },
  {
    path: "/cart", 
    element: <Cart/>
  },
  {
    path: "/create", 
    element: <Create/>
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/checkbox",
    element: <Checkbox />,
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
  path: "/payment", 
  element: <Payment/>
 },

 {
  path: "/warehouse", 
  element: <Warehouse/>
 }, 
 
{
  path: "/inquiry", 
  element: <Inquiry/>
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
