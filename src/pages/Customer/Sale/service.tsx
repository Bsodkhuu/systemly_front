import React from "react";
import Layout from "../../../components/layout";
import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useNavigate } from "react-router-dom";

export interface ServiceHistory {
    id: string;
    createdAt: string;
    updatedAt: string;
    vinNumberId?: string;
    serviceDate: string;
    serviceAffiliateId?: string;
    ajilGuitsetgesenAjiltanId?: string;
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
        const response = await axiosClient.post("/service_histories", values);
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
                    <form className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceName" value="Үйлчилгээний нэр"/>
                                </div>
                                <TextInput id="serviceName"  />
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="ajilGuitsetgesenAjiltan" value="Үйлчилгээ хийсэн механикч"/>
                                </div>
                                <TextInput id="ajilGuitsetgesenAjiltan"  />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Тоо ширхэг"/>
                                </div>
                                <TextInput id="quantity"  />
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="netPrice" value="Нэгжийн үнэ"/>
                                </div>
                                <TextInput id="netPrice"  />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="discount" value="Хямдрал"/>
                                </div>
                                <TextInput id="discount"  />
                            </div>
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceDate" value="Дараагийн үйлчилгээний хуваарь"/>
                                </div>
                                <TextInput type="date" id="serviceDate" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
export default Vilchilgee;