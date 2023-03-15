import Layout from "../../components/layout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TextInput, Button, Table,  Modal, Label, FileInput} from "flowbite-react";
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
                  <Label htmlFor="role" value="Хариуцсан үүрэг" />
                </div>
                <TextInput id="role" />
              </div>
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
          <h4 className="text-1xl">Харилцагчын жагсаалт
         </h4>
         
          
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500" onClick={openModal}>
                Ажилтан нэмэх
              </Button>
            </div>
          </div>
          <Table> 
                        <Table.Head className="uppercase">
                        <Table.HeadCell>Ажилтны дугаар</Table.HeadCell>
                        <Table.HeadCell>Нэр</Table.HeadCell>
                        <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                        <Table.HeadCell>Хүйс</Table.HeadCell>
                        <Table.HeadCell>Хариуцсан үүрэг</Table.HeadCell>
                        <Table.HeadCell>Мэргэжил</Table.HeadCell>
                        <Table.HeadCell>Ажилд орсон он сар</Table.HeadCell>
                        <Table.HeadCell>Үйлдэл</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row> 
                                <Table.Cell>NN-1</Table.Cell>
                                <Table.Cell>Example</Table.Cell>
                                <Table.Cell>90909090</Table.Cell>
                                <Table.Cell>Эм</Table.Cell>
                                <Table.Cell>full stack developer</Table.Cell>
                                <Table.Cell>IT</Table.Cell>
                                <Table.Cell>2023.03.13</Table.Cell>
                                <Table.Cell className="text-xl space-x-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrash} />
                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
          </div>
          
          </div>
        </Layout>
    );
}
export default Human;