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
      <div className="p-4 bg-gray-200 md:h-screen w-full">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <div className="md:flex justify-between space-y-3">
            <h4 className="text-1xl">Ажлын цагийн хуваарь</h4>
            
            <div className="md:flex space-y-3 md:space-x-3 md:space-y-0" >
            <div className="flex gap-2">
              <TextInput id="search" type="search" placeholder="Хайлт" className="w-full" />
              <Button className="bg-orange-500 ">Хайх</Button>
              <a href="/holiday"><h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4></a>
            </div>
            </div>
          </div>
          <div className="md:p-4 ">

           <form onSubmit={handleSubmit(onSubmit)}>
           <Select>
              {WEEKS.map((i) => (
                <option value={i} {...register("name")}>{i}</option>))}
           </Select>&nbsp;
           <TextInput placeholder="" type="time" {...register("open")}/>&nbsp;
           <TextInput type="time" {...register("close")}/>&nbsp;
           <TextInput type="text" {...register("description")}/>&nbsp;
           <div className="flex justify-end" >
           <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
           </div>
           </form>
           &nbsp;&nbsp;
           <div className="hidden md:block" >
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>7 хоног</Table.HeadCell>
                <Table.HeadCell>Нээх</Table.HeadCell>
                <Table.HeadCell>Хаах</Table.HeadCell>
                <Table.HeadCell>Ажиллах эсэх</Table.HeadCell>
                
              </Table.Head>
              <Table.Body className="divide-y">
                {works?.map((works: Work, index) => (
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
       
      </div>
    </Layout>
  );
};
export default Clock;
