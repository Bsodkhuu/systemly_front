import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select } from "flowbite-react";
import React from "react";
import { axiosClient } from "../../../config/axios";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
export interface Work{
  id: string;
  createdAt: string;
  updateAt: string;
  name: string;
  open: string;
  close: string;
  description: string;
  serviceAppointmentId?: string;
}

interface FormValues{
  name: string;
  open: string;
  close: string;
  description: string;
}
const Clock = () => {
  
  const WEEKS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday"];

  const { register, handleSubmit} = useForm<FormValues>();
  const { mutateAsync } = useMutation("work", work);
  const { data: works} = useQuery("getWorks", getWorks);

  async function getWorks() {
    const response = await axiosClient.get("/works");
    return response.data as Work[];
  }

  async function work(values: FormValues) {
    const response = await axiosClient.post("/works", values);
    return response.data;
  }

  async function onSubmit(values: FormValues) {
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
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайлт" />
              <Button className="bg-blue-500">Хайх</Button>
            </div>
          </div>
          <div className="p-4">
            <Table onClick={handleSubmit(onSubmit)}>
              <Table.Head className="uppercase">
                <Table.HeadCell>7 хоног</Table.HeadCell>
                <Table.HeadCell>Нээх</Table.HeadCell>
                <Table.HeadCell>Хаах</Table.HeadCell>
                <Table.HeadCell>Ажиллах эсэх</Table.HeadCell>
                <Table.HeadCell>Үйлдэл</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>
                    <Select>
                      {WEEKS.map((i) => (
                        <option value={i}>{i}</option>
                      ))}
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="time" {...register("open")}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="time" {...register("close")}/>
                  </Table.Cell>
                  <Table.Cell>
                  <TextInput type="text" {...register("description")}/>
                </Table.Cell>
                  <Table.Cell>
                    <Button onClick={handleSubmit(onSubmit)} className="bg-blue-500">Хадгалах</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Body className="divide-y">
                {works?.map((works, index) => (
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
