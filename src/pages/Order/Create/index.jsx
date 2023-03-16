import { Button,Card,Label,Avatar, TextInput, Textarea, ListGroup} from "flowbite-react";
import { useState } from "react";

import Layout from "../../../components/layout";


const Create = () => {
    const [showSave, setSave] = useState();
    function save(){
        setSave();
    }
    return (
    <Layout> 
        <div className="p-4 bg-gray-299 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
             <div className="flex justify-between mb-4">
                <h4 className="text-1xl">Хүргэлтийн хаяг</h4>
                <div className="flex gap-4">
                    <TextInput id="search" type="search" placeholder="Хайх" />
                    <Button className="bg-blue-500">Хайх</Button>
                </div>
             </div>
            
             <div className="grid grid-cols-2 ">
               <div className="p-4"> 
               <Card className="max-w-sm"> 
               <form className="flex flex-col gap-4"> 
                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="firstName" value="Овог" />
                      </div>
                      <TextInput id="firstName" />
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="lastName" value="Нэр" />
                    </div>
                    <TextInput id="lastName" />
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="email" value="Имэйл" />
                      </div>
                      <TextInput id="email" />
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="phone" value="Утасны дугаар" />
                    </div>
                    <TextInput id="phone" />
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="address" value="Хаяг" />
                      </div>
                      <TextInput id="address" />
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="address_line" value="Хаяг №2" />
                    </div>
                    <TextInput id="address_line" />
                    </div>
                 </div>


                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="city" value="Хот" />
                      </div>
                      <TextInput id="city" />
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="state" value="Бүс" />
                    </div>
                    <TextInput id="state" />
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="country" value="Улс" />
                      </div>
                      <TextInput id="country" />
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="order_note" value="Захиалгийн тайлбар" />
                    </div>
                    <Textarea id="order_note"/>
                    </div>
                 </div>
               </form>
                </Card>
                
                </div>
                
                <div className="p-4"> 
                
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
             &nbsp;
            <a href="/checkbox"> 
            <Button  className="bg-blue-500"> 
              Захиалга баталгаажуулах 
            </Button>
            </a>
            &nbsp;
            <a href="/order"> 
            <Button  className="bg-blue-500"> 
              Сэлбэг хайх
            </Button>
            </a>
            </div>
        </Card>
                </div>
                </div>
            </div>
               
                
           </div>
    
        </Layout>
    );
}

export default Create;