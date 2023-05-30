import React from "react";
import Layout from "../../../../../components/layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { VehicleCategory } from "../../../../API";
import { axiosClient } from "../../../../../config/axios";
import { Button, Label, TextInput } from "flowbite-react";
const VehicleSub = () => {
    const navigate = useNavigate();

    const {register, handleSubmit } = useForm<VehicleCategory>();
    const { mutateAsync } = useMutation("create", create);

    async function create(values: VehicleCategory) {
        const response = await axiosClient.post("/vehicle_categories", values);
        return response.data;
    }
    async function onSubmit(values: VehicleCategory) {
        await mutateAsync(values);
        navigate("/vehiceCategory");
    }

    return (
        <Layout> 
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Машины  дэд ангилал</div>
                       
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="en" value="Машины кателоги /English/"/>
                                </div>
                                <TextInput id="en" placeholder="English нэрээр бичнэ үү" {...register("en")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="mn" value="Машины кателоги /Монгол/"/>
                                </div>
                                <TextInput id="mn" placeholder="Монгол нэрээр бичнэ үү " {...register("mn")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Тийм,Үгүй" {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга " {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput id="deleteDate"  type="date" placeholder="Засвар хийсэн он сар" {...register("deleteDate")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                          <Button className="bg-gray-400">Буцах</Button>
                          <Button className="bg-orange-400" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                       </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default VehicleSub;