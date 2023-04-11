import React from "react";
import { TextInput, Button, Table } from "flowbite-react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

interface FormValues{
  name: string;
  openDate: Date;
  closeDate: Date;
  description: string;

}
 interface Holiday{
  id: string;
  createdAt: string;
  updateAt: string;
  name: string;
  openDate: Date;
  closeDate: Date;
  description: string;
 }
const Holiday = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync } = useMutation("holiday", holiday);

  const { data: holidayList } = useQuery("getHoliday", getHoliday);

  async function getHoliday() {
    const response = await axiosClient.get("/holidays");
    return response.data as Holiday[];
  }

  async function holiday(values: FormValues) {
    const response = await axiosClient.post("/holidays", values);
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
            <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайлт" />
              <Button className="bg-blue-500">Хайх</Button>
            </div>
          </div>

          <Table>
            <Table.Head onClick={handleSubmit(onSubmit)} className="uppercase">
              <Table.HeadCell>Эхлэх он сар</Table.HeadCell>
              <Table.HeadCell>Дуусах он сар</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Хадгалах</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell>
                  <TextInput type="date" {...register("openDate")} />
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="date" {...register("closeDate")} />
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="text" {...register("description")} />
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={handleSubmit(onSubmit)}className="bg-blue-500">
                    Хадгалах
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body className="divide-y">
              {holidayList?.map((holiday: any, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{holiday.openDate}</Table.Cell>
                  <Table.Cell>{holiday.closeDate}</Table.Cell>
                  <Table.Cell>{holiday.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default Holiday;
