import React from "react";
import Layout from "../../../../components/layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VehicleCategory, VehicleSubCategory } from "../../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { Button, Label, TextInput } from "flowbite-react";
import { Select } from "antd";


const VehicleCategoryAdd = () => {
    const navigate = useNavigate();

    const {register, handleSubmit } = useForm<VehicleSubCategory>();
    const { mutateAsync } = useMutation("create", create);

    const { data: category } = useQuery("getCategory", getCategory);

    async function getCategory() {
        const response = await axiosClient.get("/vehicle_categories");
        return response.data as VehicleCategory[];
    }
    async function create(values: VehicleSubCategory) {
        const response = await axiosClient.post("/vehicle_subcategories", values);
        return response.data;
    }
    async function onSubmit(values: VehicleSubCategory) {
        await mutateAsync(values);
        navigate("/zahialga");
    }

    return (
        <Layout> 
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Машины  дэд ангилал</div>
                        <div className="md:flex gap-4">
                            <a href="/vehicleSub"><Button className="bg-orange-400">Машины ангилал</Button></a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="vehicleCategoryId" value="Машины ангилал"/>
                                </div>
                                <Select id="vehicleCategoryId" placeholder="Машины ангилал" {...register("vehicleCategoryId")}>
                                    {category?.map((i) => (
                                        <option key={`vehicleCategory_${i.id}`} value={i.id}>
                                            {i.mn}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="en" value="Машины дэд кателоги /English/"/>
                                </div>
                                <TextInput id="en" placeholder="English нэрээр бичнэ үү" {...register("en")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="mn" value="Машины дэд кателоги /Монгол/"/>
                                </div>
                                <TextInput id="mn" placeholder="Монгол нэрээр бичнэ үү " {...register("mn")}/>
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

export default VehicleCategoryAdd;