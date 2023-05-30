import React from "react";
import Layout from "../../../components/layout";
import { Button, Card, ListGroup,Table } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Inquiry, Product } from "../../API";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Asuulguud = () => {
    const { data: inquiryData } = useQuery("getInquiry", getInquiry);
    const { data: productData } = useQuery("getProduct", getProduct);
    async function getInquiry() {
        const response = await axiosClient.get("/inquiries");
        return response.data as Inquiry[];
    }
    async function getProduct() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }
    return( 
        <Layout>
            <div className="md:grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 md:h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        
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
                                        {inquiryData?.map((inquiryData: Inquiry, index: number) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{inquiryData.inquiryNumber}</Table.Cell>
                                                <Table.Cell>{inquiryData.branch.branchName}</Table.Cell>
                                                <Table.Cell>{inquiryData.inquiryDate}</Table.Cell>
                                                <Table.Cell>{inquiryData.product.manufacturerId}</Table.Cell>
                                                <Table.Cell>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
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
                                                {productData?.map((productData: Product, index: number) => (
                                                    <Table.Row key={index}>
                                                        <Table.Cell>{productData.productCode}</Table.Cell>
                                                        <Table.Cell>{productData.productDescription}</Table.Cell>
                                                        <Table.Cell>{productData.priceMain}</Table.Cell>
                                                        <Table.Cell>{productData.productFits.positionId}</Table.Cell>
                                                        <Table.Cell>{productData.productCnt}</Table.Cell>
                                                        <Table.Cell>{productData.quantity}</Table.Cell>
                                                        <Table.Cell>{productData.evaDate}</Table.Cell>
                                                        <Table.Cell><FontAwesomeIcon icon={faEdit}/></Table.Cell>
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
                                    {inquiryData?.map((inquiryData: Inquiry, index: number) => (
                                        <ListGroup.Item key={index}> 
                                        Нийлүүлэгч: {inquiryData.product.manufacturerId}
                                        <ListGroup.Item></ListGroup.Item>
                                        Нийт дүн: {inquiryData.product.priceMain * inquiryData.product.productCnt}
                                        <ListGroup.Item></ListGroup.Item>
                                        <Button className="bg-orange-500">Асуулга үүсгэх</Button>
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