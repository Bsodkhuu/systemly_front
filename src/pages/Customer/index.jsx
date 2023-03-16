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

const Customer = () => {
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
              <div className="w-1/2">
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
            <h1 className="text-2xl">Харилцагчын жагсаалт</h1>
            <div className="flex gap-4">
              <Label>Улсын дугаар</Label>
              <Label>Арлын дугаар</Label>
              <Label>Утасны дугаар</Label>
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500">
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>
                Харилцагч нэмэх
              </Button>
            </div>
          </div>
          <Table>
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
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Customer;
