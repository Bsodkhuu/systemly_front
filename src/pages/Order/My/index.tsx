import { Table, Card,Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Order } from "../../API";
const My = () => {
  const { data: order } = useQuery("getOrder", getOrder);

  async function getOrder() {
    const response = await axiosClient.get("/orders");
    return response.data as Order[];
  }

  const [checked, setChecked] = useState(false);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  }
  
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <div className="p-4 col-span-12 grid grid-cols-12 ">
          <div className="bg-white col-span-12  p-6 rounded-lg flex-col">
            <div className="flex justify-between mb-4">
              <h5 className="text-sm">Миний захиалгууд</h5>
            </div>
            <div className="md:grid md:grid-cols-2 space-y-2 md:space-4 ">
              <div className="md:gap-4" >
                <Card>
                  <h5 className="text-sm">Захиалгийн жагсаалт</h5>
                  <div className="flex gap-2">
                    <a href="#">Идэвхитэй</a>
                    <a href="/history">Түүх</a>
                  </div>
                  <Table>
                      <Table.Head className="uppercase">
                      <Table.HeadCell><Checkbox/></Table.HeadCell>
                       <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                       <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                       <Table.HeadCell>Статус төрөл</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {order?.map((order: Order, index: number) => (
                          <Table.Row key={index}>
                          <Table.Cell><Checkbox/></Table.Cell>
                          <Table.Cell>{order.packageId}</Table.Cell>
                          <Table.Cell>{order.product.manufacturerId}</Table.Cell>
                          <Table.Cell>{order.statusType.statusName}</Table.Cell>
                        </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                </Card>
              </div>
              <div className="md:gap-4" >
                <Card>
                  <h5 className="text-sm">Захиалгийн дэлгэрэнгүй</h5>
                  <div className="flex gap-2">
                    <Table>
                      <Table.Head className="uppercase">
                       <Table.HeadCell>Бүтээгдэхүүний код</Table.HeadCell>
                       <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                       <Table.HeadCell>Тайлбар</Table.HeadCell>
                       <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                       <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                      <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                      <Table.HeadCell>Нийт дүн</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {order?.map((order: Order, index: number) => (
                          <Table.Row key={index}>
                            <Table.Cell>{order.product.productCode}</Table.Cell>
                            <Table.Cell>{order.product.productName}</Table.Cell>
                            <Table.Cell>{order.product.productDescription}</Table.Cell>
                            <Table.Cell>{order.product.productCnt}</Table.Cell>
                            <Table.Cell>{order.product.priceMain}</Table.Cell>
                            <Table.Cell>{order.prodmetric.typeId}</Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
            <div className="p-4">
              <Card className="w-full">
                <h5 className=" text-sm">Замын мэдээний дэлгэрэнгүй</h5>
                <div className="flex gap-4">
                      <Table>
                        <Table.Head className="uppercase ">
                          <Table.HeadCell>Байршил</Table.HeadCell>
                          <Table.HeadCell>Статус</Table.HeadCell>
                          <Table.HeadCell>Он сар</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          
                        </Table.Body>
                    </Table>
                </div>
              </Card>
            </div>
        </div>
      </div>
    </Layout>
  );
};
export default My;
