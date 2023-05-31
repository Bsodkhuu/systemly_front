import React, { useState } from "react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { Address, Branch, Employee, PersonPhone } from "../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Label, Modal, Select, TextInput, Card, ListGroup } from "flowbite-react";
import { Button } from "antd";

const Salbar = () => {
    const [showModal, setShowModal ] = useState(false);
    function openModal() {
        setShowModal(true);
      }
      function closeModal() {
        setShowModal(false);
      }
    
    const { register, handleSubmit } = useForm<Address>();
    const { mutateAsync } = useMutation("create", create);

    const { data: employeeData } = useQuery("getEmployee", getEmployee);
    const { data: branchData } = useQuery("getBranch", getBranch);
    const { data: phoneData } =  useQuery("getPhone", getPhone);
    const { data: addressData } = useQuery("getAddress", getAddress);

    async function getAddress() {
        const response = await axiosClient.get("/addresses");
        return response.data as Address[];
    }
    async function getPhone() {
        const response = await axiosClient.get("/person-phones");
        return response.data as PersonPhone[];
    }
    async function getBranch() {
        const response = await axiosClient.get("/branch");
        return response.data as Branch[];
    }
    async function getEmployee() {
        const response = await axiosClient.get("/employees");
        return response.data as Employee[];
    }
    async function create(values: Address) {
        const response = await axiosClient.post("/addresses", values);
        return response.data;
    }

    async function onSubmit(values: Address) {
        await mutateAsync(values);
        closeModal();
      }
    return(
        <Layout>
            <Modal show={showModal} onClose={closeModal}>
                <Modal.Header>Салбарын хаяг нэмэх</Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchId" value="Салбарын нэр"/>
                                </div>
                                <Select id="branchId" placeholder="Салбарын нэр" {...register("branchId")} required>
                                    {branchData?.map((i) => (
                                        <option key={`branch_${i.id}`} value={i.id}>
                                            {i.branchName}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchId" value="Салбарын нэр-1"/>
                                </div>
                                <Select id="branchId" placeholder="Салбарын нэр-1" {...register("branchId")} required>
                                    {branchData?.map((i) => (
                                        <option key={`branch_${i.id}`} value={i.id}>
                                            {i.parentId}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchId" value="Салбарын нэр-1"/>
                                </div>
                                <Select id="branchId" placeholder="Салбарын нэр-1" {...register("branchId")} required>
                                    {branchData?.map((i) => (
                                        <option key={`branch_${i.id}`} value={i.id}>
                                            {i.parentId}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="addressDistrict" value="Хот"/>
                                </div>
                                <TextInput id="addressDistrict" placeholder="Хот" {...register("addressDistrict")} required/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="addressSoum" value="Дүүрэг"/>
                                </div>
                                <TextInput id="addressSoum" placeholder="Дүүрэг" {...register("addressSoum")} required/>
                            </div>
                            
                        </div>

                        <div className="flex gap-4">
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="address_bag" value="Хороо"/>
                                </div>
                                <TextInput id="address_bag" placeholder="Хороо" {...register("address_bag")} required/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="addressDetail" value="Хаягын дэлгэрэнгүй"/>
                                </div>
                                <TextInput id="addressDetail" placeholder="Хаягаа бичнэ үү" {...register("addressDetail")} required/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="phoneId" value="Утасны дугаар"/>
                                </div>
                                <Select id="phoneId" placeholder="Утасны дугаар" {...register("phoneId")} required>
                                    {phoneData?.map((i) => (
                                        <option key={`phoneNumber_${i.id}`} value={i.id}>
                                            {i.phone}
                                        </option>
                                    ))}
                                    </Select>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="employeeId" value="Хариуцсан ажилтан"/>
                                </div>
                                <Select id="employeeId" placeholder="Хариуцсан ажилтан" {...register("employeeId")} required>
                                    {employeeData?.map((i) => (
                                        <option key={`employee_${i.id}`} value={i.id}>
                                            {i.lastName}
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal} className="bg-gray-400">Буцах</Button>
                    <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                </Modal.Footer>
            </Modal>
            
                <div className="p-2 bg-gray-200 md:col-span-2 md:h-screen">
                    <div className="p-2 bg-white rounded-lg">
                        <div className="justify-between mb-4 space-y-2 md:flex md:space-y-0">
                            <h4 className="text-1xl">Салбарын хаяг</h4>
                             <div className="md:flex gap-4">
                               <div className="flex gap-3 mt-3 justify-end md:justify-normal ">
                                 <Button className="bg-orange-400" onClick={openModal}>Салбарын хаяг нэмэх</Button>
                                 <a href="/clock"><Button className="bg-orange-400">Ажлын цагийн хуваарь</Button></a>
                            </div>
                        </div>
                    </div>
                        <div className="md:grid md:grid-cols-2">
                            <div className="p-2 w-full">
                              <Card className="md:w-full">
                                <div className="w-50">
                                  <ListGroup>
                                    {addressData?.map((addressData: Address, index: number) => (
                                        <ListGroup.Item key={index}>
                                            Салбарын нэр: {addressData.branch.branchName}
                                            <ListGroup.Item></ListGroup.Item>
                                            Салбарын нэр-1: {addressData.branch.parentId}
                                            <ListGroup.Item></ListGroup.Item>
                                            Салбарын нэр-2: {addressData.branch.parentId}
                                            <ListGroup.Item></ListGroup.Item>
                                            Хот: {addressData.addressDistrict}
                                            <ListGroup.Item></ListGroup.Item>
                                            Дүүрэг: {addressData.addressSoum}
                                            <ListGroup.Item></ListGroup.Item>
                                            Хороо: {addressData.address_bag}
                                            <ListGroup.Item></ListGroup.Item>
                                            Хаягын дэлгэрэнгүй: {addressData.addressDetail}
                                            <ListGroup.Item></ListGroup.Item>
                                            Утасны дугаар: {addressData.phoneNumber.phone}
                                            <ListGroup.Item></ListGroup.Item>
                                            Хариуцсан ажилтан: {addressData.employee.lastName}
                                            <ListGroup.Item></ListGroup.Item>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                            </Card>
                        </div>
                        <div className="p-2">
                            <Card className="md:w-full">
                            <h5 className="text-1xl">Google Map</h5>
                            </Card>
                        </div>
                        </div>
                    </div>
                </div>
        </Layout>
    );
}

export default Salbar;