import { TextInput, Button, Select, ListGroup, Table, Card, Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import {useState} from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { ListGroupItem } from "flowbite-react/lib/esm/components/ListGroup/ListGroupItem";

 const Sale = () => {
   const [showSearch, setShowSearch] = useState();

   
   const { data: serviceHistory} = useQuery("getServiceHistory", getServiceHistory);

   async function getServiceHistory(){
    const response = await axiosClient.get("/service_histories");
    return response.data;
   }

   function search(){
       setShowSearch()
   }

    return (
        <Layout> 
        <div className="grid grid-cols-3 gap-4">
           <div className="p-4 bg-gray-200 h-screen col-span-2">
            <div className="bg-white p-6 rounded-lg">
               <div className="flex justify-between mb-4">
                  <h4 className="text-1xl">Засвар борлуулалтын бүртгэлийн түүх</h4>
                  <div className="flex gap-4">
                     <TextInput id="search" type="search" placeholder="Хайх" />
                     <Button className="bg-blue-500" onClick={search}>
                        Хайх
                     </Button>
                  </div>
               </div>
               {/* Огнооны slicer */}
               <div className="flex gap-4">
                 <TextInput type="date"/>
               </div>
              
                  <div className="p-4">
                     <Card>
                     <h4 className="text-1xl">Үйлчилгээний жагсаалт</h4>
                     <Table> 
                            <Table.Head className="uppercase">
                              <Table.HeadCell>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Үйлчилгээний нэр
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Тоо ширхэг
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Нэгжийн үнэ
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y bg-scroll">
                              {serviceHistory?.map((serviceHistory, index)=> (
                                <Table.Row key={index}>
                                     <Table.Cell><Checkbox /></Table.Cell>
                                    <Table.Cell>{serviceHistory.service.name}</Table.Cell>
                                    <Table.Cell>{serviceHistory.quantity}</Table.Cell>
                                    <Table.Cell>{serviceHistory.service.price}</Table.Cell>
                                </Table.Row>
                              ))}
                            </Table.Body>
                        </Table>
                     </Card>
                  </div>
                  <div className="p-4">
                     
                     <Card> 
                     <h4 className="text-1xl">Засварын хуудасны дэлгэрэнгүй</h4>
                        <Table> 
                            <Table.Head className="uppercase">
                               
                                <Table.HeadCell>
                                    Үйлчилгээний нэр
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Үйлчилгээ хийсэн механикч
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Тоо ширхэг
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Нэгжийн үнэ
                                </Table.HeadCell>
                                
                                <Table.HeadCell>
                                    Хямдрал
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Нийт
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Дараагийн үйлчилгээний хуваарь
                                </Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                              {serviceHistory?.map((serviceHistory, index) => (
                                <Table.Row key={index}>
                                  <Table.Cell>{serviceHistory.service.name}</Table.Cell>
                                  <Table.Cell>{serviceHistory.ajilGuitsetgesenAjiltan.name}</Table.Cell>
                                  <Table.Cell>{serviceHistory.quantity}</Table.Cell>
                                  <Table.Cell>{serviceHistory.service.price}</Table.Cell>
                                  <Table.Cell>{serviceHistory.discount}</Table.Cell>
                                  <Table.Cell></Table.Cell>
                                  <Table.Cell>{serviceHistory.serviceDate}</Table.Cell>
                                </Table.Row>
                              ))}
                               
                            </Table.Body>
                        </Table>
                    </Card>
                  </div>
            </div>
           </div>
           <div className="col-span">
           <div className="p-4">
                  <Card className="max-w-sm">
                        <h1 className="text-1xl">Засварын хуудас</h1>
                        <ListGroup> 
                        {serviceHistory?.map((serviceHistory, index)=> (
                  <ListGroup.Item>
                    Ажлын хөлс: {serviceHistory.quantity}
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                    Материал: {serviceHistory.service.price}
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    Хямдрал: {serviceHistory.discount}
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    Нийт: {serviceHistory.discount}
                    
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Төлбөр төлөх хэлбэр
                  <Select>
                    <option value="bill">Бэлэн</option>
                    <option value="cart">Карт</option>
                    <option value="transfer">Шилжүүлэг</option>
                  </Select>
                </ListGroup.Item> 
                  </ListGroup.Item>
                ))}
                        </ListGroup>
                    </Card>
                  </div>
           </div>
           </div>
        </Layout>
    );
 }

 export default Sale;