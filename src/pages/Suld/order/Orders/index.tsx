import React, { FC, useState } from "react";
import Layout from "../../../../components/layout";
import { Button, Card, FileInput, Label, ListGroup, Select, Table, TextInput, Modal } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";
import { Branch, Order, Product } from "../../../API";

interface ModalProps{
    showModal: boolean;
    closeModal: () => void;
}
const OrdersModal: FC<ModalProps> = ({ showModal, closeModal}) => {

    const { data: productData } = useQuery("getProductData", getProductData);

    async function getProductData() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }
    return (
        <Modal show={showModal} onClose={closeModal}>
            <Modal.Header>Захиалгийн жагсаалтыг шинэчлэх</Modal.Header>
            <Modal.Body>
                <form className="flex overflow-y-auto flex-col gap-4 max-h-96">
                    <div className="flex gap-4"> 
                    <div className="w-1/2">
                        <div className="block mb-2">
                            <Label htmlFor="packageId" value="Захиалгийн дугаар"/>
                        </div>
                        <TextInput id="packageId" />
                    </div>
                    <div className="w-1/2">
                        <div className="block mb-2">
                            <Label htmlFor="orderedDate" value="Захиалга үүсгэсэн огноо"/>
                        </div>
                        <TextInput id="orderedDate" />
                    </div>
                    </div> 
                    <div className="flex gap-4"> 
                    <div className="w-1/2">
                        <div className="block mb-2">
                            <Label htmlFor="productId" value="Нийлүүлэгч"/>
                        </div>
                        <Select id="productId" placeholder="Нийлүүлэгч" aria-placeholder="Нийлүүлэгч">
                            {productData?.map((i) => (
                                <option key={`product_${i.id}`} value={i.id}>
                                    {i.manufacturerId}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-1/2">
                        <div className="block mb-2">
                            <Label htmlFor="status" value="Статус"/>
                        </div>
                        <TextInput id="status" />
                    </div>
                    </div> 
                </form>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={closeModal} className="bg-gray-400">Устгах</Button>
               <Button  className="bg-orange-500">Шинэчлэх</Button>
            </Modal.Footer>
        </Modal>
    );
}
const Orders = () => {
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
    const [showModal, setShowModal] = useState(false);
    function openModal() {
        setShowModal(true);
      }
    
      function closeModal() {
        setShowModal(false);
      }
    return(
        <Layout>
            <div className="md:grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 md:h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="md:flex justify-between mb-4">                            
                            <div className="md:grid md:grid-cols-6 md:gap-4 space-y-2 md:space-y-0 w-full justify-between">
                                <div className="md:col-span-1 flex md:flex-col  items-center">
                                <div className="mb-2 block w-[40%]  md:w-full ">
                                        <Label htmlFor="order" value="Захиалагч"/>
                                    </div>
                                    <div className="w-[60%] md:w-full">
                                    <Select>
                                        {branch?.map((i) => (
                                            <option value={i.id}>
                                                {i.branchName}
                                            </option>
                                        ))}
                                    </Select>
                                    </div>
                                </div>
                                <div className="md:col-span-1 flex md:flex-col  items-center">
                                <div className="mb-2 block w-[40%]  md:w-full ">
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </div>
                                    <div className="w-[60%] md:w-full">
                                    <TextInput id="search" type="search" placeholder="Хайх" />
                                    </div>
                                    
                                </div>
                                <div className="md:col-span-1 flex md:flex-col  items-center">
                                    <div className="mb-2 block w-[40%]  md:w-full ">
                                        <Label htmlFor="upload" value="Бичиг баримт"/>
                                    </div>
                                    <div className="w-[60%] md:w-full  ">
                                    <FileInput />
                                    </div>
                                    
                                </div>
                                <div className="md:col-span-1 flex md:flex-col  items-center">
                                    <div className="mb-2 block w-[40%] md:w-full   ">
                                        <Label htmlFor="zarlaga" value="Зарлагын падаан"/>
                                    </div>
                                    <div className="w-[60%] md:w-full">
                                        <Button className="bg-orange-500 w-full">Хэвлэх</Button>
                                    </div>
                                </div>
                                <div className="md:col-span-1 flex md:flex-col justify-end items-center">
                                <a href="/orderCreate" className="w-full">
                                    <Button className="bg-orange-500 w-full">Захиалга</Button>
                                </a>
                                </div>
                                <div className="md:col-span-1 flex md:flex-col justify-end items-center">
                                <a href="/zam " className="w-full" >
                                    <Button className="bg-orange-500 w-full">Замын мэдээ оруулах</Button>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 space-y-3 md:space-y-0  ">
                            <div className="md:p-4">
                                <Card>
                                    <h1 className="text-1xl">Захиалгийн жагсаалт</h1>
                                    <div className="hidden md:block" >
                                    <Table>
                                        <Table.Head className="uppercase">
                                            <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                                            <Table.HeadCell>Захиалга үүсгэсэн огноо</Table.HeadCell>
                                            <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                                            <Table.HeadCell>Статус</Table.HeadCell>
                                            <Table.HeadCell>Үйлдэл</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                            {order?.map((order: Order, index: number) => (
                                                <Table.Row key={index}>
                                                    <Table.Cell>{order.packageId}</Table.Cell>
                                                    <Table.Cell>{order.orderedDate}</Table.Cell>
                                                    <Table.Cell>{order.product.manufacturerId}</Table.Cell>
                                                    <Table.Cell>{order.status}</Table.Cell>
                                                    <Table.Cell className="space-y-2">
                                                        <FontAwesomeIcon icon={faEdit} onClick={openModal}/>
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
                                    <h1 className="text-1xl">Захиалгийн дэлгэрэнгүй Гишүүн</h1>
                                    <div className="hidden md:block" >
                                    <Table>
                                        <Table.Head className="uppercase">
                                        <Table.HeadCell>Part Number</Table.HeadCell>
                                        <Table.HeadCell>Тайлбар</Table.HeadCell>
                                        <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
                                        <Table.HeadCell>Fitting Position</Table.HeadCell>
                                        <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                                        <Table.HeadCell>Нийт дүн</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body>
                                            {/* Table post request ywnaa  */}
                                        {product?.map((product: Product, index: number) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{product.productCode}</Table.Cell>
                                                <Table.Cell>{product.productDescription}</Table.Cell>
                                                <Table.Cell>{product.priceMain}</Table.Cell>
                                                <Table.Cell>{product.productFits.positionId}</Table.Cell>
                                                <Table.Cell>{product.productCnt}</Table.Cell>
                                                <Table.Cell>{product.productCnt * product.priceMain}</Table.Cell>
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
                <div className="p-4 space-y-3 bg-gray-200 ">
                    <Card>
                        <h1 className="text-1xl">Захиалгын хураангуй</h1>
                        <div className="hidden md:block" >
                        <ListGroup> 
                                {order?.map((order: Order, index: number) => (
                                    <ListGroup.Item key={index}>
                                        Нийлүүлэгч : {order.product.manufacturerId}
                                        <ListGroup.Item></ListGroup.Item> 
                                        Гишүүн : {order.branch.branchName}
                                        <ListGroup.Item></ListGroup.Item>
                                        Нийт дүн: 
                                        <ListGroup.Item></ListGroup.Item>
                                        Нийт захиалгийн дүн : 
                                        <ListGroup.Item></ListGroup.Item>
                                        Статус : {order.status}
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                        </div>
                    </Card>
                    <div className="">
                    <Card className=""> 
                     <Button className="bg-orange-500">
                     <a href="/nemelt" className="text-1xl">Тээвэрлэлтийн мэдээлэл</a>
                     </Button>
                     <div className="hidden md:block" >
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
                        </div>
                       
                    </Card>
                    </div>
                </div>
            </div>
            <OrdersModal showModal={showModal} closeModal={closeModal}/>
        </Layout>
    );
}
export default Orders;