import React from "react";
import Layout from "../../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { Branch, Order, Prodmetric, Product } from "../../../API";
import { axiosClient } from "../../../../config/axios";
import { Select } from "antd";


const OrderCreate = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<Order>();
    const { mutateAsync } = useMutation("create", create);

    async function create(values: Order) {
        const response = await axiosClient.post("/orders", {
            ...values,
            prodAllTotal: parseInt(values.prodAllTotal.toString()),
            manufacturerPrice: parseFloat(values.manufacturerPrice.toString()),
            deliveryPrice: parseFloat(values.deliveryPrice.toString()), 
            memberPrice: parseFloat(values.memberPrice.toString()),
            tax: parseFloat(values.tax.toString()), 
            otherPrice: parseFloat(values.otherPrice.toString()),
            totalPrice: parseFloat(values.totalPrice.toString()),
        });
        return response.data;
    }

    async function onSubmit(values: Order) {
        await mutateAsync(values);
        navigate("/orders");
    }

    const { data: branchData } = useQuery("getBranch", getBranch);
    const { data: productData } = useQuery("getProduct", getProduct);
    const { data: prodmetricData } = useQuery("getProdmetricData", getProdmetricData);


    async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }

    async function getProduct() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }

    async function getProdmetricData() {
        const response = await axiosClient.get("/prodmetric");
        return response.data as Prodmetric[];
    }
    return(
        <Layout> 
             <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Захиалга</div>
                       
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchId" value="Гишүүд"/>
                                </div>
                                <Select id="branchId" placeholder="Гишүүд" {...register("branchId")}>
                                    {branchData?.map((i) => (
                                        <option key={`branch_${i.id}`} value={i.id}>
                                            {i.branchName}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productId" value="Part Number"/>
                                </div>
                                <Select id="productId" placeholder="Part Number" {...register("productId")}>
                                {productData?.map((i) => (
                                    <option key={`product_${i.id}`} value={i.id}>
                                        {i.productCode}
                                    </option>
                                ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productId" value="Нийлүүлэгч"/>
                                </div>
                                <Select id="productId" placeholder="Нийлүүлэгч" {...register("productId")}>
                                {productData?.map((i) => (
                                    <option key={`product_${i.id}`} value={i.id}>
                                        {i.manufacturerId}
                                    </option>
                                ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Бүтээгдэхүүний хэмжих нэгж"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Бүтээгдэхүүний хэмжих нэгж" {...register("prodmetricId")}>
                                    {prodmetricData?.map((i) => (
                                        <option key={`prodmetric_${i.id}`} value={i.id}>
                                            {i.typeId}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="packageId" value="Захиалгийн дугаар"/>
                                </div>
                                <TextInput id="packageId" placeholder="Захиалгийн дугаар" {...register("packageId")}/>
                            </div>
                         
                    </div>
                        <div className="flex gap-4">
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodAllTotal" value="Бүтээгдэхүүний нийт тоо"/>
                                </div>
                                <TextInput id="prodAllTotal" placeholder="Бүтээгдэхүүний нийт тоо" {...register("prodAllTotal")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="manufacturerPrice" value="Үйлдвэрлэгчийн үнэ"/>
                                </div>
                                <TextInput id="manufacturerPrice" placeholder="Үйлдвэрлэгчийн үнэ" {...register("manufacturerPrice")} />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deliveryPrice" value="Тээврийн хөлс"/>
                                </div>
                                <TextInput id="deliveryPrice" placeholder="Тээврийн хөлс" {...register("deliveryPrice")} />
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="memberPrice" value="Гишүүдэд санал болгох үнэ"/>
                                </div>
                                <TextInput id="memberPrice" placeholder="Гишүүдэд санал болгох үнэ" {...register("memberPrice")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="tax" value="Татварын үнэ"/>
                                </div>
                                <TextInput id="tax" placeholder="Татварын үнэ" {...register("tax")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="otherPrice" value="Бүтээгдэхүүнээс гарсан бусад үнэ"/>
                                </div>
                                <TextInput id="otherPrice" placeholder="Бүтээгдэхүүнээс гарсан бусад үнэ" {...register("otherPrice")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="totalPrice" value="Татвар, тээврийн нийлбэр дүн"/>
                                </div>
                                <TextInput id="totalPrice" placeholder="Татвар, тээврийн нийлбэр дүн" {...register("totalPrice")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="confirmFlag" value="Зөв оруулсан эсэх"/>
                                </div>
                                <TextInput id="confirmFlag" placeholder="Тийм, Үгүй" {...register("confirmFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="historyId" value="History Id"/>
                                </div>
                                <TextInput id="historyId" placeholder="Захиалгийн түүх" {...register("historyId")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="status" value="Статус"/>
                                </div>
                                <TextInput id="status" placeholder="Агуулахын үлдэгдэл шалгаж байна" {...register("status")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="receiveDate" value="Хүлээн авсан"/>
                                </div>
                                <TextInput id="receiveDate"  type="date" placeholder="Хүлээн авсан" {...register("receiveDate")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="receiverDate" value="Хүлээж авсан"/>
                                </div>
                                <TextInput id="receiverDate"  type="date" placeholder="Хүлээн авсан" {...register("receiverDate")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Өгөгдөл оруулсан утга"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Өгөгдөл оруулсан утга" />
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" />
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput type="date" id="deleteDate" placeholder="Засвар хийсэн он сар"/>
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

export default OrderCreate;