import { TextInput, Button, Select, Table, Modal, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React, { useEffect, useRef } from "react";

export interface ServiceType{
  id: string;
  createdAt: string;
  updateAt: string;
  mainCategory: string;
  subCategory: string;
  name: string;
  affiliateId?: string;
  price: number;
  averagePrice: number;
  suudalPrice: number;
  achaaPrice: number;
  currency: string;
}

const Price = () => {
  const { register, handleSubmit }=useForm<ServiceType>();
 
  const { mutateAsync } = useMutation("serviceType", serviceType);

  
  const { data: serviceList} = useQuery("getServiceType", 
    getServiceType
  );

  async function getServiceType() {
    const response = await axiosClient.get("/service-types");
    return response.data as ServiceType[];
  }

  async function serviceType(values: ServiceType) {
    const response = await axiosClient.post("/service-types", {
        ...values,
        price: parseInt(values.price.toString()),
        averagePrice: parseInt(values.averagePrice.toString()),
        suudalPrice: parseInt(values.suudalPrice.toString()),
        achaaPrice: parseInt(values.achaaPrice.toString()),
      });

    // const response1 = await axiosClient.post("/service-types");

    return response.data;
  }
  
  async function onSubmit(values: ServiceType) {
    await mutateAsync(values);
  }
  return (
    <Layout>
      <div className="p-2 bg-gray-200 h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4">
              <TextInput type="search" placeholder="Хайлт" />
              <Button className="bg-orange-500">Хайх</Button>
              
              <a href="/active">
                <Button className="bg-orange-500">Идэвхитэй</Button>
              </a>
            </div>
          </div>
       
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="mainCategory" value="Main Group"/>
              <TextInput type="text" {...register("mainCategory")}/>
                {/* <Select>
                  {serviceList?.map((i) => (
                    <option value={i.id}>
                      {i.mainCategory}
                    </option>
                  ))}
                </Select>  */}
                &nbsp;
                <Label htmlFor="subCategory" value="Sub Group"/>
                <TextInput type="text" {...register("subCategory")}/>&nbsp;
              
              <Label htmlFor="name" value="Үйлчилгээ нэр"/>
              <TextInput type="text" {...register("name")}/>&nbsp;
              <Label htmlFor="price" value="Том"/>
             <TextInput type="number" {...register("price")}/>&nbsp;
             <Label htmlFor="averagePrice" value="Дунд"/>
             <TextInput type="number" {...register("averagePrice")}/>&nbsp;
             <Label htmlFor="suudalPrice" value="Суудлын"/>
             <TextInput type="number" {...register("suudalPrice")}/>&nbsp;
             <Label htmlFor="achaaPrice" value="Ачааны"/>
             <TextInput type="number" {...register("achaaPrice")}/>&nbsp;
              <Label htmlFor="currency" value="Валют"/>
             <TextInput type="text"   {...register("currency")}/>&nbsp;
             <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
            </form>
            &nbsp;&nbsp;
          <Table>
            <Table.Head>
              <Table.HeadCell>Main Group</Table.HeadCell>
              <Table.HeadCell>Sub Group</Table.HeadCell>
              <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Том</Table.HeadCell>
              <Table.HeadCell>Дунд</Table.HeadCell>
              <Table.HeadCell>Суудлын</Table.HeadCell>
              <Table.HeadCell>Ачааны</Table.HeadCell>
              <Table.HeadCell>Валют</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {serviceList?.map((service: ServiceType, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Select>
                      <option value="mainCategory">
                        {service.mainCategory}
                      </option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select>
                      <option value="subCategory">{service.subCategory}</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select>
                      <option value="name">{service.name}</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>{service.price}</Table.Cell>
                  <Table.Cell>{service.averagePrice}</Table.Cell>
                  <Table.Cell>{service.suudalPrice}</Table.Cell>
                  <Table.Cell>{service.achaaPrice}</Table.Cell>
                  <Table.Cell>{service.currency}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Price;

