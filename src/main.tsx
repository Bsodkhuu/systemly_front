import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Human from "./pages/Human";
import Order from "./pages/Order";
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

import EmployeeHistory from "./pages/Human/Employee_history";
import Active from "./pages/Settings/Active";
import Transport from "./pages/Customer/Transport";
import Zahialga from "./pages/Order/zahialga";
import Service from "./pages/Customer/Service";
import ZaswarService from "./pages/Customer/Zaswar_Service";
import Clock from "./pages/Settings/Clock";
import Holiday from "./pages/Settings/Holiday";
import Forgot from "./pages/Login/Forgot/forgot";
import ProductPage from "./pages/Product";
import Messej from "./pages/Order/Create/messej";
import BackOrder from "./pages/BackOrder";
import Online from "./pages/Online";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/online",
    element: <Online />,
  },
  {
    path: "/backorder",
    element: <BackOrder />,
  },
  {
    path: "/messej",
    element: <Messej />,
  },
  // Gishuun design
  {
    path: "/holiday",
    element: <Holiday />,
  },
  {
    path: "/clock",
    element: <Clock />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/zaswar_service",
    element: <ZaswarService />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/zahialga",
    element: <Zahialga />,
  },
  {
    path: "/transport",
    element: <Transport />,
  },
  {
    path: "/active",
    element: <Active />,
  },

  {
    path: "/employee_history",
    element: <EmployeeHistory />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/spare",
    element: <Spare />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/create",
    element: <Create />,
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },

  {
    path: "/human",
    element: <Human />,
  },

  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/my",
    element: <My />,
  },

  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/inquiry",
    element: <Inquiry />,
  },
  {
    path: "/product_categories",
    element: <ProductPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
