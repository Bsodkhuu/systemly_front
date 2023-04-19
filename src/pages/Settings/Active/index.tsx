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
    const response = await axiosClient.post("/service-types", values);
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
              <Button className="bg-blue-500">
                Хайх
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Үйлчилгээний нэр</Label>
            <TextInput type="text" {...register("name")}/>&nbsp;
            <Label>Үнэ</Label>
            <TextInput type="text" {...register("price")}/>&nbsp;
            <Label>Валют</Label>
            <TextInput type="text" {...register("currency")}/>&nbsp;
            <Button onClick={handleSubmit(onSubmit)} className="bg-blue-500">
              Хадгалах
            </Button>
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
