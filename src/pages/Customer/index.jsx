import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Select,
  ListGroup,
  Dropdown, Textarea, FileInput
} from "flowbite-react";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
  function search() {
    // fetch('/api/customer')
    setShowSearch();
  }

  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Харилцагч нэмэх</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
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
          <h4 className="text-1xl">Харилцагчийн бүртгэл</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Улсын,арлын,утасны дугаараар хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>
                Харилцагч нэмэх
              </Button>
              {/* <a href="/transport">
                <Button className="bg-blue-500">
                  Тээврийн хэрэгсэл нэмэх
                </Button>
              </a> */}
            </div>
          </div>
       


       {/* owner, vehicle search and details  */}

       <div className="grid grid-cols-2">
        <div className="p-4">
          <Card> 
            <h5 className="text-1xl">Харилцагчийн хайлтын жагсаалт</h5>
            <Table> 
              <Table.Head className="uppercase"> 
                 <Table.HeadCell>Овог</Table.HeadCell>
                 <Table.HeadCell>Нэр</Table.HeadCell>
                 <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                 <Table.HeadCell>Имэйл</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>Мөнх-Эрдэнэхуяг</Table.Cell>
                  <Table.Cell>Нямсүрэн</Table.Cell>
                  <Table.Cell>80156917</Table.Cell>
                  <Table.Cell>mnymsuren37@gmail.com</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </div>
        <div className="p-4">
          <Card> 
            <h5 className="text-1xl">Тээврийн хэрэгслийн жагсаалт</h5>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Vin дугаар</Table.HeadCell>
                <Table.HeadCell>Эзэмшигчийн нэр</Table.HeadCell>
                <Table.HeadCell>Make</Table.HeadCell>
                <Table.HeadCell>Model</Table.HeadCell>
                <Table.HeadCell>Үйлдвэрлэсэн он</Table.HeadCell>
                <Table.HeadCell>Импортлосон он</Table.HeadCell>
                <Table.HeadCell>Өнгө</Table.HeadCell>
                <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                <Table.HeadCell>Бүртгэгдсэн он</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Cell>12345</Table.Cell>
                <Table.Cell>Нямсүрэн</Table.Cell>
                <Table.Cell>12345</Table.Cell>
                <Table.Cell>12345</Table.Cell>
                <Table.Cell>
                  <TextInput type="date"/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="date"/>
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>12345</Table.Cell>
                <Table.Cell>
                  <TextInput type="date"/>
                </Table.Cell>
              </Table.Body>
            </Table>
          </Card>
          </div>
        
       </div>
       <div className="p-4">
          <Card> 
            <h5 className="text-1xl">Автомашины дэлгэрэнгүй </h5>
            <a href="/zaswar_service">
              <Button className="bg-blue-500">
                Засвар эхлүүлэх
              </Button>
            </a>
            <Table>
              <Table.Head className="uppercase"> 
                 <Table.HeadCell>Vin дугаар</Table.HeadCell>
                 <Table.HeadCell>Make</Table.HeadCell>
                 <Table.HeadCell>Model</Table.HeadCell>
                 <Table.HeadCell>Төрөл</Table.HeadCell>
                 <Table.HeadCell>Үйлдвэрлэсэн он</Table.HeadCell>
                 <Table.HeadCell>Импортлосон он</Table.HeadCell>
                 <Table.HeadCell>Өнгө</Table.HeadCell>
                 <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                 <Table.HeadCell>Моторын багтаамж</Table.HeadCell>
                 <Table.HeadCell>Шатахууны төрөл</Table.HeadCell>
                 <Table.HeadCell>Хурдны хайрцаг</Table.HeadCell>
                 <Table.HeadCell>Гуйлт</Table.HeadCell>

              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  <Table.Cell> 
                    12345
                  </Table.Cell>
                  
                  </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customer;


{/* <Table>
<Table.Head className="uppercase">
  <Table.HeadCell>Нэр</Table.HeadCell>
  <Table.HeadCell>Тайлбар</Table.HeadCell>
  <Table.HeadCell>Төрөл</Table.HeadCell>
  <Table.HeadCell>Утас</Table.HeadCell>
  <Table.HeadCell>Хариуцсан ажилтан</Table.HeadCell>
  <Table.HeadCell>Үйлдэл</Table.HeadCell>
</Table.Head>
<Table.Body className="divide-y">
  <Table.Row>
    <Table.Cell>ABS All brake system</Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell>Үйлдвэрлэгч</Table.Cell>
    <Table.Cell>+31 30 6861 200</Table.Cell>
    <Table.Cell>Г. Ням-Очир</Table.Cell>
    <Table.Cell className="text-xl space-x-2">
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </Table.Cell>
  </Table.Row>
</Table.Body>
</Table> */}