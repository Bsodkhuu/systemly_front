import React from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, ListGroup, Select, Table, TextInput } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Branch, Order, Product } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Asuulguud = () => {
    const { data: gishuun } = useQuery("getGishuun", getGishuun);
    const { data: baraa} = useQuery("getBaraa", getBaraa);

    async function getBaraa() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }
    async function getGishuun() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }

    const { data: orderData } = useQuery("getOrder", getOrder);

    async function getOrder() {
        const response = await axiosClient.get("/orders");
        return response.data as Order[];
    }
    return( 
        <Layout>
            <div className="md:grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 md:h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="md:flex justity-between mb-4">
                            <div className="md:grid md:grid-cols-6 md:gap-4 space-y-2 md:space-y-0 w-full justify-between"> 
                              <div className="md:col-span-1 flex md:flex-col  items-center"> 
                                <div className="mb-2 block w-[40%] md:w-full">
                                    <Label htmlFor="productId" value="Нийлүүлэгч"/>
                                </div>
                                <div className="w-[60%] md:w-full">
                                <Select>
                                        {baraa?.map((i) => (
                                            <option value={i.id}> 
                                            {i.manufacturerId}
                                            </option>
                                        ))}
                                    </Select>
                                   
                                </div>
                              </div>
                              <div className="md:col-span-1 flex md:flex-col  items-center">
                                <div className="mb-2 block w-[40%] md:w-full">
                                    <Label htmlFor="branchId" value="Захиалагч"/>
                                    </div> 
                                <div className="w-[60%] md:w-full">
                                <Select>
                                        {gishuun?.map((i) => (
                                            <option value={i.id}>
                                                {i.branchName}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                              </div>
                            </div>
                        </div>
                        
                        <div className="md:grid grid-cols-2 space-y-3 md:space-y-0">
                            <div className="md:p-4"> 
                            <Card> 
                                <h1 className="text-1xl">Асуулгийн жагсаалт</h1>
                                <div className="hidden md:block"> 
                                <Table> 
                                    <Table.Head className="uppercase">
                                        <Table.HeadCell>Inquiry Number</Table.HeadCell>
                                        <Table.HeadCell>Гишүүн</Table.HeadCell>
                                        <Table.HeadCell>Асуулга ирсэн огноо</Table.HeadCell>
                                        <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                                        <Table.HeadCell>Үйлдэл</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body> 
                                        
                                    </Table.Body>
                                </Table>
                                </div>
                            </Card>
                            </div>
                            <div className="md:p-4">
                                <Card> 
                                    <h1 className="text-1xl">Асуулгийн дэлгэрэнгүй</h1>
                                    <div className="hidden md:block">
                                        <Table> 
                                            <Table.Head className="uppercase"> 
                                            <Table.HeadCell>Part Number</Table.HeadCell>
                                            <Table.HeadCell>Тайлбар</Table.HeadCell>
                                            <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                                            <Table.HeadCell>Fitting Position</Table.HeadCell>
                                            <Table.HeadCell>Хүссэн тоо ширхэг</Table.HeadCell>
                                            <Table.HeadCell>Бэлэн байгаа тоо</Table.HeadCell>
                                            <Table.HeadCell>ETA(Бэлэн болох хугацаа)</Table.HeadCell>
                                            <Table.HeadCell>Үйлдэл</Table.HeadCell>
                                            </Table.Head>
                                            <Table.Body> 
                                                {orderData?.map((orderData: Order, index: number) => (
                                                    <Table.Row key={index}> 
                                                    <Table.Cell>{orderData.product.productCode}</Table.Cell>
                                                    <Table.Cell>{orderData.product.productDescription}</Table.Cell>
                                                    <Table.Cell>{orderData.product.priceMain}</Table.Cell>
                                                    <Table.Cell></Table.Cell>
                                                    <Table.Cell></Table.Cell>
                                                    <Table.Cell>{orderData.prodAllTotal}</Table.Cell>
                                                    <Table.Cell>{orderData.orderedDate}</Table.Cell>
                                                    <Table.Cell className="space-y-2">
                                                        <FontAwesomeIcon icon={faEdit}/>&nbsp;
                                                        <FontAwesomeIcon icon={faTrash}/>
                                                    </Table.Cell>
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
                <div className="p-4 space-y-3 bg-gray-200">
                    <Card> 
                        <h1 className="text-1xl">Захиалгийн хураангуй</h1>
                        <div className="hidden md:block">
                            <ListGroup> 
                                {orderData?.map((orderData: Order, index: number) => (
                                    <ListGroup.Item key={index}> 
                                    Нийлүүлэгч: {orderData.product.manufacturerId}
                                    <ListGroup.Item></ListGroup.Item>
                                    Нийт дүн: 
                                    <ListGroup.Item></ListGroup.Item>
                                </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
export default Asuulguud;