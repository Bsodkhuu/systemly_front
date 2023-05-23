import React from "react";
import Layout from "../../../../components/layout";
import { Button, Label, Table, TextInput } from "flowbite-react";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TrackInfo } from "../../../API";

const Zam = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<TrackInfo>();
    const { mutateAsync } = useMutation("createTrack", createTrack);

    async function createTrack(values: TrackInfo) {
        const response = await axiosClient.post("/track-infos", values);
        return response.data;
    }

    async function onSubmit(values: TrackInfo) {
        await mutateAsync(values);
        navigate("/my");
    }

    return(
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Замын мэдээ</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="packageId" value="Нийлүүлэгч"/>
                                </div>
                                <TextInput id="packageId" placeholder="Үйлдвэрлэгчийн нэр" {...register("packageId")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="spotId" value="Байршил"/>
                                </div>
                                <TextInput id="spotId" placeholder="Газар нутаг" {...register("spotId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="descriptionSpot" value="Байршилын дэлгэрэнгүй"/>
                                </div>
                                <TextInput id="descriptionSpot" placeholder="Хаана явж байгаа вэ?" {...register("descriptionSpot")}/>
                            </div>

                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="status" value="Статус"/>
                                </div>
                                <TextInput id="status"  placeholder="Статус" {...register("status")}/>
                            </div>

                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="trackDate" value="Он сар өдөр"/>
                                </div>
                                <TextInput id="trackDate" type="date" placeholder="Он сар өдөр" {...register("trackDate")}/>
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
export default Zam;