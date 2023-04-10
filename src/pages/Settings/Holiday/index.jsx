import { TextInput, Button, Table} from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const Holiday = () => {
 
  const { register, handleSubmit} = useForm();
  const { mutateAsync } = useMutation("holiday", holiday);

  const { data: holidayList} = useQuery("getHoliday", getHoliday);

  async function getHoliday(){
    const response = await axiosClient.get("/holidays");
    return response.data;
  }


  async function holiday(values) {
    const response = await axiosClient.post("/holidays", values);
    return response.data;
  }
  async function onSubmit(values){
    await mutateAsync(values);
  }
    return(
        <Layout>
             <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
            </div>
           </div>
           
           <Table> 
            <Table.Head className="uppercase"> 
              <Table.HeadCell>Эхлэх он сар</Table.HeadCell>
              <Table.HeadCell>Дуусах он сар</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Хадгалах</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row>
              
                <Table.Cell>
                  <TextInput type="date" {...register("openDate")}/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="date" {...register("closeDate")}/>
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
              {
                holidayList?.map((holiday, index) => (
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
}
export default Holiday;