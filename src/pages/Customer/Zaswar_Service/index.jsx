import {
  TextInput,
  Button,
  Table,
  Card,
  ListGroup,
  Select,
} from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const ZaswarService = () => {
  const { data: garageCustomerOwner } = useQuery(
    "getGarageCustomerOwner",
    getGarageCustomerOwner
  );

  const { data: serviceHistory } = useQuery(
    "getServiceHistory",
    getServiceHistory
  );

  async function getServiceHistory() {
    const response = await axiosClient.get("/service_histories");
    return response.data;
  }

  async function getGarageCustomerOwner() {
    const response = await axiosClient.get("/garage-customer-owners");
    return response.data;
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h4 className="text-1xl">Засвар үйлчилгээний бүртгэл</h4>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500">Хайх</Button>
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
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {garageCustomerOwner?.map((garageCustomerOwner, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>{garageCustomerOwner.firstName}</Table.Cell>
                        <Table.Cell>{garageCustomerOwner.lastName}</Table.Cell>
                        <Table.Cell>
                          {garageCustomerOwner.phoneNumber}
                        </Table.Cell>
                        <Table.Cell>{garageCustomerOwner.email}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>

            {/* service details, zaswarin tolwor */}

            <div className="p-4">
              <Card>
                <h1 className="text-1xl">Үйлчилгээний дэлгэрэнгүй</h1>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                    <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээ хийсэн механикч</Table.HeadCell>
                    <Table.HeadCell>Хямдрал</Table.HeadCell>
                    <Table.HeadCell>Нийт</Table.HeadCell>
                    <Table.HeadCell>
                      Дараагийн үйлчилгээний хуваарь
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {serviceHistory?.map((serviceHistory, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          {serviceHistory.serviceType.name}
                        </Table.Cell>
                        <Table.Cell>{serviceHistory.quantity}</Table.Cell>
                        <Table.Cell>
                          {serviceHistory.serviceType.price}
                        </Table.Cell>
                        <Table.Cell>
                          {serviceHistory.AffliateEmployee.name}
                        </Table.Cell>
                        <Table.Cell>{serviceHistory.discount}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-4">
            <Card className="max-w-sm">
              <h1 className="text-1xl">Засварын хуудас</h1>
              <ListGroup>
                <ListGroup.Item>Ажлын хөлс: Нийлбэр</ListGroup.Item>
                <ListGroup.Item>Материал: Нийлбэр</ListGroup.Item>
                <ListGroup.Item>Хямдрал урамшуулал: Дүн</ListGroup.Item>
                <ListGroup.Item>Нийт: Дүн</ListGroup.Item>
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
    </Layout>
  );
};

export default ZaswarService;