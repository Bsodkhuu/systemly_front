import React from "react"
import Layout from "../../components/layout"
import { useForm } from "react-hook-form"
import { PersonPhone } from "../API";
import { useMutation } from "react-query";
import { axiosClient } from "../../config/axios";
import { Label, TextInput,Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Phone = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<PersonPhone>();
    const { mutateAsync } = useMutation("createPhone", createPhone);

    async function createPhone(values: PersonPhone) {
        const response = await axiosClient.post("/person-phones", values);
        return response.data;
    }

    async function onSubmit(values: PersonPhone) {
        await mutateAsync(values);
        navigate("/customer");
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
                        <Button className="bg-gray-400" onClick={close}>Буцах</Button>
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