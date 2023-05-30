import React from "react";
import Layout from "../../../../components/layout";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ProductCategory, ProductSubCategory } from "../../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";


const ProductCategoryAdd = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ProductSubCategory>();
    const { mutateAsync } = useMutation("create", create);

    const { data: category } = useQuery("getCategory", getCategory);

    async function getCategory() {
        const response = await axiosClient.get("/product_categories");
        return response.data as ProductCategory[];
    }
    async function create(values: ProductSubCategory) {
        const response = await axiosClient.post("/product_subcategories", values);
        return response.data;
    }
    async function onSubmit(values: ProductSubCategory) {
        await mutateAsync(values);
        navigate("/zahialga");
    }
    return (
        <Layout>
             <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Бүтээгдэхүүний дэд ангилал</div>
                        <div className="md:flex gap-4">
                            <a href="/category"><Button className="bg-orange-400">Бүтээгдэхүүний ангилал</Button></a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productCategoryId" value="Product category"/>
                                </div>
                                <Select id="productCategoryId" placeholder="Product category" {...register("productCategoryId")}>
                                    {category?.map((i) => (
                                        <option key={`productCategory_${i.id}`} value={i.id}>
                                            {i.en}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="en" value="Product sub category"/>
                                </div>
                                <TextInput id="en" placeholder="Product sub category" {...register("en")}/>
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

export default ProductCategoryAdd;