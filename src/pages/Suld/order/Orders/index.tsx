import React from "react";
import Layout from "../../../../components/layout";
import { Button, Card, FileInput, Label, ListGroup, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";
import { Product } from "../../../../App";

interface OrderDetail extends TeevriinZahialga{
    id: string;
    createdAt: string;
    updatedAt: string;
    order_id: string;
    productId?: string;
    userId?: string;
    supplierId?:string;
    orderId?: string;
    teevriinzahialgaId?: string;
    statusTypeId?: string;
    [teevriinZahialgaId: string]: any;
}

export interface TeevriinZahialga{
    date: string;
    teevriinZahialgaId: string;
    statusName: string;
    name: string;
}
interface StatusType{
    id: string;
    createdAt: string;
    updatedAt: string;
    statusName: string;
}
interface Supplier extends OrderDetail{
    supplierList: string;
    vehicleManufacturerId?: string;
    [order_id: string]: any
  }

interface Affiliate{
    id: string;
    createdAt: string;
    updatedAt: string;
    affiliateName: string;
}
 export interface Order extends StatusType{
    id: string;
    createdAt: string;
    updatedAt: string;
    productId?: string;
    numbOfProd: string;
    prodmetricId?: string;
    prodAllTotal: string;
    manufacturerPrice: number;
    deliveryPrice: number;
    memberPrice: number;
    tax: number;
    otherPrice: number;
    totalPrice: number;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    confirmFlag: string;
    orderedDate: string;
    historyId: string;
    packageId: string;
    receiveDate: string;
    receiverDate: string;
    inquiryId?: string;
    statusTypeId?: string;
    affiliateId?: string;
    [statusName: string]: any;
}

const Orders = () => {

    const { data: product } = useQuery("getProduct", getProduct);
    async function getProduct() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }
    const { data: orderDetail } = useQuery("getOrderDetail", getOrderDetail);

    async function getOrderDetail() {
        const response = await axiosClient.get("/order-details");
        return response.data as OrderDetail[];
    }

    const { data: supplier} = useQuery("getSupplier", getSupplier);

    async function getSupplier() {
        const response = await axiosClient.get("/suppliers");
        return response.data as Supplier[];
    }

    const {data: affiliate} = useQuery("getAffiliate", getAffiliate);

    async function getAffiliate() {
        const response = await axiosClient.get("/affilies");
        return response.data as Affiliate[];
    }

    const { data: order } = useQuery("getOrders", getOrders);

    async function getOrders() {
        const response = await axiosClient.get("/orders");
        return response.data as Order[];
    }
    

    const { data: teevriinZahialga } = useQuery("getTeevrinZahialga", getTeevrinZahialga);
    async function getTeevrinZahialga() {
        const response = await axiosClient.get("/teevriin_zahialgas");
        return response.data as TeevriinZahialga[];
    }
    return(
        <Layout>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="flex justify-between mb-4">
                            
                            <div className="flex gap-4">
                               
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="supplier" value="Нийлүүлэгч" />
                                    </div>
                                    <Select>
                                        {supplier?.map((i) => (
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
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="upload" value="Бичиг баримт"/>
                                    </div>
                                    <FileInput />
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="zarlaga" value="Зарлагын падаан"/>
                                    </div>
                                    <Button className="bg-orange-500">Хэвлэх</Button>
                                </div>
                                <a href="/zam">Замын мэдээ оруулах</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-4">
                                <Card>
                                    <h1 className="text-1xl">Захиалгийн жагсаалт</h1>
                                    <Table>
                                        <Table.Head className="uppercase">
                                            <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                                            <Table.HeadCell>Захиалга үүсгэсэн огноо</Table.HeadCell>
                                            <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                                            <Table.HeadCell>Статус</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                            {orderDetail?.map((orderDetail: OrderDetail, index: number) => (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{orderDetail.order_id}</Table.Cell>
                                                    <Table.Cell>{orderDetail.createdAt}</Table.Cell>
                                                    <Table.Cell>{orderDetail.supplier.supplierList}</Table.Cell>
                                                    <Table.Cell>{orderDetail.statusType.statusName}</Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </Card>
                            </div>
                            <div className="p-4">
                                <Card>
                                    <h1 className="text-1xl">Захиалгийн дэлгэрэнгүй Гишүүн</h1>
                                    <Table>
                                        <Table.Head className="uppercase">
                                            <Table.HeadCell>Партын дугаар</Table.HeadCell>
                                            <Table.HeadCell>Тайлбар</Table.HeadCell>
                                            <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                                            <Table.HeadCell>Fitting</Table.HeadCell>
                                            <Table.HeadCell>Тоо хэмжээ</Table.HeadCell>
                                            <Table.HeadCell>Нийт дүн</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                        {product?.map((product: Product, index: number) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{product.part_number}</Table.Cell>
                                                <Table.Cell>{product.description}</Table.Cell>
                                                <Table.Cell>{product.netPrice}</Table.Cell>
                                                <Table.Cell>{product.fittingPostion}</Table.Cell>
                                                <Table.Cell>{product.quantity}</Table.Cell>
                                                <Table.Cell>{product.netPrice * product.quantity}</Table.Cell>
                                            </Table.Row>
                                          ))}
                                        </Table.Body>
                                    </Table>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span">
                <div className="p-2">
                    <Card className="max-w-sm">
                        <h1 className="text-1xl">Захиалгын хураангуй (Гишүүд)</h1>
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell>Гишүүд</Table.HeadCell>
                                <Table.HeadCell>Гишүүн Нийт дүн</Table.HeadCell>
                                <Table.HeadCell>Нийт захиалгийн дүн</Table.HeadCell>
                                <Table.HeadCell>Статус</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {order?.map((order: Order, index: number) => (
                                    <Table.Row key={index}>
                                    <Table.Cell>{order.affiliate.affiliateName}</Table.Cell>
                                    <Table.Cell>{order.memberPrice}</Table.Cell>
                                    <Table.Cell>{order.product.quantity * order.product.netPrice}</Table.Cell>
                                    <Table.Cell>{order.statusType.statusName}</Table.Cell>
                                </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card>
                    <div className="p-4">
                    <Card className="max-w-sm"> 
                     <Button className="bg-orange-500">
                     <a href="/nemelt" className="text-1xl">Тээвэрлэлтийн мэдээлэл</a>
                     </Button>
                        <ListGroup>
                            {teevriinZahialga?.map((teevriinZahialga: TeevriinZahialga, index: number) => (
                                <ListGroupItem key={index}>
                                    Тээвэрлэгч: {teevriinZahialga.name}
                                    <ListGroupItem>
                                        Тээврийн захиалгийн дугаар: {teevriinZahialga.teevriinZahialgaId}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Тээврийн төрөл: {teevriinZahialga.statusName}
                                    </ListGroupItem>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    );
}
export default Orders;