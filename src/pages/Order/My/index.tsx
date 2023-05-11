import { Table, Card,Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Order, ZamiinMedee } from "../../API";
const My = () => {
  const { data: order } = useQuery("getOrder", getOrder);

  async function getOrder() {
    const response = await axiosClient.get("/orders");
    return response.data as Order[];
  }

  const { data: zam } = useQuery("getZam", getZam);

  async function getZam() {
    const response = await axiosClient.get("/zamin_medees");
    return response.data as ZamiinMedee[];
  }

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Миний захиалгууд</h5>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-4">
                <Card>
                  <h5 className="text-1xl">Захиалгийн жагсаалт</h5>
                  <div className="flex gap-4">
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
              <div className="p-4">
                <Card>
                  <h5 className="text-1xl">Захиалгийн дэлгэрэнгүй</h5>
                  <div className="flex gap-4">
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
        <div className="col-span">
            <div className="p-4">
              <Card className="max-w-sm">
                <h5 className="text-1xl">Замын мэдээний дэлгэрэнгүй</h5>
                <div className="flex gap-4">
                    <Table>
                        <Table.Head className="uppercase">
                          <Table.HeadCell>Байршил</Table.HeadCell>
                          <Table.HeadCell>Статус</Table.HeadCell>
                          <Table.HeadCell>Он сар</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {zam?.map((zam: ZamiinMedee, index: number) => (
                            <Table.Row key={index}>
                              <Table.Cell>{zam.location}</Table.Cell>
                              <Table.Cell>{zam.zamStatusType.statusTypeName}</Table.Cell>
                              <Table.Cell>{zam.date}</Table.Cell>
                            </Table.Row>
                          ))}
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
