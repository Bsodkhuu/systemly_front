import { Card, Button, Label, TextInput, ListGroup } from "flowbite-react";
import Layout from "../../components/layout";
import React from "react";
import { useForm } from "react-hook-form";
import { Address } from "../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
const Profile = () => {
    const { register, handleSubmit } = useForm<Address>();
    const { mutateAsync } = useMutation("createAddress", createAddress);

    async function createAddress(values: Address) {
        const response = await axiosClient.post("/addresses", values);
        return response.data;
    }

    async function onSubmit(values: Address) {
        await mutateAsync(values);
    }

    const { data: address } = useQuery("getAddress", getAddress);

    async function getAddress() {
        const response = await axiosClient.get("/addresses");
        return response.data as Address[];
    }

    return(
        <Layout>
            <div className="md:grid md:grid-cols-3 gap-4">
                <div className="p-2 bg-gray-200 md:h-screen md:col-span-2">
                    <div className="bg-white p-2 rounded-lg">
                        <div className="md:flex justify-between mb-4 space-y-2  md:space-y-0">
                            <h4 className="text-1xl">Харилцагчийн бүртгэл</h4>
                            <div>
                               <a href="/phone">
                               <Button className="bg-orange-500">
                               <p className="text-[11px]">
                               Харилцагчийн утасны дугаар нэмэх
                               </p>
                               </Button>
                               </a>
                            </div>
                        </div>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="addressDistrict" value="Аймаг, нийслэл"/>
                                    </div>
                                    <TextInput id="addressDistrict" placeholder="Аймаг, нийслэл" {...register("addressDistrict")}/>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="addressSoum" value="Сум, Дүүрэг"/>
                                    </div>
                                    <TextInput id="addressSoum" placeholder="Сум, Дүүрэг" {...register("addressSoum")}/>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="address_bag" value="Баг,хороо"/>
                                    </div>
                                    <TextInput id="address_bag" placeholder="1-р хороо" {...register("address_bag")}/>
                                </div>
                                <div className="w-1/2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="addressDetail" value="Хаяг"/>
                                    </div>
                                    <TextInput id="addressDetail" placeholder="Хаягаа бичнэ үү" {...register("addressDetail")}/>
                                </div>
                            </div>
                           
                            <div className="flex gap-4">
                              <Button className="bg-gray-400">Буцах</Button>
                              <Button className="bg-orange-400" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span">
                        <div className="p-2">
                            <div className="max-w-sm">
                                <Card imgSrc="">
                                    <h5>Хаягийн дэлгэрэнгүй</h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                            <ListGroup>
                                            {address?.map((address: Address, index: number) => (
                                              <ListGroup.Item key={index}>
                                                Аймаг, нийслэл: {address.addressDistrict}
                                                <ListGroup.Item></ListGroup.Item>
                                                Сум, Дүүрэг: {address.addressSoum}
                                                <ListGroup.Item></ListGroup.Item>
                                                Баг,хороо: {address.address_bag}
                                                <ListGroup.Item></ListGroup.Item>
                                                Хаяг: {address.addressDetail}
                                                <ListGroup.Item></ListGroup.Item>
                                              </ListGroup.Item>
                                            ))}
                                          </ListGroup>
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    );
}

export default Profile;