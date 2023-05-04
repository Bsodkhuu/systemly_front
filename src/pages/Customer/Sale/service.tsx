import React from "react";
import Layout from "../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useNavigate } from "react-router-dom";

export interface ServiceHistory {
    id: string;
    createdAt: string;
    updatedAt: string;
    vinNumberId?: string;  //garagacustomervehicles 
    serviceDate: string;
    serviceAffiliateId?: string; //user
    ajilGuitsetgesenAjiltanId?: string; // affiliateemployee
    quantity: number;
    discount: number;
    netPrice: number;
    serviceName: string;
}

const Vilchilgee = () => {
    const navigate = useNavigate();
    const {register, handleSubmit } = useForm<ServiceHistory>();
    const { mutateAsync } = useMutation("serviceHistory", serviceHistory);

    async function serviceHistory(values: ServiceHistory) {
        const response = await axiosClient.post("/service_histories",{
            ...values, 
            quantity: parseInt(values.quantity.toString()), 
            discount: parseFloat(values.discount.toString()), 
            netPrice: parseInt(values.netPrice.toString()),
        });
        return response.data;
    }

    async function onSubmit(values: ServiceHistory) {
        await mutateAsync(values);
        navigate("/sale");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Үйлчилгээний дэлгэрэнгүй</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceName" value="Үйлчилгээний нэр"/>
                                </div>
                                <TextInput id="serviceName" {...register("serviceName")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="ajilGuitsetgesenAjiltanId" value="Үйлчилгээ хийсэн механикч"/>
                                </div>
                                <TextInput id="ajilGuitsetgesenAjiltanId" {...register("ajilGuitsetgesenAjiltanId")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Тоо ширхэг"/>
                                </div>
                                <TextInput id="quantity"  {...register("quantity")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="netPrice" value="Нэгжийн үнэ"/>
                                </div>
                                <TextInput id="netPrice" {...register("netPrice")} />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="discount" value="Хямдрал"/>
                                </div>
                                <TextInput id="discount"  {...register("discount")}/>
                            </div>
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceDate" value="Дараагийн үйлчилгээний хуваарь"/>
                                </div>
                                <TextInput type="date" id="serviceDate" {...register("serviceDate")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="vinNumberId" value="vinNumberId"/>
                                </div>
                                <TextInput id="vinNumberId"  {...register("vinNumberId")}/>
                            </div>

                        </div>
                        <div className="flex gap-4">
                        <Button className="bg-gray-400">Буцах</Button>
                        <Button onClick={handleSubmit(onSubmit)} className="bg-orange-400">Хадгалах</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
export default Vilchilgee;