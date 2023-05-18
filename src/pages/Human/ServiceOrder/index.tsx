import React from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";
import { Branch, Person, PersonVehicle, Service, ServiceOrder, Vehicle } from "../../API";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Label, Select, TextInput, Button} from "flowbite-react";

const Service_Order = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ServiceOrder>();
    const { mutateAsync } = useMutation("create", create);
    const { data: personData } = useQuery("getPerson", getPerson);
    const { data: branchData } = useQuery("getBranch", getBranch);
    const { data: serviceData } = useQuery("getService", getService);
    const { data: personVehicle } = useQuery("getPersonVehicle", getPersonVehicle);
    const { data: vehicleData } = useQuery("getVehicle", getVehicle);

    async function getVehicle() {
        const response = await axiosClient.get("/vehicles");
        return response.data as Vehicle[];
    }
    async function create(values: ServiceOrder) {
        const response = await axiosClient.post("/service-orders",{
            ...values, 
            payPrice: parseFloat(values.payPrice.toString()), 
            paidAmount: parseFloat(values.paidAmount.toString()),
        });
        return response.data;
    }

    async function onSubmit(values: ServiceOrder ) {
        await mutateAsync(values);
        navigate("/human");
    }
     async function getPerson() {
        const response = await axiosClient.get("/persons");
        return response.data as Person[];
     }

     async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
     }

    async function getService() {
        const response = await axiosClient.get("/services");
        return response.data as Service[];
    }

    async function getPersonVehicle() {
        const response = await axiosClient.get("/person-vehicles");
        return response.data as PersonVehicle[];
    }
     
    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Хийсэн үйлчилгээний бүртгэл</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="zaswarNumber" value="Засварын хуудсын дугаар"/>
                                </div>
                                <TextInput id="zaswarNumber" placeholder="Засварын хуудсын дугаар" required {...register("zaswarNumber")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="personId" value="Эзэмшигчийн нэр"/>
                                </div>
                                <Select id="personId" placeholder="Эзэмшигчийн нэр" {...register("personId")}>
                                    {personData?.map((i) => (
                                        <option key={`person_${i.id}`} value={i.id}>
                                            {i.lastName}
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
                                    <Label htmlFor="serviceId" value="Үйлчилгээний нэр"/>
                                </div>
                                <Select id="serviceId" placeholder="Үйлчилгээний нэр" {...register("serviceId")}>
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
                                    <Label htmlFor="vehicleId" value="Машин"/>
                                </div>
                                <Select id="vehicleId" placeholder="Машин" {...register("vehicleId")}>
                                    {vehicleData?.map((i) => (
                                        <option key={`vehicle_${i.id}`} value={i.id}>
                                            {i.vehicleName}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="personVehicleId" value="Улсын дугаар"/>
                                </div>
                                <Select id="personVehicleId" placeholder="Улсын дугаар" {...register("personVehicleId")}>
                                    {personVehicle?.map((i) => (
                                        <option key={`personVehicle_${i.id}`} value={i.id}>
                                            {i.vehicleNumber}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="serviceDate" value="Үйлчилгээ хийсэн огноо"/>
                                </div>
                                <TextInput type="date" id="serviceDate" placeholder="" required {...register("serviceDate")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="payPrice" value="Төлөх дүн"/>
                                </div>
                                <TextInput type="text" id="payPrice" placeholder="Төлөх дүн" required {...register("payPrice")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="paidAmount" value="Төлсөн дүн"/>
                                </div>
                                <TextInput type="text" id="paidAmount" placeholder="Төлсөн дүн" required {...register("paidAmount")}/>
                                
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" required {...register("activeFlag")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" required  {...register("deleteFlag")}/>
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
                            <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default Service_Order;