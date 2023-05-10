import {
  Button,
  Card,
  Label,
  Alert,
  TextInput,
  Textarea,
  ListGroup,Table,
} from "flowbite-react";

import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useQuery } from "react-query";
import React from "react";
import { Address } from "../../API";


const Create = () => {

  const { register, handleSubmit } = useForm<Address>();
  const { mutateAsync } = useMutation("address", address);
  const { data, isLoading } = useQuery("products", getProducts);
  const { data: address1 } = useQuery("getAddress", getAddress);

  async function getAddress() {
    const response = await axiosClient.get("/addresses");
    return response.data as Address[];
  }

  async function getProducts() {
    const response = await axiosClient.get("/products");
    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }
  async function address(values: Address) {
    const response = await axiosClient.post("/addresses", values);
    return response.data;
  }

  async function onSubmit(values: Address) {
    await mutateAsync(values);
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Хүргэлтийн хаяг</h5>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="/backorder">
                <Alert
                  color="failure"
                  rounded={false}
                  withBorderAccent={true}
                  additionalContent={
                    <React.Fragment>
                      <div className="mt-2 mb-4 text-sm text-red dark:text-red">
                        Бэлэн бус захиалгад 5 ширхэг бараа орсон байна{" "}
                      </div>
                    </React.Fragment>
                  }
                >
                  <h3 className="text-lg font-medium text-red dark:text-red">
                    Бэлэн бус захиалга
                  </h3>
                </Alert>
                /Бэлэн захиалга мэссэж ногоон өнгөөр харагдана /
                <Button className="bg-orange-500">Бэлэн бус захиалга</Button>
              </a>
            </div>
           
          </div>
        </div>
        <div className="col-span">
          <div className="p-2">
            <Card>
              <h1 className="text-1xl">Сагс</h1>
              <div className="w-50">
                <ListGroup>
                  
                    <ListGroup.Item>
                      Парт дугаар: 
                      <ListGroup.Item></ListGroup.Item>
                      Тайлбар: 
                      <ListGroup.Item></ListGroup.Item>
                      Нэгжийн үнэ: 
                      <ListGroup.Item></ListGroup.Item>
                      Валют:
                      <ListGroup.Item></ListGroup.Item>
                      Fitting: 
                      <ListGroup.Item></ListGroup.Item>
                      Тоо, ширхэг: 
                      <ListGroup.Item></ListGroup.Item>
                      Нийт үнэ:
                    </ListGroup.Item>
                
                </ListGroup>
                &nbsp;
                <a href="/checkbox">
                  <Button className="bg-orange-500">
                    Захиалга баталгаажуулах
                  </Button>
                </a>
                &nbsp;
                <a href="/zahialga">
                  <Button className="bg-orange-500">Сэлбэг хайх</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
