import React from "react";
import Layout from "../../components/layout";
import { Table, Alert } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { BackOrder } from "../API";

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
          <div className="flex justify-between  items-center mb-4">
            <h4 className="text-1xl">Back Order </h4>
            
          </div>
          <Alert
            color="success"
            rounded={false}
            withBorderAccent={true}
            additionalContent={
              <React.Fragment>
                <div className="mt-2 mb-4 md:text-sm text-[11px]  text-green-700 dark:text-green-800">
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
          
          <Table className="hidden md:block" >
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
              
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              
            </Table.Body>
          </Table>
        </div>
        <div className="md:hidden" >
        {backOrder?.map((backOrder: BackOrder, index: number) => (
          <div className="w-full  bg-white p-2 mt-2 rounded-md text-[11px] flex">
          <div className="w-full p-2">
          <div>Захиалгын он сар</div>
              <div>Meyle</div>
              <div>Тайлбар</div>
              <div>Тоо ширхэг</div>
              <div>EUR нэгжийн үнэ</div>
              <div>EUR нийт үнэ</div>
              <div>Бэлэн болох хугацаа</div>
              <div>Гишүүн </div>
              <div>Захиалганд орсон он сар өдөр</div>
          </div>
          <div className="w-full p-2 text-right" key={index} > 
                  <div>{backOrder.order.createdDate}</div>
                  <div>{backOrder.supplierList.supplierList}</div>
                  <div>{backOrder.description}</div>
                  <div>{backOrder.quantity}</div>
                  <div>{backOrder.netPrice}</div>
                  <div>{backOrder.quantity * backOrder.netPrice}</div>
                  <div>{backOrder.date}</div>
                  <div>{backOrder.user.companyName}</div>
                  <div>{backOrder.orderDate}</div>
          </div>
          </div>
          ))}
        </div>
        
      </div>
    </Layout>
  );
};
export default BackOrder;
