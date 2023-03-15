import React from "react";
import Layout from "./components/layout";
import { Card, TextInput} from "flowbite-react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(ArcElement);

const App = () => {
  return (
    <Layout>
      <div className="h-screen p-6 flex gap-4">
      <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              
            </div>
        <Card className="w-2/5 h-96">
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                  backgroundColor: "#9925be",
                },
              ],
            }}
          />
        </Card>
        <Card className="w-2/5 h-96">
          <Pie
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                  backgroundColor: "#9925be",
                },
              ],
            }}
          />
        </Card>
      </div>
    </Layout>
  );
};

export default App;
