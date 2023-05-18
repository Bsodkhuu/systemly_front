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
import Price from "./pages/Settings/Price";
import EmployeeHistory from "./pages/Human/Employee_history";
import Active from "./pages/Settings/Active";
import Transport from "./pages/Customer/Transport";
import Zahialga from "./pages/Order/zahialga";
import ZaswarService from "./pages/Customer/Zaswar_Service";
import Clock from "./pages/Settings/Clock";
import Forgot from "./pages/Login/Forgot/forgot";
import ProductPage from "./pages/Product";
import Messej from "./pages/Order/Create/messej";
import Suld from "./pages/Suld";
import Asuulguud from "./pages/Suld/order/asuulguud";
import Orders from "./pages/Suld/order/Orders";
import Zam from "./pages/Suld/order/zam";
import Nemelt from "./pages/Suld/order/nemelt";
import Notifications from "./pages/Suld/Tohirgoo/notifications";
import FeedBack from "./pages/Suld/feedback";
import CreateRole from "./pages/Suld/Tohirgoo/createRole";
import RoleList from "./pages/Suld/Tohirgoo/role";
import Profile from "./pages/Profile";
import Amralt from "./pages/Settings/Holiday";
import Phone from "./pages/Profile/phone";
import VehiclePerson from "./pages/Customer/PersonVehicle";
import SaleRegister from "./pages/Customer/Sale/service";
import Service_Order from "./pages/Human/ServiceOrder";
import BranchAdd from "./pages/Suld/crm/Branch";
import Service_Employee from "./pages/Human/ServiceEmployee";
import Salbar from "./pages/Human/Salbar";
import Position_Data from "./pages/Human/Postition";
import VilchilgeeniTsag from "./pages/Customer/Service";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/position", 
    element: <Position_Data/>
  },
  {
    path: "/salbar", 
    element: <Salbar/>
  },
  {
    path: "/serviceEmployee", 
    element: <Service_Employee/>
  },
  {
    path: "/branch", 
    element: <BranchAdd/>
  },
  {
    path: "/serviceOrder", 
    element: <Service_Order/>
  },
  {
    path: "/personVehicle", 
    element: <VehiclePerson/>
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/inquiry",
    element: <Inquiry />,
  },
  {
    path:"/saleRegister", 
    element: <SaleRegister/>
  },
  {
    path:"/createRole", 
    element: <CreateRole/>
  },
  {
    path:"/suld", 
    element: <Suld/>
  },
  {
    path:"/asuulguud", 
    element:<Asuulguud/>
  },
  {
    path: "/notifications", 
    element: <Notifications/>
  },
  {
    path: "/feedback", 
    element: <FeedBack/>
  },
  {
    path: "/role", 
    element:<RoleList/>
  },
  {
    path:"/orders",
    element:<Orders/>
  },
  {
    path: "/zam", 
    element:<Zam/>
  },
  {
    path: "/nemelt", 
    element:<Nemelt/>
  },
  
  {
    path: "/messej",
    element: <Messej />,
  },
  
  {
    path: "/holiday",
    element: <Amralt />,
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
    element: <VilchilgeeniTsag />,
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
    path: "/human",
    element: <Human />,
  },

  
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/product_categories",
    element: <ProductPage />,
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
    path: "/profile", 
    element: <Profile />
  },
  {
    path: "/phone", 
    element: <Phone />
  }

]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
