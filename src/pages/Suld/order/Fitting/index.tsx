import React from "react";
import Layout from "../../../../components/layout";
import { Label, TextInput, Button  } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProductFits } from "../../../API";
import { useMutation } from "react-query";
import { axiosClient } from "../../../../config/axios";

const Fitting = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ProductFits>();
    const { mutateAsync } = useMutation("create", create);

    async function create(values: ProductFits) {
        const response = await axiosClient.post("/product-fits", values);
        return response.data;
    }

    async function onSubmit(values: ProductFits) {
        await mutateAsync(values);
        navigate("/product");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-1xl">Машины аль хэсэгт тохирох вэ</div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="positionId" value="Машины аль хэсэгт тохирох"/>
                                </div>
                                <TextInput id="positionId" placeholder="Машины аль хэсэгт тохирох" {...register("positionId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Тайлбар"/>
                                </div>
                                <TextInput id="description" placeholder="Тайлбар" {...register("description")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Өгөгдөл оруулсан утга"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Өгөгдөл оруулсан утга" {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>

                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
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


export default Fitting;