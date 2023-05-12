import {
  TextInput,
  Button,
  Select,
  ListGroup,
  Table,
  Card,
  Checkbox,
} from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Sale = () => {
  const [searchParams] = useSearchParams();
  
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h4 className="text-1xl">Засвар борлуулалтын бүртгэлийн түүх</h4>
              <div className="flex gap-4">
              <TextInput type="date" />
                <Button className="bg-orange-500">
                  Хайх
                </Button>
                <a href="/vilchilgee"><Button className="bg-orange-500">
                  Үйлчилгээ бүртгэх
                </Button></a>
              </div>
            </div>
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Үйлчилгээний жагсаалт</h4>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                    <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y bg-scroll">
                        <Table.Row>
                          <Table.Cell>
                            <Checkbox />
                          </Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>
                            
                          </Table.Cell>
                        </Table.Row>
                   
                  </Table.Body>
                </Table>
              </Card>
            </div>
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Засварын хуудасны дэлгэрэнгүй</h4>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээ хийсэн механикч</Table.HeadCell>
                    <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>

                    <Table.HeadCell>Хямдрал</Table.HeadCell>
                    <Table.HeadCell>Нийт</Table.HeadCell>
                    <Table.HeadCell>
                      Дараагийн үйлчилгээний хуваарь
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                   
                        <Table.Row>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>
                            
                          </Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>
                            
                          </Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>
                          {/* {serviceHistory.netPrice * serviceHistory.quantity * (100 - serviceHistory.discount / 100)} */}
                          </Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                    
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
                
                  <ListGroup.Item>
                    Ажлын хөлс: 
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                      Материал: 
                      <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        Хямдрал: 
                      </ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                      {/* Нийт: {serviceHistory.netPrice * serviceHistory.quantity * (100 -serviceHistory.discount / 100)} */}
                      {/* {serviceHistory.quantity *
                              serviceHistory.serive.price *
                              (100 - serviceHistory.discount / 100)} */}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Төлбөр төлөх хэлбэр
                      <Select>
                        <option value="bill">Бэлэн</option>
                        <option value="cart">Карт</option>
                        <option value="transfer">Шилжүүлэг</option>
                      </Select>
                    </ListGroup.Item>
                  </ListGroup.Item>
              
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sale;
