import { TextInput, Button, Select, Table, Modal, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export interface ServiceType{
  id: string;
  createdAt: string;
  updateAt: string;
  mainCategory: string;
  subCategory: string;
  name: string;
  affiliateId?: string;
  price: GLfloat;
  currency: string;

}

interface FormValues{
  mainCategory: string;
  subCategory: string;
  name: string;
  affiliateId?: string;
  price: GLfloat;
  currency: string;
}

const PriceModal = ({ showModal, closeModal }: any) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync } = useMutation("createPrice", createPrice);

  async function createPrice(values: FormValues) {
    const response = await axiosClient.post("/service-types", values);
    return response.data;
  }

  async function onSubmit(values: FormValues) {
    await mutateAsync(values);
    navigate("/active");
    closeModal();
  }
  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Үйлчилгээний бүртгэл</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-h-96 overflow-y-auto"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Үйлчилгээний нэр" />
              </div>
              <TextInput id="name" {...register("name")} />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="price" value="Үнэ" />
              </div>
              <TextInput id="price" {...register("price")} />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="currency" value="Валют" />
              </div>
              <TextInput id="currency" {...register("currency")} />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} className="bg-gray-400">
          Буцах
        </Button>
        <Button onClick={handleSubmit(onSubmit)} className="bg-blue-500">
          Хадгалах
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Price = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: service } = useQuery("getService", getService);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function getService() {
    const response = await axiosClient.get("/service-types");
    return response.data;
  }

  return (
    <Layout>
      <PriceModal showModal={showModal} closeModal={closeModal} />

      <div className="p-2 bg-gray-200 h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4">
              <TextInput type="search" placeholder="Хайлт" />
              <Button className="bg-blue-500">Хайх</Button>
              <Button className="bg-blue-500" onClick={openModal}>
                Үйлчилгээний бүртгэл
              </Button>
              <a href="/active">
                <Button className="bg-blue-500">Идэвхитэй</Button>
              </a>
            </div>
          </div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Main Group</Table.HeadCell>
              <Table.HeadCell>Sub Group</Table.HeadCell>
              <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Том оврийн</Table.HeadCell>
              <Table.HeadCell>SUV</Table.HeadCell>
              <Table.HeadCell>Дунд гарын</Table.HeadCell>
              <Table.HeadCell>Суудлын</Table.HeadCell>
              <Table.HeadCell>Үйлдэл</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {service?.map((service: ServiceType, index: number) => (
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
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <Button className="bg-blue-500">Хадгалах</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Body className="divide-y">
              {service?.map((service: any, index: number) => (
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
                  <Table.Cell>{service.price}</Table.Cell>
                  <Table.Cell>{service.price}</Table.Cell>
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

export default Price;
