import React from "react";
import Layout from "../../../../components/layout";
import { Button, Table, TextInput } from "flowbite-react";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { useForm } from "react-hook-form";

interface ZamiinMedee extends ZamiinMedeeStatusType{
    id: string;
    createdAt: string;
    updatedAt: string;
    location: string;
    date: string;
    insertDate: string;
    zamStatusTypeId?: string;
    [statusTypeName: string]: any;
}

interface ZamiinMedeeStatusType{
    statusTypeId: string;
    statusTypeName: string;
}
const Zam = () => {

    const { data: zaminMedee } = useQuery("getZaminMedee", getZaminMedee);

    async function getZaminMedee() {
        const response = await axiosClient.get("/zamin_medees");
        return response.data as ZamiinMedee[];
    }

    const { register, handleSubmit } = useForm<ZamiinMedee>();
    const { mutateAsync } = useMutation("zam", zam);

    async function zam(values: ZamiinMedee) {
        const response = await axiosClient.post("/zam_medees", values);
        return response.data; 
    }

    async function onSubmit(values: ZamiinMedee) {
        await mutateAsync(values);
    }
    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Замын мэдээ</h4>
                        <div className="flex gap-4">
                         <TextInput id="search" type="search" placeholder="Хайлт" />
                         <Button className="bg-orange-500">Хайх</Button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput type="date" {...register("date")}/>&nbsp;
                        {/* <TextInput type="text" {...register("zamStatusType.statusTypeName")}/>&nbsp; */}
                        <TextInput type="text" {...register("location")}/>&nbsp;
                        <TextInput type="date" {...register("insertDate")}/>&nbsp;
                        <Button onSubmit={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
                    </form>
                    &nbsp;&nbsp;
                    <Table>
                        <Table.Head className="uppercase">
                            <Table.HeadCell>Он сар</Table.HeadCell>
                            {/* <Table.HeadCell>Статус</Table.HeadCell> */}
                            <Table.HeadCell>Байршил</Table.HeadCell>
                            <Table.HeadCell>Insert date</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                           {zaminMedee?.map((zaminMedee: ZamiinMedee, index: number) => (
                            <Table.Row key={index}> 
                            <Table.Cell>{zaminMedee.date}</Table.Cell>
                            {/* <Table.Cell>{zaminMedee.zamStatusType.statusTypeName}</Table.Cell> */}
                            <Table.Cell>{zaminMedee.location}</Table.Cell>
                            <Table.Cell>{zaminMedee.insertDate}</Table.Cell>
                            </Table.Row>
                           ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </Layout>
    );
}
export default Zam;