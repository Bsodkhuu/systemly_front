import {
    Button,
    FileInput,
    Label,
    Modal,
    Select,
    Table,
    TextInput,
    Textarea,
  } from "flowbite-react";
  import Layout from "../../components/layout";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
  
  const Transport = () => {
    const [showModal, setShowModal] = useState(false);
  
    function openModal() {
      setShowModal(true);
    }
  
    function closeModal() {
      setShowModal(false);
    }
  
    function createCustomer() {
      // fetch('/api/customer')
      setShowModal(false);
    }
  
    return (
      <Layout>
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Тээврийн хэрэгсэл нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="make_id" value="Загварын дугаар" />
                  </div>
                  <TextInput id="make_id" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="model_id" value="Модел дугаар" />
                  </div>
                  <TextInput id="model_id"/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Нэр" />
                  </div>
                  <TextInput id="name" />
                </div>
                <div className="w-1/2 flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="manufacturer_id" value="Үйлдвэрлэгчийн дугаар" />
                    </div>
                    <TextInput id="manufacturer_id" />
                  </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                      <Label htmlFor="manufacturer_name" value="Үйлдвэрлэгчийн нэр" />
                    </div>
                    <TextInput id="manufacturer_name" />
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="featured_check" value="Үйлдвэрлэгч шалгах" />
                </div>
                <Select id="featured_check">
                      <option value="true">Үнэн</option>
                      <option value="false">Худал</option>
                    </Select> 
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="vehicle_production_year_from" value="Үйлдвэрлэсэн оноос хойш" />
                  </div>
                  <TextInput id="vehicle_production_year_from" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="vehicle_production_year_to" value="Үйлдвэрлэсэн жил" />
                  </div>
                  <TextInput id="vehicle_production_year_to" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="vehicle_class_id" value="Ангиллын дугаар" />
                  </div>
                  <TextInput id="vehicle_class_id" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="vehicle_body_type_id" value="Их биеийн төрөл" />
                  </div>
                  <TextInput id="vehicle_body_type_id" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="color_name_en" value="Өнгө" />
                  </div>
                  <TextInput id="color_name_en" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="check" value="Онцолсон шалгасан" />
                  </div>
                  <Select id="check">
                      <option value="true">Үнэн</option>
                      <option value="false">Худал</option>
                    </Select> 
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={createCustomer} className="bg-blue-500">
              Хадгалах
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h1 className="text-2xl">Тээврийн хэрэгслийн жагсаалт</h1>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500" onClick={openModal}>
                  Тээврийн хэрэгсэл нэмэх
                </Button>
              </div>
            </div>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Загварын дугаар</Table.HeadCell>
                <Table.HeadCell>Модел дугаар</Table.HeadCell>
                <Table.HeadCell>Нэр</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэгчийн дугаар</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэгчийн нэр</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэгч шалгах</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэсэн оноос хойш</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэсэн жил</Table.HeadCell>
                <Table.HeadCell>Ангиллын дугаар</Table.HeadCell>
                <Table.HeadCell>Их биеийн төрөл</Table.HeadCell>
                <Table.HeadCell>Өнгө</Table.HeadCell>
                <Table.HeadCell>Онцолсон шалгасан</Table.HeadCell>
                {/* <Select> 
                    <option value="True">Үнэн</option>
                    <option value="False">Худал</option>
                </Select> */}
                <Table.HeadCell>Үйлдэл</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>Rivian</Table.Cell>
                  <Table.Cell>1111111111</Table.Cell>
                  <Table.Cell>R1T</Table.Cell>
                  <Table.Cell>1000001</Table.Cell>
                  <Table.Cell>Abarth</Table.Cell>
                   <Select> 
                    <option value="True">Үнэн</option>
                    <option value="False">Худал</option>
                </Select>
                <Table.Cell>2000</Table.Cell>
                <Table.Cell>2005</Table.Cell>
                <Table.Cell>SUV</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>Хар</Table.Cell>
                <Select> 
                    <option value="True">Үнэн</option>
                    <option value="False">Худал</option>
                </Select>
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
  };
  
  export default Transport;
  
