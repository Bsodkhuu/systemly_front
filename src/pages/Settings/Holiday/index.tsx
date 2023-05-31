import React from "react";
import { TextInput, Button, Table, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Holiday } from "../../API";

const Amralt = () => {
  
  const { register, handleSubmit } = useForm<Holiday>();
  const { mutateAsync } = useMutation("holiday", holiday);

  const { data: holidayList } = useQuery("getHoliday", getHoliday);

  async function getHoliday() {
    const response = await axiosClient.get("/holidays");
    return response.data as Holiday[];
  }

  async function holiday(values: Holiday) {
    const response = await axiosClient.post("/holidays", values);
    return response.data;
  }
  async function onSubmit(values: Holiday) {
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
              <Button className="bg-orange-500">Хайх</Button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
             <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                       <Label htmlFor="openDate" value="Эхлэх хугацаа"/>
                      </div>
                    <TextInput type="date" {...register("openDate")} />
                    </div>
                  <div className="w-1/2">
                    <div className="mb-2 block">
                       <Label htmlFor="closeDate" value="Дуусах хугацаа"/>
                    </div>
                      <TextInput type="date" {...register("closeDate")} />
                    </div>
                  <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="description" value="Тайлбар"/>
                      </div>
                        <TextInput type="text" {...register("description")} />
                      </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                            </div>
                        
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                     </div>
                  </div>
             <div className="flex justify-end" >
              <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
              </div>
            </form>
          
          <Table>
            <Table.Head  className="uppercase">
              <Table.HeadCell>Эхлэх хугацаа</Table.HeadCell>
              <Table.HeadCell>Дуусах хугацаа</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {holidayList?.map((holiday: Holiday, index: number) => (
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
export default Amralt;
