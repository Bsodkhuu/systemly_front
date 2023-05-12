import React, { FC, useEffect, useRef } from "react";
import { Button, Table, Label, Modal, Card, TextInput, Select } from "flowbite-react";
import Layout from "../../components/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { useSearchParams } from "react-router-dom";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const CustomerModal: FC<ModalProps> = ({ showModal, closeModal }) => {
  // const { register, handleSubmit } = useForm<GarageCustomerOwner>();
  // const { mutateAsync } = useMutation("createCustomer", createCustomer);

  // async function createCustomer(values: GarageCustomerOwner) {
  //   const response = await axiosClient.post("/garage-customer-owners", values);
  //   return response.data;
  // }

  // async function onSubmit(values: GarageCustomerOwner) {
  //   await mutateAsync(values);
  //   closeModal();
  // }

  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Харилцагч нэмэх</Modal.Header>
      <Modal.Body>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-h-96 overflow-y-auto">
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="Овог" />
              </div>
              <TextInput id="firstName" />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Нэр" />
              </div>
              <TextInput id="lastName" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="birthdate" value="Төрсөн өдөр" />
              </div>
              <TextInput type="datetime" id="birthdate"  />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="registerId" value="Регистрийн дугаар" />
              </div>
              <TextInput id="registerId" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="gender" value="Хүйс" />
              </div>
              <Select>
                <option value="gender">
                </option>
              </Select>
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="familyName" value="Гэр бүлийн байдал" />
              </div>
              <Select>

              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Имэйл" />
              </div>
              <TextInput id="email" placeholder="example@gmail.com гэж бичнэ үү"/> 
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="personPhone" value="Утасны дугаар" />
              </div>
              <TextInput id="personPhone" placeholder="Утасны дугаар"/>
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="nationality" value="Иргэншил" />
              </div>
              <TextInput id="nationality" placeholder="Халх, Дарьганга гэх мэт"/>
            </div>
          </div>
          

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="country" value="Улс" />
              </div>
              <TextInput id="country" placeholder="Монгол"/> 
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="customerCode" value="Хэрэглэгчийн код" />
              </div>
              <TextInput id="customerCode" placeholder="Хэрэглэгчийн кодоор бүх үйлчилгээ, засвараа харах боломжтой"/>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="historyId" value="Харилцагчийн түүх" />
              </div>
              <TextInput id="historyId" placeholder="Хэрэглэгчийн кодтой адилхан оруулахад болно"/> 
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="confirmFlag" value="Зөвшөөрсөн эсэх" />
              </div>
              <TextInput id="confirmFlag" placeholder="Үгүй, Тийм"/>
            </div>
          </div>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} className="bg-gray-400">
          Буцах
        </Button>
        <Button 
        // onClick={handleSubmit(onSubmit)} 
        className="bg-orange-500">
          Хадгалах
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  // const { data: customerList } = useQuery("getCustomers", () =>
  //   getCustomer({
  //     lastname: searchParams.get("lastname") || "",
  //   })
  // );
  // const { data: vehicleMakeModels } = useQuery(
  //   "getVehicleMakeModels",() => getVehicleMakeModels({
  //     makeId: searchParams.get("makeId") || "",
  //   })
  // );
  // const { data: garageCustomerVehicles } = useQuery(
  //   "getGarageCustomerVehicles",
  //   getGarageCustomerVehicles
  // );
  // const lastnameRef = useRef<HTMLInputElement>(null);
  // const makeIdRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (lastnameRef.current) {
  //     lastnameRef.current.value = searchParams.get("lastname") || "";
  //   }
  // }, []);
  // useEffect(() => {
  //   if (makeIdRef.current) {
  //     makeIdRef.current.value = searchParams.get("makeId") || "";
  //   }
  // }, []);

  // async function getCustomer(params: { lastname: string }) {
  //   const response = axiosClient.get(
  //     `/garage-customer-owners?lastname=${params.lastname}`
  //   );
  //   return (await response).data;
  // }

  // async function getVehicleMakeModels(params: { makeId : string }) {
  //   const response = await axiosClient.get(
  //     `/vehicle_make_models?makeId=${params.makeId}`
  //     );
  //   return (await response).data;
  // }

  // async function getGarageCustomerVehicles() {
  //   const response = await axiosClient.get("/garage_customer_vehicles");
  //   return response.data as GarageCustomerVehicle;
  // }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-2 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-2 rounded-lg">
            <div className="flex justify-between mb-4">
              <h4 className="text-1xl">Харилцагчийн бүртгэл</h4>
              <div className="flex gap-4">
                <TextInput
                  id="search"
                  type="search"
                  placeholder="Улсын,арлын,утасны дугаараар хайх"
                />
                <Button className="bg-orange-500">Хайх</Button>
                <Button className="bg-orange-500" onClick={openModal}>
                  Харилцагч нэмэх
                </Button>
                <a href="/transport">
                  <Button className="bg-orange-500">
                    Тээврийн хэрэгсэл нэмэх
                  </Button>
                </a>
               
              </div>
            </div>

            {/* owner, vehicle search and details  */}

            <div className="grid grid-cols-2">
              <div className="p-2">
                <Card className="max-w-sm">
                  <h5 className="text-1xl">Харилцагчийн жагсаалт</h5>
                  <form action="" className="flex gap-4">
                    <TextInput
                      type="search"
                      name="lastname"
                      placeholder=" Хэрэглэгч хайх"
                      // ref={lastnameRef}
                    />
                    <Button type="submit" className="bg-orange-500">
                      Хайх
                    </Button>
                  </form>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Овог</Table.HeadCell>
                      <Table.HeadCell>Нэр</Table.HeadCell>
                      <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                      <Table.HeadCell>Хэрэглэгчийн код</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                          <Table.Cell></Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                  </Table>
                </Card>
              </div>
              <div className="p-2">
                <Card className="max-w-sm">
                  <h5 className="text-1xl">Тээврийн хэрэгслийн жагсаалт</h5>
                  <div className="flex gap-4">
                    <TextInput
                      id="search"
                      name="makeId"
                      placeholder="Тээврийн хэрэгсэл хайх" 
                      //ref={makeIdRef}
                    />
                    <Button type="submit" className="bg-orange-500">Хайх</Button>
                  </div>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Марк</Table.HeadCell>
                      <Table.HeadCell>Марк нэр</Table.HeadCell>
                      <Table.HeadCell>Машины нэр</Table.HeadCell>
                      <Table.HeadCell>Машины төрөл</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      
                          <Table.Row>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                          </Table.Row>
                     
                    </Table.Body>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-2">
            <Card>
              <h5 className="text-1xl">Автомашины дэлгэрэнгүй</h5>
              <div className="flex gap-4">
                <TextInput
                  id="search"
                  type="search"
                  placeholder="Автомашин хайх"
                />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
              <a href="/zaswar_service">
                <Button className="bg-orange-500">Засвар эхлүүлэх</Button>
              </a>
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>Эзэмшигчийн нэр</Table.HeadCell>
                  <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                  <Table.HeadCell>Машины нэр</Table.HeadCell>
                  <Table.HeadCell>Марк</Table.HeadCell>
                  <Table.HeadCell>Өнгө</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </div>
        </div>
      </div>
      <CustomerModal showModal={showModal} closeModal={closeModal} />
    </Layout>
  );
};

export default Customer;
