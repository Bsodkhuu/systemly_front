import { TextInput, Button, Modal, Label, Select, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import React, { useState } from "react";
import { Service, Spare } from "../../API";

const Price = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal(){
    setShowModal(false);
  }

  const { register, handleSubmit } = useForm<Spare>();
  const { mutateAsync } = useMutation("createSpare", createSpare);

  const { data: serviceData } = useQuery("getService", getService);
  
  async function getService() {
    const response = await axiosClient.get("/services");
    return response.data as Service[];
  }

  const { data: spareData } = useQuery("getSpare", getSpare);
  
  async function getSpare() {
    const response = await axiosClient.get("/spares");
    return response.data as Spare[];
  }

  async function createSpare(values: Spare) {
    const response = await axiosClient.post("/spares", {
      ...values,
      priceBig: parseFloat(values.priceBig.toString()),
      priceJeep: parseFloat(values.priceJeep.toString()),
      priceMiddle: parseFloat(values.priceMiddle.toString()),
      priceSeat: parseFloat(values.priceSeat.toString()),
    });
    return response.data;
  }
  async function onSubmit(values: Spare) {
    await mutateAsync(values);
    closeModal();
  }

  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Нэмэх</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="spareMain" value="Main Group"/>
                </div>
                <TextInput id="spareMain" placeholder="Main Group" required {...register("spareMain")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="spareSub" value="Sub Group"/>
                </div>
                <TextInput id="spareSub" placeholder="Sub Group" required {...register("spareSub")}/>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="serviceId" value="Үйлчилгээний нэр" {...register("serviceId")}/>
                </div>
                <Select id="serviceId" placeholder="Үйлчилгээний нэр">
                  {serviceData?.map((i) => (
                    <option key={`service_${i.id}`} value={i.id}>
                      {i.serviceName}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="priceBig" value="Том оврийн үнэ"/>
                </div>
                <TextInput id="priceBig" type="number" placeholder="Том оврийн үнээ бичнэ үү" required {...register("priceBig")}/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="priceJeep" value="SUV үнэ"/>
                </div>
                <TextInput id="priceJeep" type="number" placeholder="SUV үнээ бичнэ үү" required {...register("priceJeep")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="priceMiddle" value="Дунд гарын үнэ"/>
                </div>
                <TextInput id="priceMiddle" type="number" placeholder="Дунд гарын үнээ бичнэ үү" required {...register("priceMiddle")}/>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="priceSeat" value="Суудлын үнэ"/>
                </div>
                <TextInput id="priceSeat" type="number" placeholder="Суудлын үнээ бичнэ үү" required {...register("priceSeat")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                </div>
                <TextInput id="activeFlag"  placeholder="Идэвхтэй эсэх" required {...register("activeFlag")}/>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                </div>
                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" required {...register("deleteFlag")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                </div>
                <TextInput id="deleteDate" type="date" placeholder="Засвар хийсэн он сар" required {...register("deleteDate")}/>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button  className="bg-orange-500" onClick={handleSubmit(onSubmit)}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4 bg-gray-200 md:h-screen w-full">
        <div className="bg-white p-2 rounded-lg">
          <div className="md:flex justify-between mb-4">
            <div className="text-1xl mb-4 md:mb-0">Засварын үнийн тохиргоо</div>
            <div className="flex gap-4">
              <TextInput type="search" name="name" placeholder="Хайлт" />
              <Button className="bg-orange-500">Хайх</Button>
              <a href="/active">
                <Button className="bg-orange-500">Үйлчилгээ бүртгэх</Button>
              </a>
              <Button className="bg-orange-500" onClick={openModal}>Нэмэх</Button>
            </div>
          </div>

          <Table> 
            <Table.Head className="uppercase">
              <Table.HeadCell>Main Group</Table.HeadCell>
              <Table.HeadCell>Sub Group</Table.HeadCell>
              <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Том оврийн</Table.HeadCell>
              <Table.HeadCell>SUV</Table.HeadCell>
              <Table.HeadCell>Дунд гарын</Table.HeadCell>
              <Table.HeadCell>Суудлын</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {spareData?.map((spareData: Spare, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Select> 
                      <option value={spareData.spareMain}>
                        {spareData.spareMain}
                      </option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select> 
                      <option value={spareData.spareMain}>
                        {spareData.spareMain}
                      </option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    {spareData.service.serviceName}
                  </Table.Cell>
                  <Table.Cell>
                    {spareData.priceBig}
                  </Table.Cell>
                  <Table.Cell>
                    {spareData.priceJeep}
                  </Table.Cell>
                  <Table.Cell>
                    {spareData.priceMiddle}
                  </Table.Cell>
                  <Table.Cell>
                    {spareData.priceSeat}
                  </Table.Cell>
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

