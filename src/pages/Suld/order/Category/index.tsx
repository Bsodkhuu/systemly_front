import React from "react";
import Layout from "../../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ProductCategory } from "../../../API";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../../../config/axios";

const Category = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ProductCategory>();
    const { mutateAsync } = useMutation("create", create);

    async function create(values: ProductCategory) {
        const response = await axiosClient.post("/product_categories", values);
        return response.data;
    }
    async function onSubmit(values: ProductCategory) {
        await mutateAsync(values);
        navigate("/productCategory");
    }
    return (
        <Layout> 
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Бүтээгдэхүүний ангилал</div>
                    
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                           
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="en" value="Product category"/>
                                </div>
                                <TextInput id="en" placeholder="Product category" {...register("en")}/>
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

export default Category;