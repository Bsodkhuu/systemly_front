import {
  Button,
  Card,
  Label,
  Alert,
  TextInput,
  Textarea,
  ListGroup,Table,
} from "flowbite-react";

import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useQuery } from "react-query";
import React from "react";

interface Address {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  order_note: string;
}

const Create = () => {

  const { register, handleSubmit } = useForm<Address>();
  const { mutateAsync } = useMutation("address", address);
  const { data, isLoading } = useQuery("products", getProducts);
  const { data: address1 } = useQuery("getAddress", getAddress);

  async function getAddress() {
    const response = await axiosClient.get("/addresses");
    return response.data as Address[];
  }

  async function getProducts() {
    const response = await axiosClient.get("/products");
    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }
  async function address(values: Address) {
    const response = await axiosClient.post("/addresses", values);
    return response.data;
  }

  async function onSubmit(values: Address) {
    await mutateAsync(values);
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Хүргэлтийн хаяг</h5>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500">Хайх</Button>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="/backorder">
                <Alert
                  color="failure"
                  rounded={false}
                  withBorderAccent={true}
                  additionalContent={
                    <React.Fragment>
                      <div className="mt-2 mb-4 text-sm text-red dark:text-red">
                        Бэлэн бус захиалгад 5 ширхэг бараа орсон байна{" "}
                      </div>
                    </React.Fragment>
                  }
                >
                  <h3 className="text-lg font-medium text-red dark:text-red">
                    Бэлэн бус захиалга
                  </h3>
                </Alert>
                /Бэлэн захиалга мэссэж ногоон өнгөөр харагдана /
                <Button className="bg-blue-500">Бэлэн бус захиалга</Button>
              </a>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="grid-cols-2">
              <div>
                <Card>
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="firstname" value="Овог" />
                        </div>
                        <TextInput id="firstname" {...register("firstname")} />
                      </div>
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="lastname" value="Нэр" />
                        </div>
                        <TextInput id="lastname" {...register("lastname")} />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="email" value="Имэйл" />
                        </div>
                        <TextInput id="email" {...register("email")} />
                      </div>
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="phone" value="Утасны дугаар" />
                        </div>
                        <TextInput id="phone" {...register("phone")} />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="city" value="Хот" />
                        </div>
                        <TextInput id="city" {...register("city")} />
                      </div>
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="state" value="Бүс" />
                        </div>
                        <TextInput id="state" {...register("state")} />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label htmlFor="country" value="Улс" />
                        </div>
                        <TextInput id="country" {...register("country")} />
                      </div>
                      <div className="w-1/2">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="order_note"
                            value="Захиалгийн тайлбар"
                          />
                        </div>
                        <Textarea id="order_note" {...register("order_note")} />
                      </div>
                    </div>
                    <Button
                    onClick={handleSubmit(onSubmit)}
                      type="submit"
                      className="btn btn-success">
                      Хадгалах
                    </Button>
                  </form>
                  <Table>
                  <Table.Head className="uppercase">
                  <Table.HeadCell>Овог</Table.HeadCell>
                  <Table.HeadCell>Нэр</Table.HeadCell>
                  <Table.HeadCell>Имэйл</Table.HeadCell>
                  <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                  <Table.HeadCell>Улс</Table.HeadCell>
                  <Table.HeadCell>Хот</Table.HeadCell>
                  <Table.HeadCell>Захиалгийн тэмдэглэл</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {address1?.map((address: Address, index: number) => (
                    <Table.Row key={index}>
                      <Table.Cell>{address.firstname}</Table.Cell>
                      <Table.Cell>{address.lastname}</Table.Cell>
                      <Table.Cell>{address.email}</Table.Cell>
                      <Table.Cell>{address.phone}</Table.Cell>
                      <Table.Cell>{address.country}</Table.Cell>
                      <Table.Cell>{address.city}</Table.Cell>
                      <Table.Cell>{address.order_note}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-2">
            <Card>
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
                &nbsp;
                <a href="/checkbox">
                  <Button className="bg-blue-500">
                    Захиалга баталгаажуулах
                  </Button>
                </a>
                &nbsp;
                <a href="/zahialga">
                  <Button className="bg-blue-500">Сэлбэг хайх</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
