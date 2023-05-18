import React from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Branch, Prodmetric, Product, Service, ServiceEmployee, ServiceOrder, ServiceOrderProduct } from "../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Button, Label, Select, TextInput } from "flowbite-react";

 const Details = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ServiceOrderProduct>();
    const { mutateAsync } = useMutation("create", create);
    const { data: serviceOrderData } = useQuery("getServiceOrder", getServiceOrder);
    const { data: branchData } = useQuery("getBranch", getBranch);
    const { data: productData } = useQuery("getproduct", getProduct);
    const { data: prodmetricData } = useQuery("getProdmetric", getProdmetric);
    const { data: serviceData } = useQuery("getService", getService);
    const { data: serviceEmployeeData } = useQuery("getServiceEmployee", getServiceEmployee);

    async function getServiceOrder() {
        const response = await axiosClient.get("/service-orders");
        return response.data as ServiceOrder[];
    }

    async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }

    async function getProduct() {
        const response = await axiosClient.get("/products");
        return response.data as Product[];
    }

    async function getProdmetric() {
        const response = await axiosClient.get("/prodmetric");
        return response.data as Prodmetric[];
    }

    async function getService() {
        const response = await axiosClient.get("/services");
        return response.data as Service[];
    }

    async function getServiceEmployee() {
        const response = await axiosClient.get("/service-employees");
        return response.data as ServiceEmployee[];
    }

    async function create(values: ServiceOrderProduct) {
        const response = await axiosClient.post("/service-order-product", {
            ...values,
            productCnt: parseInt(values.productCnt.toString()),
        });
        return response.data;
    }
    async function onSubmit(values: ServiceOrderProduct) {
        await mutateAsync(values);
        navigate("/human");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen  w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Ашигласан бүтээгдэхүүний бүртгэл</h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceId" value="Үйлчилгээ"/>
                                </div>
                                <Select id="serviceId" placeholder="Үйлчилгээ" {...register("serviceId")}>
                                    {serviceData?.map((i) => (
                                        <option key={`service_${i.id}`} value={i.id}>
                                            {i.serviceName}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceId" value="Үнэ"/>
                                </div>
                                <Select id="serviceId" placeholder="Үнэ" {...register("serviceId")}>
                                    {serviceData?.map((i) => (
                                        <option key={`service_${i.id}`} value={i.id}>
                                            {i.price}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceOrderId" value="Засварын хуудсын дугаар"/>
                                </div>
                                <Select id="serviceOrderId" placeholder="Засварын хуудсын дугаар" {...register("serviceOrderId")}>
                                    {serviceOrderData?.map((i) => (
                                        <option key={`serviceOrder_${i.id}`} value={i.id}>
                                            {i.zaswarNumber}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchId" value="Байгууллага"/>
                                </div>
                                <Select id="branchId" placeholder="Байгууллага" {...register("branchId")}>
                                    {branchData?.map((i) => (
                                        <option key={`branch_${i.id}`} value={i.id}>
                                            {i.branchName}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>


                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productId" value="Бүтээгдэхүүний нэр"/>
                                </div>
                                <Select id="productId" placeholder="Бүтээгдэхүүний нэр" {...register("productId")}>
                                    {productData?.map((i) => (
                                        <option key={`product_${i.id}`} value={i.id}>
                                            {i.productName}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Хэмжих нэгж"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Хэмжих нэгж" {...register("prodmetricId")}>
                                    {prodmetricData?.map((i) => (
                                        <option key={`prodmetric_${i.id}`} value={i.id}>
                                            {i.typeId}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productCnt" value="Ашигласан тоо ширхэг"/>
                                </div>
                                <TextInput id="productCnt" placeholder="Ашигласан тоо ширхэг" {...register("productCnt")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceEmployeeId" value="Үйлчилгээ хийсэн механикч"/>
                                </div>
                                <Select id="serviceEmployeeId" placeholder="Үйлчилгээ хийсэн механикч" {...register("serviceEmployeeId")}>
                                    {serviceEmployeeData?.map((i) => (
                                        <option key={`serviceEmployee_${i.id}`} value={i.id}>
                                            {i.employeeId}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
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
                          <Button className="bg-orange-400" onClick={handleSubmit(onSubmit)}>
                            Хадгалах
                          </Button>
                       </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
 }

 export default Details;