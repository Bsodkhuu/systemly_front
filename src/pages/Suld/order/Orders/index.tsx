import React from "react";
import Layout from "../../../../components/layout";
import { Button, Card, FileInput, Label, ListGroup, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";

interface OrderDetail extends TeevriinZahialga{
    id: string;
    createdAt: string;
    updatedAt: string;
    order_id: string;
    userId?: string;
    teevriinzahialgaId?: string;
    supplierId?: string;
    [teevriinZahialgaId: string]: any;
}

interface TeevriinZahialga extends StatusType{
    statusTypeId?:string;
    date: string;
    teevriinZahialgaId: string;
    [statusName: string]: any;
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


const Orders = () => {
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
                                        <Label htmlFor="order" value="Захиалгийн дугаар"/>
                                    </div>
                                    <Select>
                                        {orderDetail?.map((i) => (
                                            <option value={i.id}>
                                                {i.order_id}
                                            </option>
                                        ))}
                                    </Select>
                                </div>
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
                                    <Button className="bg-500">Хэвлэх</Button>
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
                                                    <Table.Cell></Table.Cell>
                                                    <Table.Cell>{orderDetail.supplier.supplierList}</Table.Cell>
                                                    <Table.Cell></Table.Cell>
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
                                           
                                            <Table.Row>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell></Table.Cell>
                                            </Table.Row>
                                          
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
                        <h1 className="text-1xl">Захиалгын хураангуй</h1>
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell>Брэндийн нэр(Нийлүүлэгч нэр)</Table.HeadCell>
                                <Table.HeadCell>Гишүүн Нийт дүн</Table.HeadCell>
                                <Table.HeadCell>Нийт захиалгийн дүн</Table.HeadCell>
                                <Table.HeadCell>Статус</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>1</Table.Cell>
                                    <Table.Cell>1</Table.Cell>
                                    <Table.Cell>1</Table.Cell>
                                    <Table.Cell>1</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card>
                    <div className="p-4">
                    <Card className="max-w-sm">
                        <a href="/nemelt" className="text-1xl">Нэмэлт мэдээллүүд</a>
                        <ListGroup>
                            {teevriinZahialga?.map((teevriinZahialga: TeevriinZahialga, index: number) => (
                                <ListGroupItem>
                                    Тээвэрлэгч: 
                                    <ListGroupItem>
                                        Тээврийн захиалгийн дугаар: {teevriinZahialga.teevriinZahialgaId}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Тээврийн төрөл: {teevriinZahialga.statusType.statusName}
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