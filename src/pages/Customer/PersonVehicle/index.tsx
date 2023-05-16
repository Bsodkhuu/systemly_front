import React from "react";
import Layout from "../../../components/layout";
import { Label, TextInput } from "flowbite-react";
import { Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Person, PersonVehicle, Vehicle } from "../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const VehiclePerson = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<PersonVehicle>();
    const { mutateAsync } = useMutation("createPersonVehicle", createPersonVehicle);
    const { data: personName } = useQuery("get_Name", getPersonName);
    const { data: vehicleData } = useQuery("get_Vehicle", getVehicle);

    async function createPersonVehicle(values: PersonVehicle) {
        const response = await axiosClient.post("/person-vehicles", values);
        return response.data;
    }

    async function getPersonName() {
        const response = await axiosClient.get("/persons");
        return response.data as Person[];
    }

    async function getVehicle() {
        const response = await axiosClient.get("/vehicles");
        return response.data as Vehicle[];
    }

    async function onSubmit(values: PersonVehicle) {
        await mutateAsync(values);
        navigate("/customer");
    }
    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Автомашин эзэмшигчийн бүртгэл</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                       <div className="w-1/2">
                         <div className="mb-2 block">
                        <Label htmlFor="personId" value="Эзэмшигчийн нэр" />
                        </div>
                        <Select id="personId" placeholder="Эзэмшигчийн нэр" {...register("personId")}>
                            {personName?.map((i) => (
                                <option key={`person_${i.id}`} value={i.id}>
                                    {i.lastName}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label htmlFor="vehicleNumber" value="Улсын дугаар" />
                        </div>
                        <TextInput id="vehicleNumber"  placeholder="Улсын дугаар" {...register("vehicleNumber")}/>
                    </div>
                    </div>
                    <div className="flex gap-4">
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="vehicleId"
                            value="Машины нэр"/>
                        </div>
                        <Select id="vehicleId" placeholder="Машины нэр" {...register("vehicleId")}>
                            {vehicleData?.map((i) => (
                                <option key={`vehicle_${i.id}`} value={i.id}>
                                    {i.vehicleName}
                                </option>
                            ))}
                        </Select>
                    </div>
                    
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="vehicleColor"
                            value="Өнгө"/>
                        </div>
                        <TextInput
                        id="vehicleColor" placeholder="Өнгө" {...register("vehicleColor")} />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="activeFlag"
                            value="Идэвхтэй эсэх"/>
                        </div>
                        <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                    </div>
                    </div>
                    <div className="flex gap-4">
                    
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="deleteFlag"
                            value="Засвар хийсэн утга"/>
                        </div>
                        <TextInput
                        id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="deleteDate"
                            value="Засвар хийсэн он сар"/>
                        </div>
                        <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                    </div>
                    </div>
                    <div className="flex gap-4">
                    <Button className="bg-gray-500">Буцах</Button>
                    <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>
                        Хадгалах
                    </Button>
                  </div>
                </form>
                </div>
            </div>
        </Layout>
    );
}
export default VehiclePerson;