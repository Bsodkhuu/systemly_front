import React from "react"
import Layout from "../../components/layout"
import { useForm } from "react-hook-form"
import { PersonPhone } from "../API";
import { useMutation } from "react-query";
import { axiosClient } from "../../config/axios";
import { Label, TextInput } from "flowbite-react";
import { Button } from "antd";


const Phone = () => {
    const { register, handleSubmit } = useForm<PersonPhone>();
    const { mutateAsync } = useMutation("createPhone", createPhone);

    async function createPhone(values: PersonPhone) {
        const response = await axiosClient.post("/person-phones", {
           ...values,
           insertUser: parseInt(values.insertUser.toString()),
           updateUser: parseInt(values.updateUser.toString()),
           deleteUser: parseInt(values.deleteUser.toString()),
        });
        return response.data;
    }

    async function onSubmit(values: PersonPhone) {
        await mutateAsync(values);
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Утасны дугаар бүртгэх</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Утасны дугаар"/>
                                </div>
                                <TextInput id="phone" placeholder="Утасны дугаар" {...register("phone")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="activeFlag"
                                value="Идэвхтэй эсэх"/>
                            </div>
                            <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="deleteFlag"
                                value="Засвар хийсэн утга"/>
                            </div>
                            <TextInput
                            id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                        </div>
                        </div>

                        <div className="flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="insertUser"
                                value="Үүсгэсэн хэрэглэгч"
                            />
                            </div>
                            <TextInput id="insertUser" placeholder="Жишээ нь: 1" {...register("insertUser")}/>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="updateUser"
                                value="Өөрчлөлт хийсэн хэрэглэгч"/>
                            </div>
                            <TextInput
                            id="updateUser" placeholder="Жишээ нь: 1" {...register("updateUser")}/>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="deleteDate"
                                value="Засвар хийсэн он сар"
                            />
                            </div>
                            <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                            <Label
                                htmlFor="deleteUser"
                                value="Засвар хийсэн хэрэглэгч"
                            />
                            </div>
                            <TextInput id="deleteUser" placeholder="Жишээ нь: 1" {...register("deleteUser")}/>
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <Button className="bg-gray-400">Буцах</Button>
                        <Button className="bg-orange-400" onClick={handleSubmit(onSubmit)}>
                            Хадгалах
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default Phone;