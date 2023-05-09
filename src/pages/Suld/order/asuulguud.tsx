import React from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Product, Supplier } from "../../Order/zahialga";
import { Order } from "./Orders";

export interface Inquiry extends Affiliate{
    id: string;
    createdAt: string;
    updatedAt: string;
    createdDate: string;
    inquiryNumber: string;
    userId?: string;
    affiliateId?: string;
    supplierId?: string;
    [affiliateName: string]: any;
}
export interface Affiliate{
    id: string;
    createdAt: string;
    updatedAt: string;
    affiliateName: string;
}
const Asuulguud = () => {

   const { data: supplier } = useQuery("getSupplier", getSupplier);
   
   async function getSupplier() {
    const response = await axiosClient.get("/suppliers");
    return response.data as Supplier[];
   }

   const { data: affiliate } =  useQuery("getAffiliate", getAffiliate);

   async function getAffiliate() {
    const response = await axiosClient.get("/affilies");
    return response.data as Affiliate[];
   }

   const { data: inquiry } = useQuery("getInquiry", getInquiry);

   async function getInquiry() {
    const response = await axiosClient.get("/inquiries");
    return response.data as Inquiry[];
   }
 
   const { data: product } = useQuery("getProduct", getProduct);

   async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
   }

   const { data: order } = useQuery("getOrder", getOrder);
   
   async function getOrder() {
    const response = await axiosClient.get("/orders");
    return response.data as Order[];
   }

    return (
        <Layout>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="flex justify-between mb-4">
                            <h5 className="text-1xl">Асуулгууд</h5>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="inquiry" value="Inquiry дугаар" />
                                    </div>
                                    <Select>
                                        {inquiry?.map((i) => (
                                            <option value={i.id}>
                                                {i.inquiryNumber}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="supplier" value="Нийлүүлэгч" />
                                    </div>
                                    <Select>
                                        {supplier?.map((i)=> (
                                            <option value={i.id}>
                                                {i.supplierList}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="order" value="Захиалагч"/>
                                    </div>
                                    <Select>
                                        {affiliate?.map((i) => (
                                            <option value={i.id}>
                                                {i.affiliateName}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </div>
                                    <TextInput id="search" type="search" placeholder="Хайх" />
                                </div>
                            </div>
                        </div>
                       <div className="grid grid-cols-2">
                       <div className="p-4">
                        <Card> 
                        <h1 className="text-1xl">Асуулгын жагсаалт</h1>
                            <div className="flex gap-4">
                            <Table>
                                <Table.Head className="uppercase">
                                    <Table.HeadCell>Inquiry дугаар</Table.HeadCell>
                                    <Table.HeadCell>Гишүүний нэр</Table.HeadCell>
                                    <Table.HeadCell>Асуулга ирсэн огноо</Table.HeadCell>
                                    <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                                </Table.Head>
                                <Table.Body>
                                   {inquiry?.map((inquiry: Inquiry, index: number) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{inquiry.inquiryNumber}</Table.Cell>
                                        <Table.Cell>{inquiry.affiliate.affiliateName}</Table.Cell>
                                        <Table.Cell>{inquiry.createdDate}</Table.Cell>
                                        <Table.Cell>{inquiry.supplier.supplierList}</Table.Cell>
                                    </Table.Row>
                                   ))}
                                </Table.Body>
                            </Table>
                            </div>
                        </Card>
                        </div>

                        <div className="p-4">
                            <Card>
                            <h1 className="text-1xl">Асуулгын дэлгэрэнгүй</h1>
                            <div className="flex gap-4">
                            <Table>
                                <Table.Head className="uppercase">
                                    <Table.HeadCell>Партын дугаар</Table.HeadCell>
                                    <Table.HeadCell>Тайлбар</Table.HeadCell>
                                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                                    <Table.HeadCell>Fitting</Table.HeadCell>
                                    <Table.HeadCell>Хүссэн тоо</Table.HeadCell>
                                    <Table.HeadCell>Бэлэн байгаа тоо</Table.HeadCell>
                                    <Table.HeadCell>ETA(Хэрэв байхгүй бол бэлэн болох хугацаа)</Table.HeadCell>
                                </Table.Head>
                                <Table.Body>
                                    {product?.map((product: Product, index: number) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>{product.part_number}</Table.Cell>
                                            <Table.Cell>{product.description}</Table.Cell>
                                            <Table.Cell>{product.netPrice}</Table.Cell>
                                            <Table.Cell>{product.fittingPostion}</Table.Cell>
                                            <Table.Cell>{product.quantity}</Table.Cell>
                                            <Table.Cell></Table.Cell>
                                            <Table.Cell></Table.Cell>
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
                <div className="p-2">
                    <Card className="max-w-sm">
                        <h1 className="text-1xl">Захиалгын хураангуй</h1>
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell>Брэндийн нэр(Нийлүүлэгч нэр)</Table.HeadCell>
                                <Table.HeadCell>Нийт дүн</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {order?.map((order: Order, index: number) => (
                                    <Table.Row key={index}>
                                    <Table.Cell>{order.affiliate.affiliateName}</Table.Cell>
                                    <Table.Cell>{order.totalPrice}</Table.Cell>
                                </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                        <Button className="bg-orange-500">Захиалга үүсгэх</Button>
                    </Card>
                </div>
            </div>
            </div>
        </Layout>
    );
}
export default Asuulguud;