import React from "react";
import Layout from "../../../../components/layout";
import { Button, Table, TextInput } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";


interface ZamiinMedee extends ZamiinMedeeStatusType{
    id: string;
    createdAt: string;
    updatedAt: string;
    location: string;
    date: string;
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
    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Замын мэдээ</h4>
                        <div className="flex gap-4">
                         <TextInput id="search" type="search" placeholder="Хайлт" />
                         <Button className="bg-blue-500">Хайх</Button>
                        </div>
                    </div>
                    <form>
                        <TextInput type="date"/>&nbsp;
                        <TextInput type="text"/>&nbsp;
                        <TextInput type="text"/>&nbsp;
                        <TextInput type="date"/>&nbsp;
                        <Button className="bg-500">Хадгалах</Button>
                    </form>
                    &nbsp;&nbsp;
                    <Table>
                        <Table.Head className="uppercase">
                            <Table.HeadCell>Он сар</Table.HeadCell>
                            <Table.HeadCell>Статус</Table.HeadCell>
                            <Table.HeadCell>Байршил</Table.HeadCell>
                            <Table.HeadCell>Insert date</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                           {zaminMedee?.map((zaminMedee: ZamiinMedee, index: number) => (
                            <Table.Row key={index}> 
                            <Table.Cell>{zaminMedee.date}</Table.Cell>
                            <Table.Cell>{zaminMedee.zamStatusType.statusTypeName}</Table.Cell>
                            <Table.Cell>{zaminMedee.location}</Table.Cell>
                            <Table.Cell>{zaminMedee.location}</Table.Cell>
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