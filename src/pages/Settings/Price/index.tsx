import { TextInput, Button, Select, Table, Modal, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";



const Price = () => {

  return (
    <Layout>
      <div className="p-2 bg-gray-200 h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4">
              <TextInput type="search" name="name" placeholder="Хайлт" />
              
              <Button className="bg-orange-500">Хайх</Button>
              
              <a href="/active">
                <Button className="bg-orange-500">Идэвхитэй</Button>
              </a>
            </div>
          </div>
{/*        
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                  <Label htmlFor="mainCategory" value="Main Group"/>
                  </div>
                  <TextInput type="text" {...register("mainCategory")}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                  <Label htmlFor="subCategory" value="Sub Group"/>
                  </div>
                  <TextInput type="text" {...register("subCategory")}/>
                </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <div className="mb-2 block">
                    <Label htmlFor="name" value="Үйлчилгээ нэр"/>
                    </div>
                    <TextInput type="text" {...register("name")}/>
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                      <Label htmlFor="price" value="Том"/>
                      </div>
                      <TextInput type="number" {...register("price")}/>
                    </div>
                  </div>
                  <div className="flex gap-4">
                        <div className="w-1/2">
                          <div className="mb-2 block">
                          <Label htmlFor="averagePrice" value="Дунд"/>
                          </div>
                          <TextInput type="number" {...register("averagePrice")}/>
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                      <Label htmlFor="suudalPrice" value="Суудлын"/>
                      </div>
                      <TextInput type="number" {...register("suudalPrice")}/>
                    </div>
                  </div>
                  <div className="flex gap-4">
                        <div className="w-1/2">
                          <div className="mb-2 block">
                          <Label htmlFor="achaaPrice" value="Ачааны"/>
                          </div>
                          <TextInput type="number" {...register("achaaPrice")}/>
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                      <Label htmlFor="currency" value="Валют"/>
                      </div>
                      <TextInput type="text"   {...register("currency")}/>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-gray-400">Буцах</Button>
                    <Button onClick={handleSubmit(onSubmit)} className="bg-orange-400">
                      Хадгалах
                    </Button>
                </div>
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
          </Table> */}
        </div>
      </div>
    </Layout>
  );
};

export default Price;

