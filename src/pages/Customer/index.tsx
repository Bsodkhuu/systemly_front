import React, { FC, useEffect, useRef } from "react";
import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Select,
} from "flowbite-react";
import Layout from "../../components/layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { useSearchParams } from "react-router-dom";
import { Address, Person, PersonPhone, PersonVehicle, Vehicle } from "../API";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const CustomerModal: FC<ModalProps> = ({ showModal, closeModal }) => {
  const { register, handleSubmit } = useForm<Person>();
  const { mutateAsync } = useMutation("createCustomer", createCustomer);
  const { data: phoneData } = useQuery("get_phones", getPhoneNumbers);
  const { data: addressData } = useQuery("get_addresses", getAddresses);

  async function createCustomer(values: Person) {
    const response = await axiosClient.post("/persons", {
      ...values,
    });
    return response.data;
  }

  async function getPhoneNumbers() {
    const response = await axiosClient.get("/person-phones");
    return response.data as PersonPhone[];
  }

  async function getAddresses() {
    const response = await axiosClient.get("/addresses");
    return response.data as Address[];
  }

  async function onSubmit(values: Person) {
    await mutateAsync(values);
    closeModal();
  }

  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>Харилцагч нэмэх</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex overflow-y-auto flex-col gap-4 max-h-96"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="firstName" value="Овог" />
              </div>
              <TextInput
                id="firstName"
                {...register("firstName")}
                placeholder="Овогоо бичнэ үү"
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="lastName" value="Нэр" />
              </div>
              <TextInput
                id="lastName"
                {...register("lastName")}
                placeholder="Нэрээ бичнэ үү"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="birthdate" value="Төрсөн өдөр" />
              </div>
              <TextInput
                type="date"
                id="birthdate"
                {...register("birthdate")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="registerId" value="Регистрийн дугаар" />
              </div>
              <TextInput
                id="registerId"
                {...register("registerId")}
                placeholder="Регистрийн дугаар бичнэ үү"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="gender" value="Хүйс" />
              </div>
              <TextInput
                type="text"
                id="gender"
                {...register("gender")}
                placeholder="Хүйс "
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="familyName" value="Гэр бүлийн байдал" />
              </div>
              <TextInput
                type="text"
                id="familyName"
                placeholder=""
                {...register("familyName")}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="email" value="Имэйл" />
              </div>
              <TextInput
                id="email"
                placeholder="example@gmail.com гэж бичнэ үү"
                {...register("email")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="phoneId" value="Утасны дугаар" />
              </div>
              <Select
                id="phoneId"
                placeholder="Утасны дугаар"
                {...register("phoneId")}
              >
                {phoneData?.map((i) => (
                  <option key={`phone_${i.id}`} value={i.id}>
                    {i.phone}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="country" value="Улс" />
              </div>
              <TextInput
                id="country"
                placeholder="Монгол"
                {...register("country")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="customerCode" value="Хэрэглэгчийн код" />
              </div>
              <TextInput
                id="customerCode"
                placeholder="Хэрэглэгчийн кодоор бүх үйлчилгээ, засвараа харах боломжтой"
                {...register("customerCode")}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="historyId" value="Харилцагчийн түүх" />
              </div>
              <TextInput
                id="historyId"
                placeholder="Хэрэглэгчийн кодтой адилхан оруулахад болно"
                {...register("historyId")}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="address" value="Хаяг" />
              </div>
              <Select
                id="address"
                {...register("addressId")}
                placeholder="Хаягаа дэлгэрэнгүй бичнэ үү"
              >
                {addressData?.map((i) => (
                  <option key={`address_${i.id}`} value={i.id}>
                    {i.addressDetail}
                  </option>
                ))}
              </Select>
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="activeFlag" value="Идэвхтэй эсэх" />
              </div>
              <TextInput
                type="text"
                id="activeFlag"
                {...register("activeFlag")}
                placeholder="Идэвхтэй эсэх"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="deleteFlag" value="Засвар хийсэн утга" />
              </div>
              <TextInput
                id="deleteFlag"
                placeholder="Засвар хийсэн утга"
                {...register("deleteFlag")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="insertUser" value="Үүсгэсэн хэрэглэгч" />
              </div>
              <TextInput
                id="insertUser"
                placeholder="Жишээ нь: 1"
                {...register("insertUser")}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="updateUser" value="Өөрчлөлт хийсэн хэрэглэгч" />
              </div>
              <TextInput
                id="updateUser"
                placeholder="Жишээ нь: 1"
                {...register("updateUser")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="deleteDate" value="Засвар хийсэн он сар" />
              </div>
              <TextInput
                id="deleteDate"
                type="date"
                {...register("deleteDate")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="deleteUser" value="Засвар хийсэн хэрэглэгч" />
              </div>
              <TextInput
                id="deleteUser"
                placeholder="Жишээ нь: 1"
                {...register("deleteUser")}
              />
            </div>
            <div className="w-1/2">
              <div className="block mb-2">
                <Label htmlFor="confirmFlag" value="Зөвшөөрсөн эсэх" />
              </div>
              <TextInput
                id="confirmFlag"
                placeholder="Тийм, Үгүй"
                {...register("confirmFlag")}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} className="bg-gray-400">
          Буцах
        </Button>
        <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">
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
      lastname: searchParams.get("lastname") || "",
    })
  );

  const lastnameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (lastnameRef.current) {
      lastnameRef.current.value = searchParams.get("lastname") || "";
    }
  }, []);

  async function getCustomer(params: { lastname: string }) {
    const response = axiosClient.get(`/persons?lastname=${params.lastname}`);
    return (await response).data;
  }

  const { data: vehicle } = useQuery("getVehicle", getVehicle);

  async function getVehicle() {
    const response = await axiosClient.get("/vehicles");
    return response.data as Vehicle[];
  }

  const { data: personVehicle } = useQuery(
    "getPersonVehicle",
    getPersonVehicle
  );

  async function getPersonVehicle() {
    const response = await axiosClient.get("/person-vehicles");
    return response.data as PersonVehicle[];
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Layout>
      <div className="gap-4 md:grid md:grid-cols-3">
        <div className="p-2 bg-gray-200 md:col-span-2 md:h-screen">
          <div className="p-2 bg-white rounded-lg">
            <div className="justify-between mb-4 space-y-2 md:flex md:space-y-0">
              <h4 className="text-1xl">Харилцагчийн бүртгэл</h4>
              <div className="gap-4 space-y-2 md:flex md:space-y-0">
                <div className="flex justify-between items-center space-x-3 md:flex-none md:justify-normal">
                  <div className="w-[70%]">
                    <TextInput
                      id="search"
                      type="search"
                      placeholder="Улсын,арлын,утасны дугаараар хайх"
                    />
                  </div>
                  <Button className="bg-orange-500 w-[30%]">
                    {" "}
                    <p className="text-[11px]">Хайх</p>
                  </Button>
                </div>
                <div className="flex justify-between space-x-2">
                  <div className="">
                    <Button className="bg-orange-500" onClick={openModal}>
                      <p className="text-[11px]">Харилцагч нэмэх</p>
                    </Button>
                  </div>
                  <div>
                    <a href="/transport">
                      <Button className="bg-orange-500">
                        <p className="text-[11px]">Тээврийн хэрэгсэл нэмэх</p>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className="p-2 w-full">
                <Card className="md:w-full">
                  <h5 className="text-1xl">Харилцагчийн жагсаалт</h5>
                  <form action="" className="flex gap-4">
                    <TextInput
                      type="search"
                      name="lastname"
                      placeholder=" Хэрэглэгч хайх"
                      ref={lastnameRef}
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
                      <Table.HeadCell>Хаяг</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {customerList?.map(
                        (customerList: Person, index: number) => (
                          <Table.Row key={index}>
                            <Table.Cell>{customerList.firstName}</Table.Cell>
                            <Table.Cell>{customerList.lastName}</Table.Cell>
                            <Table.Cell>
                              {customerList.personPhone.phone}
                            </Table.Cell>
                            <Table.Cell>{customerList.customerCode}</Table.Cell>
                            <Table.Cell>
                              {customerList.address.addressDetail}
                            </Table.Cell>
                          </Table.Row>
                        )
                      )}
                    </Table.Body>
                  </Table>
                </Card>
              </div>
              <div className="p-2">
                <Card className="md:w-full">
                  <h5 className="text-1xl">Тээврийн хэрэгслийн жагсаалт</h5>
                  <div className="flex gap-4">
                    <TextInput
                      id="search"
                      name="makeId"
                      placeholder="Тээврийн хэрэгсэл хайх"
                      //ref={makeIdRef}
                    />
                    <Button type="submit" className="bg-orange-500">
                      Хайх
                    </Button>
                  </div>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Марк</Table.HeadCell>
                      <Table.HeadCell>Марк нэр</Table.HeadCell>
                      <Table.HeadCell>Машины нэр</Table.HeadCell>
                      <Table.HeadCell>Машины төрөл</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {vehicle?.map((vehicle: Vehicle, index: number) => (
                        <Table.Row key={index}>
                          <Table.Cell>{vehicle.vehicleMark}</Table.Cell>
                          <Table.Cell>{vehicle.vehicleNameEng}</Table.Cell>
                          <Table.Cell>{vehicle.vehicleName}</Table.Cell>
                          <Table.Cell>{vehicle.vehicleType}</Table.Cell>
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
              <h4 className="text-1xl">Автомашины дэлгэрэнгүй бүртгэл</h4>
              <div className="flex gap-4">
                <TextInput
                  id="search"
                  type="search"
                  placeholder="Автомашин хайх"/>
                <Button className="bg-orange-500">Хайх</Button>
                <a href="/personVehicle" className="text-1xl"><Button className="bg-orange-500">Автомашины бүртгэл</Button></a>
              </div>
              <a href="/zaswar_service">
                <Button className="bg-orange-500">Засвар эхлүүлэх</Button>
              </a>
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>Эзэмшигчийн нэр</Table.HeadCell>
                  <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                  <Table.HeadCell>Машины нэр</Table.HeadCell>
                  <Table.HeadCell>Өнгө</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {personVehicle?.map(
                    (personVehicle: PersonVehicle, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>{personVehicle.person.lastName}</Table.Cell>
                        <Table.Cell>{personVehicle.vehicleNumber}</Table.Cell>
                        <Table.Cell>
                          {personVehicle.vehicle.vehicleName}
                        </Table.Cell>
                        <Table.Cell>{personVehicle.vehicleColor}</Table.Cell>
                      </Table.Row>
                    )
                  )}
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
