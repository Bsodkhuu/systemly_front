import { TextInput, Button, Table, Card, ListGroup, Select} from "flowbite-react";
import Layout from "../../../components/layout";
import { useState } from "react";

const ZaswarService = () => {
    const [showSearch, setShowSearch] = useState();

    function search(){
        setShowSearch()
    }
    return (
        <Layout>
           <div className="p-4 bg-gray-200 h-screen w-full">
            <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between mb-4">
                    <h4 className="text-1xl">Засвар үйлчилгээний бүртгэл</h4>
                    <div className="flex gap-4">
                        <TextInput id="search" type="search" placeholder="Хайх"/>
                        <Button className="bg-blue-500" onClick={search}>
                            Хайх
                        </Button>
                    </div>
                </div>

                {/* ezamshigchin details,  */}

                <div className="p-4"> 
                <Card> 
                   <h4 className="text-1xl">Эзэмшигчийн дэлгэрэнгүй</h4>

                   <Table>
                    <Table.Head className="uppercase">
                        <Table.HeadCell>Овог</Table.HeadCell>
                        <Table.HeadCell>Нэр</Table.HeadCell>
                        <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                        <Table.HeadCell>Имэйл</Table.HeadCell>
                        <Table.HeadCell>Төрсөн он сар</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                       <Table.Cell>Мөнх-Эрдэнэхуяг</Table.Cell>
                       <Table.Cell>Нямсүрэн</Table.Cell>
                       <Table.Cell>80156917</Table.Cell>
                       <Table.Cell>mnymsuren37@gmail.com</Table.Cell>
                       <Table.Cell>
                        <TextInput type="date"/>
                       </Table.Cell>
                    </Table.Body>
                   </Table>
                </Card>
                </div>

                {/* service details, zaswarin tolwor */}

                <div className="grid grid-cols-2 divide-x">
                    <div className="p-4"> 
                    <Card> 
                        <h1 className="text-1xl">Үйлчилгээний дэлгэрэнгүй</h1>
                        <Table> 
                            <Table.Head className="uppercase">
                                <Table.HeadCell>
                                    Үйлчилгээний нэр
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Тоо ширхэг
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Нэгжийн үнэ
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Үйлчилгээ хийсэн механикч
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
                                <Table.Cell>Наклад солих</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>
                                    21000
                                </Table.Cell>
                                <Table.Cell>hyzaarf</Table.Cell>
                                <Table.Cell>
                                    Calculate
                                </Table.Cell>
                                <Table.Cell>
                                    Calculate
                                </Table.Cell>
                                <Table.Cell>
                                    <TextInput type="date"/>
                                </Table.Cell>
                            </Table.Body>
                        </Table>
                    </Card>
                    </div>
                    <div className="p-3"> 

                    <Card className="max-w-sm">
                        <h1 className="text-1xl">Засварын хуудас</h1>
                        <ListGroup> 
                            <ListGroup.Item>
                                Ажлын хөлс: Нийлбэр
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Материал: Нийлбэр
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Хямдрал урамшуулал: Дүн
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Нийт: Дүн
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Төлбөр төлөх хэлбэр
                                <Select>
                                    <option value="bill">Бэлэн</option>
                                    <option value="cart">Карт</option>
                                    <option value="transfer">Шилжүүлэг</option>
                                </Select>

                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                </div>
            </div>
           </div>
        </Layout>
    );
}

export default ZaswarService;