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
            <div className="md:grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 md:h-screen col-span-2">
                    <div className="bg-white p-6 rounded-lg">
                        <div className="md:flex justify-between mb-4">                            
                            <div className="md:grid md:grid-cols-6 md:gap-4 space-y-2 md:space-y-0 w-full justify-between">
                                <div className="md:col-span-1 flex md:flex-col  items-center">
                                <div className="mb-2 block w-[40%]  md:w-full ">
                                        <Label htmlFor="supplier" value="Нийлүүлэгч" />
                                    </div>
                                    <div className="w-[60%] md:w-full">
                                    <Select>
                                        
                                        {supplier?.map((i) => (
                                            <option value={i.id}>
                                                {i.supplierList}
                                            </option>
                                        ))}
                                    </Select>
                                    </div>
                                </div>
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
                                <a href="/zam " className="w-full" >
                                    <Button className="bg-orange-500 w-full" >Замын мэдээ оруулах</Button>
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
                                            
                                        </Table.Head>
                                        <Table.Body>
                                            {/* table post request ywnaa */}
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
                                    </div>
                                <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
                        {orderDetail?.map((orderDetail: OrderDetail, index: number) => (
                            <div className="bg-white border  border-orange-500 p-1 text-[10px] rounded-md text-gray-600 flex">
                                <div className="w-[50%]" >
                                    <div className="font-bold text-black" >Захиалгийн дугаар</div>
                                    <div className="font-bold">Захиалга үүсгэсэн огноо</div>
                                    <div>Нийлүүлэгч</div>
                                    <div>Статус</div>
                                </div>
                                <div className="w-[50%]" key={index} >
                                    <div>{orderDetail.order_id}</div>
                                        <div>{orderDetail.createdAt}</div>
                                        <div>{orderDetail.supplier.supplierList}</div>
                                        <div>{orderDetail.statusType.statusName}</div>
                                    <div/>
                                </div>
                            </div>
                            ))}
                            </div>
                                </Card>
                            </div>
                            <div className="md:p-4">
                                <Card>
                                    <h1 className="text-1xl">Захиалгийн дэлгэрэнгүй Гишүүн</h1>
                                    <div className="hidden md:block" >
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
                                            {/* Table post request ywnaa  */}
                                        {product?.map((product: Product, index: number) => (
                                            <Table.Row key={index}>
                                                <Table.Cell>{product.productCode}</Table.Cell>
                                                <Table.Cell>{product.productName}</Table.Cell>
                                                <Table.Cell>{product.productDescription}</Table.Cell>
                                                <Table.Cell></Table.Cell>
                                                <Table.Cell>{product.priceMain}</Table.Cell>
                                                <Table.Cell>{product.prodmetric.typeId}</Table.Cell>
                                            </Table.Row>
                                        ))}
                                        </Table.Body>
                                    </Table>
                                    </div>

                                    <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
                                    {product?.map((product: Product, index: number) => (
                            <div className="bg-white border  border-orange-500 p-1 text-[10px] rounded-md text-gray-600 flex">
                                <div className="w-[50%]" >
                                    <div className="font-bold text-black" >Партын дугаар</div>
                                    <div className="font-bold">Тайлбар</div>
                                    <div>Нэгжийн үнэ</div>
                                    <div>Fitting</div>
                                    <div>Тоо хэмжээ</div>
                                    <div>Нийт дүн</div>
                                </div>
                                <div className="w-[50%]" key={index} >
                                    <div>{product.part_number}</div>
                                        <div>{product.description}</div>
                                        <div>{product.netPrice}</div>
                                        <div>{product.fittingPostion}</div>
                                        <div>{product.quantity}</div>
                                        <div>{product.netPrice * product.quantity}</div>
                                    <div/>
                                </div>
                            </div>
                            ))}
                            </div>
                                   
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-3 bg-gray-200 ">
                    <Card className="">
                        <h1 className="text-1xl">Захиалгын хураангуй (Гишүүд)</h1>
                        <div className="hidden md:block" >
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell>Гишүүд</Table.HeadCell>
                                <Table.HeadCell>Бүтээгдэхүүн</Table.HeadCell>
                                <Table.HeadCell>Захиалгийн дугаар</Table.HeadCell>
                                <Table.HeadCell>Нийт захиалгийн дүн</Table.HeadCell>
                                <Table.HeadCell>Гишүүн захиалгийн дугаар</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {order?.map((order: Order, index: number) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{order.branch.branchName}</Table.Cell>
                                        <Table.Cell>{order.product.productName}</Table.Cell>
                                        <Table.Cell>{order.numbOfProd}</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>{order.packageId}</Table.Cell>
                                        
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                        </div>
                        <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
                        {order?.map((order: Order, index: number) => (
                            <div className="bg-white border  border-orange-500 p-1 text-[10px] rounded-md text-gray-600 flex">
                                <div className="w-[50%]" >
                                    <div className="font-bold text-black" >Гишүүд</div>
                                    <div className="font-bold">Гишүүн Нийт дүн</div>
                                    <div>Нийт захиалгийн дүн</div>
                                    <div>Fitting</div>
                                    <div>Тоо хэмжээ</div>
                                    <div>Статус</div>
                                </div>
                                <div className="w-[50%]" key={index} >
                                    <div>{order.affiliate.affiliateName}</div>
                                    <div>{order.memberPrice}</div>
                                    <div>{order.product.quantity * order.product.netPrice}</div>
                                    <div>{order.statusType.statusName}</div>
                                    <div/>
                                </div>
                            </div>
                            ))}
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
                        <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
                        {teevriinZahialga?.map((teevriinZahialga: TeevriinZahialga, index: number) => (
                            <div className="bg-white border  border-orange-500 p-1 text-[10px] rounded-md text-gray-600 flex">
                                <div className="w-[50%]" >
                                    <div className="font-bold text-black" >Тээвэрлэгч</div>
                                    <div className="font-bold">Тээврийн захиалгийн дугаар</div>
                                    <div>Тээврийн төрөл:</div>
                                </div>
                                <div className="w-[50%]" key={index} >
                                    <div>{teevriinZahialga.name}</div>
                                    <div>{teevriinZahialga.teevriinZahialgaId}</div>
                                    <div>{teevriinZahialga.statusName}</div>
                                    <div/>
                                </div>
                            </div>
                            ))}
                            </div>
                    </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Orders;