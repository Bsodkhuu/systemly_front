import { TextInput, Button, Table, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useForm } from "react-hook-form";
import { Service } from "../../API";

const Active = () => {
  const { data: service } = useQuery("getService", getService);

  async function getService() {
    const response = await axiosClient.get("/services");
    return response.data as Service[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээний нэр (Идэвхитэй)</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-orange-500">
                Хайх
              </Button>
            </div>
          </div>
         
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Засвар үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Үнэ</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {service?.map((service: Service, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{service.serviceName}</Table.Cell>
                  <Table.Cell>{service.price}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default Active;
