import React from "react";
import Layout from "../../../../components/layout";
import { FileInput, Label, TextInput, Select, Button} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../API";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProductAdd = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<Product>();
    const { mutateAsync } = useMutation("create", create);
    
    async function create(values: Product) {
        const response = await axiosClient.post("/", values);
        return response.data;
    }
    async function onSubmit(values: Product) {
        await mutateAsync(values);
        navigate("/zahialga");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
                <div className="bg-white p-6 rounded-lg">
                    <div className="md:flex justify-between mb-4 space-y-3">
                        <div className="text-xl">Бүтээгдэхүүн</div>
                        <div className="md:flex gap-4">
                            <a href="/fitting"><Button className="bg-orange-400">Fitting Position</Button></a>
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
                                    <Label htmlFor="productFitsId" value="Fitting Position"/>
                                </div>
                                <Select id="productFitsId" placeholder="Fitting Position" {...register("productFitsId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="vehicleId" value="Vehicle type"/>
                                </div>
                                <Select id="vehicleId" placeholder="Vehicle type" {...register("vehicleId")}/>
                            </div>
                            
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Height 1 [mm]"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Height 1 [mm]" {...register("prodmetricId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Width 1 [mm]"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Width 1 [mm]" {...register("prodmetricId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Thickness 1 [mm]"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Thickness 1 [mm]" {...register("prodmetricId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="prodmetricId" value="Weight [kg]"/>
                                </div>
                                <Select id="prodmetricId" placeholder="Weight [kg]:" {...register("prodmetricId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productCode" value="Manufacturer part number"/>
                                </div>
                                <TextInput id="productCode" placeholder="Manufacturer part number" {...register("productCode")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="manufacturerId" value="Manufacturer"/>
                                </div>
                                <TextInput id="manufacturerId" placeholder="Weight [kg]:" {...register("manufacturerId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productName" value="Product Name"/>
                                </div>
                                <TextInput id="productName" placeholder="Product Name" {...register("productName")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="productDescription" value="Description"/>
                                </div>
                                <TextInput id="productDescription" placeholder="Description" {...register("productDescription")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="priceMain" value="Our price"/>
                                </div>
                                <TextInput id="priceMain" placeholder="Our price" {...register("priceMain")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="currency" value="Currency"/>
                                </div>
                                <TextInput id="currency" placeholder="Currency" {...register("currency")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="confirmFlag" value="confirmFlag"/>
                                </div>
                                <TextInput id="confirmFlag" placeholder="confirmFlag" {...register("confirmFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="historyId" value="history"/>
                                </div>
                                <TextInput id="historyId" placeholder="history" {...register("historyId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="activeFlag" value="activeFlag"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="activeFlag" {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="deleteFlag"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="deleteFlag" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="deleteDate"/>
                                </div>
                                <TextInput type="date" id="deleteDate" placeholder="deleteDate" {...register("deleteDate")}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
export default ProductAdd;
