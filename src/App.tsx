import React from "react";
import Layout from "./components/layout";
import { Card } from "flowbite-react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { axiosClient } from "./config/axios";
import { useQuery } from "react-query";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(ArcElement);
Chart.register(PointElement);
Chart.register(Title);
Chart.register(LineElement);
Chart.register(Tooltip);
Chart.register(Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};
export interface Product {
  id: string;
  manufacturerId: string;
  description: string;
  netPrice: string;
  currency: string;
  subCategoryId?: string;
  part_number: string;
  fittingPostion: string;
  makeModelFit: string;
  quantity: string;
  order_date: string;
  createdAt: string;
  updatedAt: string;
  mainCategoryId?: string;
  backOrderId?: string;
}
export interface Inventory {
  id: string;
  createdAt: string;
  updatedAt: string;
  purchasedFrom: string;
  supplier: string;
  mainCategoryId?: string;
  subCategoryId?: string;
  cost: number;
  quantity: number;
}
export interface ServiceType {
  id: string;
  createdAt: string;
  updateAt: string;
  mainCategory: string;
  subCategory: string;
  name: string;
  affiliateId?: string;
  price: number;
  averagePrice: number;
  suudalPrice: number;
  achaaPrice: number;
  currency: string;
}

const App = () => {
  const { data: product } = useQuery("getProduct", getProduct);
  const { data: inventory } = useQuery("getInventory", getInventory);
  const { data: serviceType } = useQuery("getServiceType", getServiceType);

  async function getServiceType() {
    const response = await axiosClient.get("/service-types");
    return response.data as ServiceType[];
  }
  async function getInventory() {
    const response = await axiosClient.get("/inventories");
    return response.data as Inventory[];
  }
  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="h-screen p-6 flex gap-4">
            <Card className="w-2/5 h-96">
              <Bar
                data={{
                  labels: inventory?.map((i) => i.purchasedFrom),
                  datasets: [
                    {
                      label: "Сэлбэгийн үлдэгдэл",
                      data: inventory?.map((i) => i.quantity),
                      borderWidth: 1,
                      backgroundColor: "#FFA500",
                    },
                  ],
                }}
              />
            </Card>
            <Card className="w-2/5 h-96">
              <Pie
                options={options}
                data={{
                  labels: serviceType?.map((i) => i.name),
                  datasets: [
                    {
                      label: "Засварын үнийн тохиргоо",
                      data: serviceType?.map((i) => i.price),
                      borderWidth: 1,
                      borderColor: "rgb(255, 99, 132)",
                      backgroundColor: "#FFA500",
                    },
                  ],
                }}
              />
            </Card>

            <Card className="w-2/5 h-96">
              <Line
                options={options}
                data={{
                  labels: product?.map((i) => i.description),
                  datasets: [
                    {
                      label: "Захиалга",
                      data: product?.map((i) => i.quantity),
                      borderWidth: 1,
                      backgroundColor: "#FFA500",
                      borderColor: "rgb(255, 99, 132)",
                    },
                  ],
                }}
              />
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default App;
