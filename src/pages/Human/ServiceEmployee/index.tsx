import React from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";
import { ServiceEmployee, ServiceOrder } from "../../API";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Label, Select, TextInput, Button } from "flowbite-react";


const Service_Employee = () =>  {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ServiceEmployee>();
    const { mutateAsync } = useMutation("create", create);
    const { data: serviceOrderData } = useQuery("getServiceOrder", getServiceOrder);

    async function create(values: ServiceEmployee) {
        const response = await axiosClient.post("/service-employees", values);
        return response.data;
    }

    async function getServiceOrder() {
        const response = await axiosClient.get("/service-orders");
        return response.data as ServiceOrder[];
    }

    async function onSubmit(values: ServiceEmployee) {
        await mutateAsync(values);
        navigate("/human");
    }

    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Үйлчилгээний хийсэн механикч</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="employeeId" value="Үйлчилгээний хийсэн механикч нэр"/>
                                </div>
                                <TextInput type="text" placeholder="Үйлчилгээний хийсэн механикч нэр" required {...register("employeeId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceOrderId" value="Төлсөн дүн"/>
                                </div>
                                <Select id="serviceOrderId" placeholder="Төлсөн дүн" required {...register("serviceOrderId")}>
                                    {serviceOrderData?.map((i) => (
                                        <option key={`serviceOrder_${i.id}`} value={i.id}>
                                            {i.paidAmount}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Идэвхтэй эсэх" />
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга" />
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар" />
                                </div>
                                <TextInput type="date" id="deleteDate" placeholder="Засвар хийсэн он сар" {...register("deleteDate")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                        <Button className="bg-gray-500">Буцах</Button>
                        <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>
                        Хадгалах
                       </Button>
                  </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
} 

export default Service_Employee;