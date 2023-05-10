import Layout from "../../../components/layout";
import { TextInput, Button, Table} from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { OrderDetail } from "../../API";



const History = () => {
  const { data: orderDetail } = useQuery("getOrderDetail", getOrderDetail);

  async function getOrderDetail() {
    const response = await axiosClient.get("/order-details");
    return response.data as OrderDetail[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h5 className="text-1xl">Захиалгийн Түүх</h5>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-orange-500">
                Хайх
              </Button>
            </div>
          </div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Захиалга</Table.HeadCell>
              <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
              <Table.HeadCell>Статус төрөл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            {orderDetail?.map((orderDetail: OrderDetail, index: number) => (
                <Table.Row key={index} >
                  <Table.Cell>{orderDetail.order_id}</Table.Cell>        
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
