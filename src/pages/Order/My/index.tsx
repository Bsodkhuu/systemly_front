import { Table, Card,Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Order, Product, TrackInfo } from "../../API";

const My = () => {
  const { data: order } = useQuery("getOrder", getOrder);

  async function getOrder() {
    const response = await axiosClient.get("/orders");
    return response.data as Order[];
  }

  const { data: productData } = useQuery("getProduct", getProduct);

  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }

  const { data: track } = useQuery("getTrack", getTrack);

  async function getTrack() {
      const response = await axiosClient.get("/track-infos");
      return response.data as TrackInfo[];
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
            <div className="md:grid md:grid-cols-2  space-y-2 md:space-y-0 md:space-x-3 ">
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
                          <Table.Cell>{order.status}</Table.Cell>
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
                       <Table.HeadCell>Part Number</Table.HeadCell>
                       <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                       <Table.HeadCell>Тайлбар</Table.HeadCell>
                       <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                       <Table.HeadCell>Нэгжийн утга</Table.HeadCell>
                       <Table.HeadCell>Гишүүдийн захиалсан тоо ширхэг</Table.HeadCell>
                       <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                       <Table.HeadCell>Валют</Table.HeadCell>
                       <Table.HeadCell>Нийт дүн</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                       {productData?.map((productData: Product, index: number) => (
                        <Table.Row key={index}>
                          <Table.Cell>{productData.productCode}</Table.Cell>
                          <Table.Cell>{productData.productName}</Table.Cell>
                          <Table.Cell>{productData.productDescription}</Table.Cell>
                          <Table.Cell>{productData.prodmetric.typeId}</Table.Cell>
                          <Table.Cell>{productData.prodmetricType}</Table.Cell>
                          <Table.Cell>{productData.productCnt}</Table.Cell>
                          <Table.Cell>{productData.priceMain}</Table.Cell>
                          <Table.Cell>{productData.currency}</Table.Cell>
                          <Table.Cell>{productData.priceMain * productData.productCnt}</Table.Cell>
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
                        <Table.Head className="uppercase">
                            <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                            <Table.HeadCell>Байршил</Table.HeadCell>
                            <Table.HeadCell>Байршилын дэлгэрэнгүй</Table.HeadCell>
                            <Table.HeadCell>Статус</Table.HeadCell>
                            <Table.HeadCell>Он сар өдөр</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                           {track?.map((track: TrackInfo, index: number) => (
                            <Table.Row key={index}>
                                <Table.Cell>{track.packageId}</Table.Cell>
                                <Table.Cell>{track.spotId}</Table.Cell>
                                <Table.Cell>{track.descriptionSpot}</Table.Cell>
                                <Table.Cell>{track.status}</Table.Cell>
                                <Table.Cell>{track.trackDate}</Table.Cell>
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
