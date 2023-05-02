import React from "react";
import Layout from "../../../components/layout";
import { Button, Checkbox, Label, Select, Table, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useNavigate } from "react-router-dom";
 export interface User extends Role{
    id: string;
    email: string;
    password: string;
    companyName: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    [roleName: string]: any;
}

export interface Applications{
    appName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    appUrl: string;
    category: number;
    displayOrder: string;
}

export interface Favorite extends Applications{
    id: string;
    createdAt: string;
    updatedAt: string;
    applicationsId?: string;
    employeeId?: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    [appName: string]: any
}

export interface EmployeeRole extends Applications{
    roleId?: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    employeeId: string;
    userId?: string;
    [appName: string]: any;
}

export interface Role{
    roleName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    createdAt: string;
    updatedAt: string;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    [lastName: string] : any;
    userId?: string
}

export interface Permission extends RoleApp{
    id: string;
    createdAt: string;
    updatedAt: string;
    permissionCode: string;
    permissionNote: string;
    permissionName: string;
    activeFlag: string;
    deleteFlag: string;
    insertDate: string;
    insertUser: number;
    updateUser: number;
    deleteDate: string;
    deleteUser: number;
    [type: string]: any;
}

export interface RoleApp extends Role, Applications{
    id: string;
    createdAt: string;
    updatedAt: string;
    roleId?: string;
    [roleName: string] : any;
    applicationsId?: string;
    permissionId?: string;
    type: string;
}
const CreateRole = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<User>();
    const { mutateAsync } = useMutation("user", user);
    
    const { data: roleList } = useQuery("getRole", getRole);

    async function getRole() {
        const response = await axiosClient.get("/roles");
        return response.data as Role[];
    }
    async function user(values: User) {
        const response = await axiosClient.post("/register", values);
        return response.data;
    }
    async function onSubmit(values: User) {
        await mutateAsync(values);
        navigate("/role");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Шинэ эрх үүсгэх</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label htmlFor="firstName" value="Овог" />
                            </div>
                            <TextInput type="text" id="firstName" {...register("firstName")} />
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label htmlFor="lastName" value="Нэр"/>
                            </div>
                            <TextInput type="text" id="lastName" {...register("lastName")} />
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="companyName"
                                value="Компаний нэр"
                            />
                            </div>
                            <TextInput type="text" id="companyName" {...register("companyName")}/>
                        </div>
                        </div>
                        <div className="flex gap-4">
                        
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label htmlFor="" value="Эрхийн төрөл" />
                            </div>
                            <Select>
                            {roleList?.map((i) => (
                             <option value={i.id}>
                             {i.roleName}
                        </option>
                   ))}
                            </Select>
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label htmlFor="email" value="Имэйл" />
                            </div>
                            <TextInput type="text" id="email" {...register("email")}/>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label htmlFor="password" value="Нууц үг" />
                            </div>
                            <TextInput type="text" id="password" {...register("password")}/>
                        </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <h4 className="text-1xl">Module Permission</h4>
                        </div>
                        <Table>
                            <Table.Head className="uppercase">
                                <Table.HeadCell></Table.HeadCell>
                                <Table.HeadCell>Read</Table.HeadCell>
                                <Table.HeadCell>Write</Table.HeadCell>
                                <Table.HeadCell>Delete</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {roleList?.map((roleList: Role, index: number) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{roleList.roleName}</Table.Cell>
                                    </Table.Row>
                                )) }
                            </Table.Body>
                        </Table>
                        <div className="flex gap-4">
                        <a href="/role"><Button className="bg-gray-400">Буцах</Button></a>
                        <Button onClick={handleSubmit(onSubmit)} className="bg-orange-400">Хадгалах</Button>
                        </div>
                        </form>
                    </div>
                </div>
 </Layout>
    );
}
export default CreateRole;