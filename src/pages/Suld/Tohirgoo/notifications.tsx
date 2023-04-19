import React from "react";
import Layout from "../../../components/layout";
import { Label, Textarea, Button, TextInput, Table } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

export interface Notifications{
  id: string;
  createdAt: string;
  updatedAt: string;
  medeelel: string;
  postId: string
}

const Notifications = () => {

    const { register, handleSubmit } = useForm<Notifications>();
    const { mutateAsync } = useMutation("notifications", notifications);

    const { data: notification } = useQuery("getNotifications", getNotifications);

    async function getNotifications() {
        const response = await axiosClient.get("/notifications");
        return response.data as Notifications[];
    }

    async function notifications(values: Notifications) {
        const response = await axiosClient.post("/notifications", values);
        return response.data;
    }

    async function onSubmit(values: Notifications) {
        await mutateAsync(values);
    }

    return (
        <Layout>
            <div className="p-2 bg-gray-200 h-screen w-full">
                <div className="bg-white p-2 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Мэдэгдэл</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="postId" value="Мэдэгдэл дугаар"/>
                    <TextInput type="number" {...register("postId")}/>
                    <Label htmlFor="medeelel" value="Мэдэгдэл бичих"/>
                    <Textarea {...register("medeelel")}/> &nbsp;
                    <Button onClick={handleSubmit(onSubmit)} className="bg-blue-500">Илгээх</Button>
                </form>
                &nbsp;
                <Table>
                  <Table.Head className="uppercase">
                    
                    <Table.HeadCell>Мэдэгдэл дугаар</Table.HeadCell>
                    <Table.HeadCell>Мэдэгдэл бичих</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    {notification?.map((notification: Notifications, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>{notification.postId}</Table.Cell>
                        <Table.Cell>{notification.medeelel}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
            </div>
        </Layout>
    );
}

export default Notifications;