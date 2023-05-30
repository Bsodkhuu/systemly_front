import React from "react";
import Layout from "../../../../components/layout";
import { FileInput, Label, TextInput, Select, Button} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Branch, Prodmetric, Product, ProductFits, VehicleUsage } from "../../../API";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";

const ProductAdd = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<Product>();
    const { mutateAsync } = useMutation("create", create);
    
    async function create(values: Product) {
        const response = await axiosClient.post("/products", {
            ...values, 
            priceMain: parseFloat(values.priceMain.toString()), 
            quantity: parseInt(values.quantity.toString()),
            prodmetricType: parseInt(values.prodmetricType.toString()), 
        });
        return response.data;
    }
    async function onSubmit(values: Product) {
        await mutateAsync(values);
        navigate("/zahialga");
    }

    const { data: fitting } = useQuery("getFitting", getFitting);
    const { data: vehicleUsages } = useQuery("getUsages", getUsages);
    const { data: prodmetricData } = useQuery("getProdmetric", getProdmetric);
    const { data: branchData } = useQuery("getBranch", getBranch);

    async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }
    async function getFitting() {
        const response = await axiosClient.get("/product-fits");
        return response.data as ProductFits[];
    }

    async function getUsages() {
        const response = await axiosClient.get("/vehicle-usages");
        return response.data as VehicleUsage[];
    }

    async function getProdmetric() {
        const response = await axiosClient.get("/prodmetric");
        return response.data as Prodmetric[];
    }
    
    return (
        <Layout>
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Бүтээгдэхүүн</div>
                        <div className="md:flex gap-4">
                            <a href="/vehiceCategory"><Button className="bg-orange-400">Машины ангилал</Button></a>
                            <a href="/productCategory"><Button className="bg-orange-400">Бүтээгдэхүүний ангилал</Button></a>
                            <a href="/fitting"><Button className="bg-orange-400">Машины аль хэсэгт тохирох вэ</Button></a>
                            <a href="/vehicleUsage"><Button className="bg-orange-400">Машин төрөл</Button></a>
                            <a href="/prodmetric"><Button className="bg-orange-400">Бүтээгдэхүүний хэмжих нэгж</Button></a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="" value="Image"/>
                                </div>
                                <FileInput id=""/>
                            </div>
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
                                    <Label htmlFor="productFitsId" value="Fitting Position"/>
                                </div>
                                <Select id="productFitsId" placeholder="Fitting Position" {...register("productFitsId")}>
                                {fitting?.map((i) => (
                                    <option key={`productFits_${i.id}`} value={i.id}>
                                        {i.positionId}
                                    </option>
                                ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="vehicleId" value="Машины төрөл"/>
                                </div>
                                <Select id="vehicleId" placeholder="Машины төрөл" {...register("vehicleId")}>
                                    {vehicleUsages?.map((i) => (
                                        <option key={`vehicle_${i.id}`} value={i.id}>
                                            {i.vehicleType}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
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
                                <Label htmlFor="prodmetricType" value="Нэгжийн утга"/>
                            </div>
                            <TextInput type="number" id="prodmetricType" placeholder="Нэгжийн утга" {...register("prodmetricType")}/>
                        </div>
                    </div>
                        <div className="flex gap-4">
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productCode" value="Үйлдвэрлэгчийн парт дугаар"/>
                                </div>
                                <TextInput id="productCode" placeholder="Үйлдвэрлэгчийн парт дугаар" {...register("productCode")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="manufacturerId" value="Үйлдвэрлэгч"/>
                                </div>
                                <TextInput id="manufacturerId" placeholder="Үйлдвэрлэгч" {...register("manufacturerId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productName" value="Бүтээгдэхүүний нэр"/>
                                </div>
                                <TextInput id="productName" placeholder="Бүтээгдэхүүний нэр" {...register("productName")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productDescription" value="Бүтээгдэхүүний тайлбар"/>
                                </div>
                                <TextInput id="productDescription" placeholder="Бүтээгдэхүүний тайлбар" {...register("productDescription")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="priceMain" value="Үндсэн үнэ"/>
                                </div>
                                <TextInput id="priceMain" placeholder="Үндсэн үнэ" {...register("priceMain")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Бэлэн байгаа тоо ширхэг"/>
                                </div>
                                <TextInput id="quantity" placeholder="Бэлэн байгаа тоо ширхэг" {...register("quantity")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="currency" value="Валют"/>
                                </div>
                                <TextInput id="currency" placeholder="Валют" {...register("currency")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="evaDate" value="ETA(Хэрэв байхгүй бол бэлэн болох хугацаа)"/>
                                </div>
                                <TextInput id="evaDate" type="date" placeholder="ETA(Хэрэв байхгүй бол бэлэн болох хугацаа)" {...register("evaDate")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="confirmFlag" value="Бүтээгдэхүүнээ зөв оруулсан эсэх"/>
                                </div>
                                <TextInput id="confirmFlag" placeholder="Тийм, Үгүй" {...register("confirmFlag")}/>
                            </div>
                            
                        </div>

                        <div className="flex gap-4">
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="historyId" value="History Id"/>
                                </div>
                                <TextInput id="historyId" placeholder="Бүтээгдэхүүний түүх" {...register("historyId")}/>
                            </div>
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
                                <TextInput type="date" id="deleteDate" placeholder="Засвар хийсэн он сар" {...register("deleteDate")}/>
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
export default ProductAdd;
