import Layout from "../../../components/layout";
import { TextInput, Button, Table} from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Order } from "../../API";

const History = () => {
  const { data: order } = useQuery("getOrder", getOrder);

  async function getOrder() {
    const response = await axiosClient.get("/orders");
    return response.data as Order[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h5 className="text-1xl">Захиалгийн Түүх</h5>
           
          </div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Захиалгийн Түүх</Table.HeadCell>
              <Table.HeadCell>Захиалга</Table.HeadCell>
              <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
              <Table.HeadCell>Статус төрөл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            {order?.map((order: Order, index: number) => (
              <Table.Row key={index}>
                <Table.Cell>{order.historyId}</Table.Cell>
                <Table.Cell>{order.numbOfProd}</Table.Cell>
                <Table.Cell>{order.product.manufacturerId}</Table.Cell>
                <Table.Cell>{order.status}</Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default History;
