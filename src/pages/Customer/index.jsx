import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Select,
  ListGroup,
  Dropdown
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
                  <Label htmlFor="name" value="Нэр" />
                </div>
                <TextInput id="name" />
              </div>
              {/* <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Yндсэн категори" />
                </div>
                <Select id="category">
                  <option value="B2C">B2C</option>
                  <option value="other">Бусад</option>
                </Select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Хаяг" />
                </div>
                <TextInput id="address" />
              </div>
              <div className="w-1/2 flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="creditDate" value="Кредит хоног" />
                  </div>
                  <TextInput type="number" id="creditDate" defaultValue={0} />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="agent" value="Хариуцсан агент" />
                  </div>
                  <Select id="agent">
                    <option value="">Г. Ням-Очир</option>
                  </Select>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Тайлбар" />
              </div>
              <Textarea id="description" rows={4} />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="web" value="Веб сайт" />
                </div>
                <TextInput id="web" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="facebook" value="Фэйсбүүк пэйж" />
                </div>
                <TextInput id="facebook" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Байгууллагын Утас" />
                </div>
                <TextInput id="phone" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="logo" value="Лого" />
                </div>
                <FileInput id="logo" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Имэйл" />
                </div>
                <TextInput id="email" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Нууц үг" />
                </div>
                <TextInput id="password" type="password" />
              </div>
            </div> */}
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
          <h4 className="text-1xl">Харилцагч</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Улсын,арлын,утасны дугаараар хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>
                Харилцагч нэмэх
              </Button>
            </div>
          </div>
         <div className="grid grid-cols-3"> 
       
         <div className="col-span-2"> 
            <div className="w-50">
              <Card>
              <h1>Хайлтын жагсаалт</h1>
              <Table>
                 <Table.Head className="uppercase"> 
                 <Table.HeadCell>Овог нэр</Table.HeadCell>
                 <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                 <Table.HeadCell>Загварын нэр</Table.HeadCell>
                 <Table.HeadCell>Өнгө</Table.HeadCell>
                 <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                 <Table.HeadCell>Арлын дугаар</Table.HeadCell>
                
                 </Table.Head>
                 <Table.Body className="divide-y">
                  <Table.Row>
                    <Table.Cell>М.Нямсүрэн</Table.Cell>
                    <Table.Cell>80156917</Table.Cell>
                    <Table.Cell>Prius</Table.Cell>
                    <Table.Cell>Хар</Table.Cell>
                    <Table.Cell>1234УБЯ</Table.Cell>
                    <Table.Cell>1234</Table.Cell>
                  </Table.Row>
                 </Table.Body>
              </Table>
              </Card>
              </div>
         </div>
         <div className="p-4"> 
            <div className="w-68"> 
            <Card>
            <h1>Засварын хуудас</h1>
            <ListGroup> 
              <ListGroup.Item>
                Ажлын хөлс: Нийлбэр харагдана
              </ListGroup.Item>
              <ListGroup.Item>
                Материал: Нийлбэр харагдана
              </ListGroup.Item>
              <ListGroup.Item>
                Хямдрал урамшуулал: Дүн
              </ListGroup.Item>
              <ListGroup.Item>
                Нийт: Дүн
              </ListGroup.Item>
              <ListGroup.Item>
              Төлбөр төлөх хэлбэр
               &nbsp;
              <Select>
                
                <option value="belen">Бэлэн</option>
                <option value="cart">Карт</option>
                <option value="qpay">Qpay</option>
              </Select>
              </ListGroup.Item>
             
            </ListGroup>
            </Card>
            </div>
          </div>
         
          <div className="p-4"> 
            <div className="w-58">
              <Card>
              <h1>Эзэмшигчийн дэлгэрэнгүй</h1>
              <Table> 
                <Table.Head className="uppercase"> 
                  <Table.HeadCell> 
                    Овог Нэр
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Арлын дугаар
                  </Table.HeadCell>
                  <Table.HeadCell> 
                      Загварын нэр
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Модел нэр
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Үйлдвэрлэгдсэн он
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Импортлогдсон он
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Өнгө
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Улсын дугаар
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Бүртгэгдсэн он 
                  </Table.HeadCell>
                  <Table.HeadCell> 
                    Гишүүнд бүртгэгдсэн он сар
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y"> 
                <Table.Row> 
                  <Table.Cell>М.Нямсүрэн</Table.Cell>
                  <Table.Cell>1234</Table.Cell>
                  <Table.Cell>Prius</Table.Cell>
                  <Table.Cell>Prius</Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" id="date"/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" id="date"/>
                  </Table.Cell>
                  <Table.Cell>Хар</Table.Cell>
                  <Table.Cell>1234УБЯ</Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" id="date"/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" id="date"/>
                  </Table.Cell>
                </Table.Row>
                </Table.Body>
              </Table>
              </Card>
         </div>
         </div>
         

        <div className="col-span-2">
        <div className="p-4"> 
            <div className="w-68"> 
            <Card>
            <h1>Автомашины дэлгэрэнгүй</h1>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell> 
                  Make name
                </Table.HeadCell>
                <Table.HeadCell> 
                  Загварын нэр
                </Table.HeadCell>
                <Table.HeadCell> 
                  Үйлдвэрлэгчийн нэр
                </Table.HeadCell>
                <Table.HeadCell> 
                  Үйлдвэрлэсэн жилээс өмнөх он
                </Table.HeadCell>
                <Table.HeadCell> 
                  Үйлдвэрлэсэн жил
                </Table.HeadCell>
                <Table.HeadCell> 
                  Машины анги
                </Table.HeadCell>
                <Table.HeadCell> 
                  Машины эд анги
                </Table.HeadCell>
                <Table.HeadCell> 
                  Онцлосон шалгах 
                </Table.HeadCell>
              </Table.Head>
              <Table.Body> 
                <Table.Row> 
                  <Table.Cell>Rivan</Table.Cell>
                  <Table.Cell>R1T</Table.Cell>
                  <Table.Cell>Abarth</Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="date" />
                  </Table.Cell>
                  <Table.Cell>SUV</Table.Cell>
                  <Table.Cell>SUV</Table.Cell>
                  <Table.Cell>
                   <Select> 
                    <option value="true">True</option>
                    <option value="false">False</option>
                   </Select>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            </Card>
            </div>
         </div>
        </div>
        <div className="col-span-2">
       
            <div className="w-68"> 
            <Card>
            <h1>Үйлчилгээний дэлгэрэнгүй</h1>
            <Table> 
              <Table.Head className="uppercase"> 
                <Table.HeadCell>Items</Table.HeadCell>
                <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                
                <Table.HeadCell>Нийт үнэ</Table.HeadCell>
              </Table.Head>
              <Table.Body> 
                <Table.Row> 
                  <Table.Cell>11</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>11.0000</Table.Cell>
                  <Table.Cell>11.0000</Table.Cell>
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