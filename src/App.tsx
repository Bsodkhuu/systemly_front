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
  return (
    <Layout>
      <div className="p-4 pb-2 w-full md:h-screen">
        <div className="p-4 space-y-2 bg-white rounded-lg">
          <div className="gap-4 p-4 space-y-3 md:flex">
            <Card className="md:w-2/5 md:h-96">
              <Bar
                data={{
                  // labels: inventory?.map((i) => i.purchasedFrom),
                  datasets: [
                    {
                      label: "Сэлбэгийн үлдэгдэл",
                      data: "",
                      // inventory?.map((i) => i.quantity),
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
                  // labels: product?.map((i) => i.description),
                  datasets: [
                    {
                      label: "Захиалга",
                      data: "",
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
