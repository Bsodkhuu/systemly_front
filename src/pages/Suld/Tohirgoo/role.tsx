import React from "react";
import Layout from "../../../components/layout";
import { Button, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Role } from "./createRole";


const RoleList = () => {
    const { data: roleList } = useQuery("getRole", getRole);

    async function getRole() {
        const response = await axiosClient.get("/roles");
        return response.data as Role[];
    }
    return (
        <Layout>
            <div className="p-2 bg-gray-200 h-screen w-full">
                <div className="bg-white p-2 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Систем хэрэглэгч</h4>
                        <div className="flex gap-4">
                           
                            <a href="/createRole">
                            <Button type="submit" className="bg-orange-500">Шинэ эрх үүсгэх</Button>
                            </a>
                        </div>
                    </div>
                    
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell>Нэр</Table.HeadCell>
                                <Table.HeadCell></Table.HeadCell>
                                <Table.HeadCell>Үүсгэсэн огноо</Table.HeadCell>
                                <Table.HeadCell>Эрх</Table.HeadCell>
                                <Table.HeadCell>Үйлдэл</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {roleList?.map((roleList: Role, index: number) => (
                                    <Table.Row key={index}>
                                    <Table.Cell>{roleList.user.lastName}</Table.Cell>
                                    <Table.Cell>{roleList.roleName}</Table.Cell>
                                    <Table.Cell>{roleList.createdAt}</Table.Cell>
                                    <Table.Cell>{roleList.user.companyName}</Table.Cell>
                                    <Table.Cell className="space-2xl">
                                        <FontAwesomeIcon icon={faPenToSquare}/> &nbsp;
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Table.Cell>
                                </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            
        </Layout>
    );
}
export default RoleList;