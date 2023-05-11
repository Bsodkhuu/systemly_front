import React from "react";
import Layout from "../../../../components/layout";
import { Button, Card, FileInput, Label, ListGroup, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";
import { Branch, Order, Product, Supplier } from "../../../API";
const Orders = () => {

    const {data: supplier} = useQuery("getSupplier", getSupplier);

    async function getSupplier() {
        const response = await axiosClient.get("/suppliers");
        return response.data as Supplier[];
    }

    const { data: branch } = useQuery("getBranch", getBranch);

    async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }

    const {data: order } = useQuery("getorder", getorder);

    async function getorder() {
        const response = await axiosClient.get("/orders");
        return response.data as Order[];
    }

    const {data: product } = useQuery("getProduct", getProduct);

    async function getProduct() {
        const response = await axiosClient("/products");
        return response.data as Product[];
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
                                        {branch?.map((i) => (
                                            <option value={i.id}>
                                                {i.branchName}
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
                                <a href="/product">Бүтээгдэхүүн нэмэх</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-4">
                                <Card>
                                    <h1 className="text-1xl">Захиалгийн жагсаалт</h1>
                                    <a href="/zahialgacreate">Захиалга үүсгэх </a>
                                    <Table>
                                        <Table.Head className="uppercase">
                                            <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                                            <Table.HeadCell>Захиалга үүсгэсэн огноо</Table.HeadCell>
                                            <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                                            <Table.HeadCell>Статус</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                            {order?.map((order: Order, index: number) => (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{order.numbOfProd}</Table.Cell>
                                                    <Table.Cell>{order.orderedDate}</Table.Cell>
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
                                    <h1 className="text-1xl">Захиалгийн дэлгэрэнгүй Гишүүн</h1>
                                    <Table>
                                        <Table.Head className="uppercase">
                                        <Table.HeadCell>Бүтээгдэхүүний код</Table.HeadCell>
                                        <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                                        <Table.HeadCell>Тайлбар</Table.HeadCell>
                                        <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                                        <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                                        <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                        {product?.map((product: Product, index: number) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{product.productCode}</Table.Cell>
                                                <Table.Cell>{product.productName}</Table.Cell>
                                                <Table.Cell>{product.productDescription}</Table.Cell>
                                                <Table.Cell>{product.productCnt}</Table.Cell>
                                                <Table.Cell>{product.priceMain}</Table.Cell>
                                                <Table.Cell>{product.prodmetric.typeId}</Table.Cell>
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
                                <Table.HeadCell>Бүтээгдэхүүн</Table.HeadCell>
                                <Table.HeadCell>Нийт захиалгийн дүн</Table.HeadCell>
                                <Table.HeadCell>Статус</Table.HeadCell>
                                <Table.HeadCell>Package</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {order?.map((order: Order, index: number) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{order.branch.branchName}</Table.Cell>
                                        <Table.Cell>{order.product.productName}</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>{order.statusType.statusName}</Table.Cell>
                                        <Table.Cell>{order.packageId}</Table.Cell>
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
                                <ListGroupItem>
                                    Тээвэрлэгч: 
                                    <ListGroupItem>
                                        Тээврийн захиалгийн дугаар:
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Тээврийн төрөл:
                                    </ListGroupItem>
                                </ListGroupItem>
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