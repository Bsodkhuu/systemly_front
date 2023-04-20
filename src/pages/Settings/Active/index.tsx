import { TextInput, Button, Table, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { ServiceType } from "../Price";
import { useForm } from "react-hook-form";

const Active = () => {
  const { data: priceList } = useQuery("getPrice", getPrice);

  async function getPrice() {
    const response = await axiosClient.get("/service-types");
    return response.data as ServiceType[];
  }
  const { register, handleSubmit } = useForm<ServiceType>();
  const { mutateAsync } = useMutation("active", active);

  async function active(values: ServiceType) {
    const response = await axiosClient.post("/service-types", {
      ...values, 
      price: parseInt(values.price.toString()),
      averagePrice: parseInt(values.averagePrice.toString()),
      suudalPrice: parseInt(values.suudalPrice.toString()),
      achaaPrice: parseInt(values.achaaPrice.toString()),
    });
    return response.data;
  }
  async function onSubmit(values: ServiceType) {
    await mutateAsync(values);
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээний нэр (Идэвхитэй)</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-orange-500">
                Хайх
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="mainCategory" value="Main Group"/>
              <TextInput type="text" {...register("mainCategory")}/>
                &nbsp;
              <Label htmlFor="subCategory" value="Sub Group"/>
              <TextInput type="text" {...register("subCategory")}/>&nbsp;
              <Label htmlFor="name" value="Үйлчилгээ нэр"/>
              <TextInput type="text" {...register("name")}/>&nbsp;
              <Label htmlFor="price" value="Том"/>
             <TextInput type="number" {...register("price")}/>&nbsp;
             <Label htmlFor="averagePrice" value="Дунд"/>
             <TextInput type="number" {...register("averagePrice")}/>&nbsp;
             <Label htmlFor="suudalPrice" value="Суудлын"/>
             <TextInput type="number" {...register("suudalPrice")}/>&nbsp;
             <Label htmlFor="achaaPrice" value="Ачааны"/>
             <TextInput type="number" {...register("achaaPrice")}/>&nbsp;
              <Label htmlFor="currency" value="Валют"/>
             <TextInput type="text"   {...register("currency")}/>&nbsp;
             <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
            </form>
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Засвар үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Үнэ</Table.HeadCell>
              <Table.HeadCell>Валют</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {priceList?.map((price: ServiceType, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{price.name}</Table.Cell>
                  <Table.Cell>{price.price}</Table.Cell>
                  <Table.Cell>{price.currency}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default Active;
