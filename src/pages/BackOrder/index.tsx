import React from "react";
import Layout from "../../components/layout";
import { Button, Table, TextInput, Alert } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
export interface Order{
  createdDate: string;
  [supplierList: string]: any;
}
interface Supplier extends BackOrder{
  id: string;
  createdAt: string;
  updatedAt: string;
  supplierList: string;
  vehicleManufacturerId?: string;
  [description: string]: any;
}
export interface User extends Order{
  email: string;
  password: string;
  companyName: string;
  firstName: string;
  lastName: string;
}
export interface BackOrder extends Order{
  [createdDate: string]: any;
  id: string;
  createdAt: string;
  updatedAt: string;
  orderId?:  string;
  supplierId?: string;
  description: string;
  quantity: number;
  netPrice: number;
  date: string;
  userId?: string;
  orderDate: string;
}
const BackOrder = () => {
  const { data: backOrder } = useQuery("getBackOrder", getBackOrder);

  async function getBackOrder() {
    const response = await axiosClient.get("/back-orders");
    return response.data as BackOrder[];
  }

  return (
    <Layout>
      <div className="p-2 bg-gray-200 h-screen col-span-2">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Back Order </h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-orange-500">Хайх</Button>
            </div>
          </div>
          <Alert
            color="success"
            rounded={false}
            withBorderAccent={true}
            additionalContent={
              <React.Fragment>
                <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                  Шаардлага Back Order-с хасагдсан бүтээгдэхүүний шууд
                  устгалгүйгээр аль Захиалга руу орсон болох final invoice
                  дугаарыг бичих /эсвэл он сар өдөр/, тухайн захиалагч талыг
                  хариуцсан менежерт мэдэгдээрэй.
                </div>
              </React.Fragment>
            }
          >
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
              Back Order мэдээлэл.
            </h3>
          </Alert>
          &nbsp;&nbsp;&nbsp;
          {/* get data */}
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Захиалгын он сар</Table.HeadCell>
              <Table.HeadCell>Meyle</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
              <Table.HeadCell>EUR нэгжийн үнэ</Table.HeadCell>
              <Table.HeadCell>EUR нийт үнэ</Table.HeadCell>
              <Table.HeadCell>Бэлэн болох хугацаа</Table.HeadCell>
              <Table.HeadCell>Гишүүн </Table.HeadCell>
              <Table.HeadCell>Захиалганд орсон он сар өдөр</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {backOrder?.map((backOrder: BackOrder, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{backOrder.order.createdDate}</Table.Cell>
                  <Table.Cell>{backOrder.supplier.supplierList}</Table.Cell>
                  <Table.Cell>{backOrder.description}</Table.Cell>
                  <Table.Cell>{backOrder.quantity}</Table.Cell>
                  <Table.Cell>{backOrder.netPrice}</Table.Cell>
                  <Table.Cell>{backOrder.quantity * backOrder.netPrice}</Table.Cell>
                  <Table.Cell>{backOrder.date}</Table.Cell>
                  <Table.Cell>{backOrder.user.companyName}</Table.Cell>
                  <Table.Cell>{backOrder.orderDate}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default BackOrder;
