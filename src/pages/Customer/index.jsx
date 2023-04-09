import { Button, Table, Label, Modal, Card, TextInput } from "flowbite-react";
import Layout from "../../components/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

const CustomerModal = ({ showModal, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useMutation("createCustomer", createCustomer);

  async function createCustomer(values) {
    const response = await axiosClient.post("/garage-customer-owners", values);
    return response.data;
  }

  async function onSubmit(values) {
    await mutateAsync(values);
    closeModal();
  }

  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Харилцагч нэмэх</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-h-96 overflow-y-auto"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="Овог" />
              </div>
              <TextInput id="firstName" {...register("firstName")} />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Нэр" />
              </div>
              <TextInput id="lastName" {...register("lastName")} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Утасны дугаар" />
              </div>
              <TextInput id="phone" {...register("phoneNumber")} />
            </div>
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Имэйл" />
              </div>
              <TextInput id="email" {...register("email")} />
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

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const { data: customerList } = useQuery("getCustomers", () =>
    getCustomer({
      lastname: searchParams.get("lastname"),
    })
  );
  const { data: vehicleMakeModels } = useQuery(
    "getVehicleMakeModels",
    getVehicleMakeModels
  );
  const { data: garageCustomerVehicles } = useQuery(
    "getGarageCustomerVehicles",
    getGarageCustomerVehicles
  );
  const lastnameRef = useRef(null);

  useEffect(() => {
    lastnameRef.current.value = searchParams.get("lastname");
  }, []);

  async function getCustomer(params) {
    const response = axiosClient.get(
      `/garage-customer-owners?lastname=${params.lastname}`
    );
    return (await response).data;
  }

  async function getVehicleMakeModels() {
    const response = await axiosClient.get("/vehicle_make_models");
    return response.data;
  }

  async function getGarageCustomerVehicles() {
    const response = await axiosClient.get("/garage_customer_vehicles");
    return response.data;
  }

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
                <Button className="bg-blue-500">Хайх</Button>
                <Button className="bg-blue-500" onClick={openModal}>
                  Харилцагч нэмэх
                </Button>
                <a href="/transport">
                  <Button className="bg-blue-500">
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
                      ref={lastnameRef}
                    />
                    <Button type="submit" className="bg-blue-500">
                      Хайх
                    </Button>
                  </form>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Овог</Table.HeadCell>
                      <Table.HeadCell>Нэр</Table.HeadCell>
                      <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {customerList?.map((customer, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{customer.firstName}</Table.Cell>
                          <Table.Cell>{customer.lastName}</Table.Cell>
                          <Table.Cell>{customer.phoneNumber}</Table.Cell>
                        </Table.Row>
                      ))}
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
                      type="search"
                      placeholder="Тээврийн хэрэгсэл хайх"
                    />
                    <Button className="bg-blue-500">Хайх</Button>
                  </div>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Загвар</Table.HeadCell>
                      <Table.HeadCell>Модел</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {vehicleMakeModels?.map((vehicleMake, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{vehicleMake.makeId}</Table.Cell>
                          <Table.Cell>{vehicleMake.modelName}</Table.Cell>
                        </Table.Row>
                      ))}
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
                <Button className="bg-blue-500">Хайх</Button>
              </div>
              <a href="/zaswar_service">
                <Button className="bg-blue-500">Засвар эхлүүлэх</Button>
              </a>
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>Vin дугаар</Table.HeadCell>
                  <Table.HeadCell>Төрөл</Table.HeadCell>
                  <Table.HeadCell>Үйлдвэрлэсэн он</Table.HeadCell>
                  <Table.HeadCell>Импортлосон он</Table.HeadCell>
                  <Table.HeadCell>Өнгө</Table.HeadCell>
                  <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {garageCustomerVehicles?.map((customerVehicles, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{customerVehicles.vinNumber}</Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>
                        {customerVehicles.manufacturedYear}
                      </Table.Cell>
                      <Table.Cell>{customerVehicles.importedYear}</Table.Cell>
                      <Table.Cell>{customerVehicles.color.mn}</Table.Cell>
                      <Table.Cell>
                        {customerVehicles.licensePlateNumber}
                      </Table.Cell>
                    </Table.Row>
                  ))}
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
