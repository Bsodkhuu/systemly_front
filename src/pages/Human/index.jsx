import Layout from "../../components/layout";
import { useState } from "react";

import { TextInput, Button, Table, Card, Modal,Avatar, Label, FileInput, Checkbox, Select} from "flowbite-react";
const Human = () => {
    const [showModal, setShowModal] = useState(false);

    function openModal(){
        setShowModal(true);
    }
    function closeModal(){
        setShowModal(false);
    }
    function createHuman(){
        //fetch
        setShowModal(false);
    }
    return (
        <Layout>
           <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Шинэ ажилтан нэмэх</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="employeeId" value="Ажилтны дугаар" />
                </div>
                <TextInput id="employeeId" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Нэр" />
                </div>
                <TextInput id="name"/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Утасны дугаар" />
                </div>
                <TextInput id="phone" />
              </div>
              <div className="w-1/2 flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="gender" value="Хүйс" />
                  </div>
                  <TextInput type="text" id="gender"/>
                </div>
              </div>
            </div>
           
            <div className="flex gap-4">
             
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Зураг оруулах" />
                </div>
                <FileInput id="image" />
              </div>
            </div>

            <div className="flex gap-4">
                <div className="w-1/2">
                    <div className="mb-2 block">
                        <Label htmlFor="profession" value="Мэргэжил"/>
                    </div>
                    <TextInput id="profession" />
                </div>
                <div className="w-1/2"> 
                <div className="mb-2 block">
                  <Label htmlFor="startDate" value="Ажилд орсон он сар" /> 
                </div>
                <TextInput id="startDate" type="date" />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <div className="mb-2 block">
                        <Label htmlFor="job" value="Ажиллаж байгаа эсэх"/>
                    </div>
                    <Select> 
                        <option value="job">Ажиллаж байгаа</option>
                        <option value="job">Ээлжийн амралт</option>
                        <option value="job">Томилолт</option>
                        <option value="job">Ажлаас гарсан</option>
                        </Select>
                </div>

                </div>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button onClick={createHuman} className="bg-blue-500">
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
          <h4 className="text-1xl">Ажилтан
         </h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500" onClick={openModal}>
                Ажилтан нэмэх
              </Button>
            </div>
          </div>
           <div className="grid grid-cols-2"> 
           <div className="p-4"> 
           <Card>
           <h5 className="text-1xl">Ажилтны жагсаалт</h5>
            <div className="flex gap-4">
              <Button className="bg-blue-500">Идэвхитэй</Button>
              <a href="/employee_history"> 
               <Button className="bg-blue-500">
                 Түүх
               </Button>
               </a>
            </div>
            <Table> 
              <Table.Head className="uppercase"> 
                <Table.HeadCell>
                  {/* <Avatar src="">
                  </Avatar> */}
                </Table.HeadCell>
                <Table.HeadCell>
                  Ажилтны зураг
                </Table.HeadCell>
                <Table.HeadCell>Ажилтны дугаар</Table.HeadCell>
                <Table.HeadCell>Овог нэр</Table.HeadCell>
               
                <Table.HeadCell>Мэргэжил</Table.HeadCell>
              </Table.Head>
              <Table.Body> 
                <Table.Row>
                  <Table.Cell>
                    <Checkbox/>
                  </Table.Cell>
                  <Table.Cell>
                  <Avatar src="">
                    </Avatar>
                  </Table.Cell>
                  <Table.Cell>
                    12345
                  </Table.Cell>
                  <Table.Cell>
                    Example
                  </Table.Cell>
                  <Table.Cell>
                    Example
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
           </Card>
          </div>
          {/* Сонгосон ажилтны дэлгэрэнгүй */}
          <div className="p-4"> 
          <div className="w-50"> 
            <Card> 
              <h1>Сонгосон ажилтны дэлгэрэнгүй</h1>
              <Table>
                <Table.Head className="uppercase">
                   <Table.HeadCell>
                    Ажилтны зураг
                   </Table.HeadCell>
                   <Table.HeadCell>
                    Ажилтны дугаар
                   </Table.HeadCell>
                   <Table.HeadCell>
                    Овог нэр
                   </Table.HeadCell>
                   <Table.HeadCell>
                    Утасны дугаар
                   </Table.HeadCell>
                   <Table.HeadCell>
                    Хүйс
                   </Table.HeadCell>
                   
                   <Table.HeadCell>
                    Мэргэжил
                   </Table.HeadCell>
                  
                   <Table.HeadCell>
                    Ажилд орсон он сар
                   </Table.HeadCell>
                   
                </Table.Head>
                <Table.Body> 
                  <Table.Row> 
                    <Table.Cell>
                      <Avatar src=""/>
                    </Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>Example</Table.Cell>
                    <Table.Cell>12345678</Table.Cell>
                    <Table.Cell>
                     Эм 
                    </Table.Cell>
                    
                    <Table.Cell>IT Enginer</Table.Cell>
                   
                    <Table.Cell>
                      <TextInput type="date"/>
                    </Table.Cell>
                    
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
    );
}
export default Human;