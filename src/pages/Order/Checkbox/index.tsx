import Layout from "../../../components/layout";
import {
  TextInput,
  Button,
  Card,
  Label,
  ListGroup,
  Alert,
  Table,
} from "flowbite-react";

import React from "react";

import { axiosClient } from "../../../config/axios";
import { useQuery } from "react-query";


const Checkbox = () => {
  const { data, isLoading } = useQuery("products", getProducts);
 
  async function getProducts() {
    const response = await axiosClient.get("/products");
    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }
  console.log(data);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Захиалга баталгаажуулах</h5>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
            </div>
              <div className="p-4">
                <Card>
                  <Alert
                    color="success"
                    rounded={false}
                    withBorderAccent={true}
                    additionalContent={
                      <React.Fragment>
                        <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                          Төлбөрийг шилжүүлэхдээ тухайн өдрийн голомт банкны
                          бэлэн бус зарахын ханшаар төлнө үү.
                        </div>
                      </React.Fragment>
                    }
                  >
                    <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
                      Төлбөр шилжүүлэх мэдээлэл.
                    </h3>
                  </Alert>
                  <Label>Банкны нэр:Голомт банк</Label>
                  <Label>Дансны дугаар:1415119905</Label>
                  <Label>Дансны нэр:Сүлд Юнайтед ХХК</Label>
                  <Label>
                    Гүйлгээний утга: 2023031644 утгаа backend automataar awah
                  </Label>
                  <a href="/payment">
                    <Button className="bg-orange-500">Захиалга батлах</Button>
                  </a>
                </Card>
              </div>
            </div>
            &nbsp;
            <div className="flex gap-4">
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>Партын дугаар</Table.HeadCell>
                  <Table.HeadCell>Тайлбар</Table.HeadCell>
                  <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                  <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                  <Table.HeadCell>Нийт үнэ</Table.HeadCell>
                  <Table.HeadCell>Захиалгын он сар</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data.map((i: any) => (
                    <Table.Row>
                      <Table.Cell>{i.part_number}</Table.Cell>
                      <Table.Cell>{i.description}</Table.Cell>
                      <Table.Cell>{i.quantity}</Table.Cell>
                      <Table.Cell>{i.netPrice}</Table.Cell>
                      <Table.Cell>{i.quantity * i.netPrice}</Table.Cell>
                      <Table.Cell>{i.order_date}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-4">
            <Card>
              <h3 className="text-1xl">Захиалгын сэлбэгүүдийг хянах</h3>
              <div className="p-2">
                <Card className="max-w-sm">
                  <h1 className="text-1xl">Сагс</h1>
                  <div className="w-50">
                    <ListGroup>
                      {data.map((i: any) => (
                        <ListGroup.Item>
                          Парт дугаар: {i.part_number}
                          <ListGroup.Item></ListGroup.Item>
                          Тайлбар: {i.description}
                          <ListGroup.Item></ListGroup.Item>
                          Нэгжийн үнэ: {i.netPrice}
                          <ListGroup.Item></ListGroup.Item>
                          Валют: {i.currency}
                          <ListGroup.Item></ListGroup.Item>
                          Fitting: {i.fittingPostion}
                          <ListGroup.Item></ListGroup.Item>
                          Тоо, ширхэг: {i.quantity}
                          <ListGroup.Item></ListGroup.Item>
                          Нийт үнэ: {i.subtotal}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      
    </Layout>
  );
};

export default Checkbox;
