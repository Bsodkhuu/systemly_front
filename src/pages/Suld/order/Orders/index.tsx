import React from "react";
import Layout from "../../../../components/layout";
import { Button, Card, FileInput, Label, ListGroup, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";

const Orders = () => {

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
                                        {/* {supplier?.map((i) => (
                                            <option value={i.id}>
                                                {i.supplierList}
                                            </option>
                                        ))} */}
                                    </Select>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="order" value="Захиалагч"/>
                                    </div>
                                    <Select>
                                        {/* {affiliate?.map((i) => (
                                            <option value={i.id}>
                                                {i.affiliateName}
                                            </option>
                                        ))} */}
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