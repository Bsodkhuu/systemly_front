import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select } from "flowbite-react";
import React from "react";
import { axiosClient } from "../../../config/axios";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { Work } from "../../API";

const Clock = () => {
  
  const WEEKS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday"];

  const { register, handleSubmit } = useForm<Work>();
  const { mutateAsync } = useMutation("work", work);

  const { data: works} = useQuery("getWorks", getWorks);

  async function getWorks() {
    const response = await axiosClient.get("/works");
    return response.data as Work[];
  }

  async function work(values: Work) {
    const response = await axiosClient.post("/works", values);
    return response.data;
  }

  async function onSubmit(values: Work) {
    await mutateAsync(values);
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Ажлын цагийн хуваарь</h4>
            <a href="/holiday">
              <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            </a>
           
          </div>
          <div className="p-4">

           <form onSubmit={handleSubmit(onSubmit)}>
           <Select>
              {WEEKS.map((i) => (
                <option value={i} {...register("name")}>{i}</option>))}
           </Select>&nbsp;
           <TextInput type="time" {...register("open")}/>&nbsp;
           <TextInput type="time" {...register("close")}/>&nbsp;
           <TextInput type="text" {...register("description")}/>&nbsp;
           <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
           </form>
           &nbsp;&nbsp;
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>7 хоног</Table.HeadCell>
                <Table.HeadCell>Нээх</Table.HeadCell>
                <Table.HeadCell>Хаах</Table.HeadCell>
                <Table.HeadCell>Ажиллах эсэх</Table.HeadCell>
                
              </Table.Head>
              
              <Table.Body className="divide-y">
                {works?.map((works: any, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{works.name}</Table.Cell>
                    <Table.Cell>{works.open}</Table.Cell>
                    <Table.Cell>{works.close}</Table.Cell>
                    <Table.Cell>{works.description}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Clock;
