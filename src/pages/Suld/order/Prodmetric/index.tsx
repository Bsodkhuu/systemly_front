import React from "react";
import Layout from "../../../../components/layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Prodmetric } from "../../../API";
import { axiosClient } from "../../../../config/axios";
import { Button, Label, TextInput } from "flowbite-react";

const ProdmetricAdd = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<Prodmetric>();
    const { mutateAsync } = useMutation("create", create);

    async function create(values: Prodmetric) {
        const response = await axiosClient.post("/prodmetric", values);
        return response.data;
    }

    async function onSubmit(values: Prodmetric) {
        await mutateAsync(values);
        navigate("/product");
    }
    return(
        <Layout>
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-1xl">Бүтээгдэхүүний хэмжих нэгж</div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="typeId" value="Бүтээгдэхүүний хэмжих нэгж"/>
                                </div>
                                <TextInput id="typeId" placeholder="Жишээ нь: height[mm]" required  {...register("typeId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Өгөгдөл оруулсан утга"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Өгөгдөл оруулсан утга" required {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" required {...register("deleteFlag")}/>
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

export default ProdmetricAdd;