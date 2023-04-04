import Layout from "../../../components/layout";
import { TextInput, Button, Card, Label, ListGroup, Avatar, Alert} from "flowbite-react";

import React, {Fragment, useState} from "react";
const Checkbox = () => {
    const [showPayment, setPayment] = useState();
    function payment(){
       setPayment();
    }

    return (
        <Layout> 
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-200 h-screen col-span-2">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h5 className="text-1xl">
                           <Alert color="failure" icon="">
                            <span>
                                <span className="font-medium">
                                    Захиалгаа баталгаажуулах  
                                </span>
                            </span>
                           </Alert>
                        </h5>
                        <div className="flex gap-4">
                            <TextInput id="search" type="search" placeholder="Хайх" />
                            <Button className="bg-blue-500">
                                Хайх
                            </Button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2">
                        <div className="p-4">
                            <Card>
                                <h3 className="text-1xl">Хүргэлтийн хаяг</h3>
                                <Label>firstName</Label>
                                <Label>lastName</Label>
                                <Label>Email</Label>
                                <Label>Phone</Label>
                                <Label>Address</Label>
                                <Label>Address line</Label>
                                <Label>City</Label>
                                <Label>State</Label>
                                <Label>Country</Label>
                                <Label>Захиалгын нэмэлт хүсэлт: order_note</Label>
                            </Card>
                        </div>
                        <div className="p-4">
                        <Card>
                        <Alert color="success" rounded={false} withBorderAccent={true} additionalContent={<React.Fragment>
                          <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                            Төлбөрийг шилжүүлэхдээ тухайн өдрийн голомт банкны бэлэн бусын зарахын ханшаар төлнө</div></React.Fragment>}>
                         <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
                            Төлбөр шилжүүлэх мэдээлэл.
                          </h3>
                        </Alert>
                        <Label>Банкны нэр:Голомт банк</Label>
                        <Label>Дансны дугаар:1415119905</Label>
                        <Label>Дансны нэр:Сүлд Юнайтед ХХК</Label>
                        <Label>Гүйлгээний утга: 2023031644 утгаа backend automataar awah</Label>
                        <a href="/payment">
                        <Button className="bg-blue-500" onClick={payment}> 
                            Захиалга батлах
                        </Button>
                       </a>
                       </Card>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-span">
                <div className="p-2">
                <Card>
                    <h3 className="text-1xl">Захиалгын сэлбэгүүдийг хянах</h3>
                       <div className="p-2"> 
                         <Card className="max-w-sm"> 
                                <h1 className="text-1xl">Сагс</h1>
                                    <div className="w-50"> 
                                    <ListGroup> 
                                    <ListGroup.Item> 
                                        Сериал: EK508 
                                    </ListGroup.Item>
                                        <ListGroup.Item> 
                                        <Avatar src=""/>
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Партын дугаар: 12345
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Тайлбар: Meyle
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Нэгжийн үнэ: 50
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Валют: $
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Тоо ширхэг: 1
                                    </ListGroup.Item>
                                    <ListGroup.Item> 
                                        Нийт үнэ: 50$
                                    </ListGroup.Item>
                                    </ListGroup>
                                    </div>
                                </Card>
                             </div>
                       </Card>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Checkbox;