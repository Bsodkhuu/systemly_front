import React from "react";
import Layout from "../../../components/layout";
import { TextInput,Button, Table } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Description } from "../../Order/Inquiry";

const FeedBack = () => {
    const { data: feedBack } = useQuery("getFeedBack", getFeedBack);

    async function getFeedBack() {
        const response = await axiosClient.get("/descriptions");
        return response.data;
    }
    return (
        <Layout>
            <div className="p-2 bg-gray-200 h-screen w-full">
                <div className="bg-white p-2 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Санал хүсэлт авах</h4>
                        <div className="flex gap-4">
                            <TextInput type="search" placeholder="Хайх"/>
                            <Button className="bg-blue-500">Хайх</Button>
                        </div>
                    </div>
                    <Table>
                        <Table.Head className="uppercase">
                            <Table.HeadCell>Санал хүсэлт авах</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {feedBack?.map((feedBack: Description, index: number) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{feedBack.body}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </Layout>
    );
}
export default FeedBack;