import React from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
interface Inquiry extends Affiliate{
    id: string;
    createdAt: string;
    updatedAt: string;
    createdDate: string;
    inquiryNumber: string;
    userId?:string;
    affiliateId?: string;
    [affiliateName: string]: any;
}
interface Supplier{
    id: string;
    createdAt: string;
    updatedAt: string;
    supplierList: string;
    vehicleManufacturerId?: string
  }

interface Affiliate{
    id: string;
    createdAt: string;
    updatedAt: string;
    affiliateName: string;
}

interface Product extends BackOrder{
    [orderDate: string]: any;
    id: string;
    manufacturerId: string;
    description: string;
    netPrice: number;
    currency: string;
    subCategoryId?: string;
    part_number: string;
    fittingPostion: string;
    makeModelFit: string;
    quantity: number;
    order_date: string;
    createdAt: string;
    updatedAt: string;
    mainCategoryId?: string;
    backOrderId?: string;
}

export interface Order{
    createdDate: string;
    [supplierList: string]: any;
  }
  interface Supplier{
    supplierList: string;
    vehicleManufacturerId?: string
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

  interface InquiryDetail extends Supplier{
    id: string;
    createdAt: string;
    updatedAt: string;
    affiliateId: string;
    partNumber: string;
    quantity: number;
    netPrice: number;
    currency: string;
    productId?: string;
    supplierId?: string;
    inquiryId?: string;
    orderDetailId?: string;
    statusTypeId?: string;
    [supplierList:string]: any;
  }
const Asuulguud = () => {

    const { data: inquiry} = useQuery("getInquiry", getInquiry);

    async function getInquiry() {
        const response = await axiosClient.get("/inquiries");
        return response.data as Inquiry[];
    }
    const { data: supplier} = useQuery("getSupplier", getSupplier);

    async function getSupplier() {
        const response = await axiosClient.get("/suppliers");
        return response.data as Supplier[];
    }

    const { data: affiliate } = useQuery("getAffiliate", getAffiliate);

    async function getAffiliate() {
        const response = await axiosClient.get("/affilies");
        return response.data as Affiliate[];
    }

    const { data: product } = useQuery("getProduct", getProduct);
     async function getProduct() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
     }

    const { data: inquiryDetail } = useQuery("getInquiryDetail", getInquiryDetail);

    async function getInquiryDetail() {
        const response = await axiosClient.get("/inquiry_details");
        return response.data as InquiryDetail[];
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
                                        <Table.Cell>Нийлүүлэгч</Table.Cell>
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
                                            <Table.Cell>Бэлэн байгаа тоо</Table.Cell>
                                            <Table.Cell>{product.backOrder.orderDate}</Table.Cell>
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
                                {inquiryDetail?.map((inquiryDetail: InquiryDetail, index: number) => (
                                    <Table.Row key={index}>
                                    <Table.Cell>{inquiryDetail.supplier.supplierList}</Table.Cell>
                                    <Table.Cell>{inquiryDetail.quantity * inquiryDetail.netPrice}</Table.Cell>
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