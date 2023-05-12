import { TextInput, Button, Table, Modal, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Select } from 'antd';



const Price = () => {

  return (
    <Layout>
      <div className="p-4 bg-gray-200 md:h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="md:flex justify-between mb-4">
            <div className="text-1xl mb-4 md:mb-0">Засварын үнийн тохиргоо</div>
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
                  <div className="flex gap-4 justify-end ">
                    <Button className="bg-gray-400">Буцах</Button>
                    <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">
                      Хадгалах
                    </Button>
                </div>
            </form>
            &nbsp;&nbsp;
          <Table className="hidden md:block" >
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
        <div className="md:hidden" >
        {serviceList?.map((service: ServiceType, index: number) => (
                <div className=" flex justify-between p-4 bg-white rounded-md text-[11px] shadow-xl mt-3 text-gray-500  border border-2 border-orange-300" >
                <div className="w-[50%] space-y-1 divide-y " >
                    <div className="font-bold text-black " >Main Group</div>
                    <div>Sub Group</div>
                    <div>Үйлчилгээний нэр</div>
                    <div>Том</div>
                    <div>Дунд</div>
                    <div>Суудлын</div>
                    <div>Ачааны</div>
                    <div>Валют</div>
                </div>
                <div className="w-[50%] space-y-1 divide-y " key={index}>
                    <div className="font-bold h-[16px]"><select className="h-4 rounded-xl border-orange-300 w-full "><option value="mainCategory"> {service.mainCategory}</option></select></div>
                    <div className="font-bold h-[17px]"><select className="h-4 rounded-xl border-orange-300 w-full "><option value="subCategory">{service.subCategory}</option></select></div>
                    <div className="font-bold h-[17px]"><select className="h-4 rounded-xl border-orange-300 w-full "><option value="name">{service.name}</option></select></div>
                    <div>{service.price}</div>
                    <div>{service.averagePrice}</div>
                    <div>{service.suudalPrice}</div>
                    <div>{service.achaaPrice}</div>
                    <div>{service.currency}</div>
                </div>
              </div>
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default Price;

