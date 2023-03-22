import Layout from "../../components/layout";
import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Select,
  ListGroup,
  Dropdown, Textarea, FileInput, Checkbox
} from "flowbite-react";

import {useState } from "react";

  const Human = ()=> {

    const [showModal, setShowModal] = useState(false);

    const [showSearch, setShowSearch] = useState();

    function openModal(){
      setShowModal(true);
    }
    function closeModal(){
      setShowModal(false);
    }

    function createHuman(){
      setShowModal(false);
    }

    function search(){
      setShowSearch();
    }
    return(
      <Layout> 
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Ажилчид нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="Овог" />
                  </div>
                  <TextInput id="firstName"/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Нэр"/>
                  </div>
                  <TextInput id="lastName" type="text"/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Утасны дугаар" />
                  </div>
                  <TextInput id="phone" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Имэйл"/>
                  </div>
                  <TextInput id="email" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="register_number" value="Регистрийн дугаар" />
                  </div>
                  <TextInput id="register_number"/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="image" value="Ажилчдын зураг" /> 
                  </div>
                  <FileInput id="image" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="profession" value="Албан тушаал"/>
                  </div>
                  <TextInput type="profession"/>
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
              <h4 className="text-1xl">Ажилчид</h4>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх"/>
                <Button className="bg-blue-500" onClick={search}>
                  Хайх
                </Button>
                <Button className="bg-blue-500" onClick={openModal}>
                 Ажилчид нэмэх
              </Button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Ажилчдын жагсаалт</h4>
                  
                </Card>
                </div>
              <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Хийсэн үйлчилгээний жагсаалт</h4>
                </Card>
              </div>
              <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Сонгосон ажилчны дэлгэрэнгүй</h4>
                  <Table> 
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                      <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                      <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                      <Table.HeadCell>Үйлчилгээ хийсэн механикч</Table.HeadCell>
                      <Table.HeadCell>Хямдрал</Table.HeadCell>
                      <Table.HeadCell>Нийт</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row>
                        <Table.Cell>Example</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>10.000</Table.Cell>
                        <Table.Cell>Example</Table.Cell>
                        <Table.Cell>Calculate</Table.Cell>
                        <Table.Cell>20.000</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  export default Human;