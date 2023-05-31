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
import { useQuery } from "react-query";
import { axiosClient } from "./config/axios";
import { GarageInventory, Product } from "./pages/API";

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

const App = () => {

  const {data: garageInventory} = useQuery("getInventory", getInventory);
  async function getInventory() {
    const response = await axiosClient.get("/garage-inventory");
    return response.data as GarageInventory[];
  }

  const {data: product } = useQuery("getProduct", getProduct);
  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }
  
  return (
    <Layout>
      <div className="p-4 pb-2 w-full md:h-screen">
        <div className="p-4 space-y-2 bg-white rounded-lg">
          <div className="gap-4 p-4 space-y-3 md:flex">
            <Card className="md:w-2/5 md:h-96">
              <Bar
                data={{
                  labels: garageInventory?.map((i) => i.mainPrice),
                  datasets: [
                    {
                      label: "Агуулахын үлдэгдэл",
                      data: garageInventory?.map((i) => i.productCnt),
                      borderWidth: 1,
                      backgroundColor: "#FFA500",
                    },
                  ],
                }}
              />
            </Card>
            <Card className="md:w-2/5 md:h-96">
              <Line
                options={options}
                data={{
                  labels: product?.map((i) => i.productName),
                  datasets: [
                    {
                      label: "Захиалга",
                      data: product?.map((i) => i.priceMain),
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
