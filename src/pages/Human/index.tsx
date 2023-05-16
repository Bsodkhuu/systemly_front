import Layout from "../../components/layout";
import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Checkbox,
  Select,
  FileInput,
} from "flowbite-react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
import { Branch, Employee, Person, PersonPhone, ServiceEmployee, ServiceOrder } from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Human = () => {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  const { data: serviceOrder } = useQuery("getServiceOrder", getServiceOrder);

  async function getServiceOrder() {
    const response = await axiosClient.get("/service-orders");
    return response.data as ServiceOrder[];
  }

  const { data: serviceEmployee } = useQuery("getServiceEmployee", getServiceEmployee);

  async function getServiceEmployee() {
    const response = await axiosClient.get("/service-employees");
    return response.data as ServiceEmployee[];
  }

  const { data: employee} = useQuery("getEmployee", getEmployee);

  async function getEmployee() {
    const response = await axiosClient.get("/employees");
    return response.data as Employee[];
  }

  const { register, handleSubmit } = useForm<Employee>();
  const { mutateAsync } = useMutation("createEmployee", createEmployee);
  
  const { data: personData } = useQuery("getPerson", getPerson);
  const { data: branchData } = useQuery("getBranch", getBranch);
  const { data: phoneData } = useQuery("getPhone", getPhone);

  async function getPhone() {
    const response = await axiosClient.get("/");
    return response.data as PersonPhone[];
  }

  async function getBranch() {
    const response = await axiosClient.get("/branch");
    return response.data as Branch[];
  }

  async function getPerson() {
    const response = await axiosClient.get("/persons");
    return response.data as Person[];
  }

  async function createEmployee(values: Employee) {
    const response = await axiosClient.post("/employees", values);
    return response.data;
  }

  async function onSubmit(values: Employee) {
    await mutateAsync(values);
  }

  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Ажилчид нэмэх</Modal.Header>
        <Modal.Body>
          <form
           onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="personId" value="Ажилтны нэр" />
                </div>
                <Select id="personId" placeholder="Ажилтны нэр">
                  </Select>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="ovog" value="Овог" />
                </div>
                <TextInput id="ovog"  />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="position_name" value="Албан тушаал" />
                </div>
                <TextInput id="position_name"  />
               </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Утасны дугаар" />
                </div>
                <TextInput id="phone"  />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Имэйл" />
                </div>
                <TextInput type="text" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Ажилтны зураг"/>
                </div>
                <TextInput type="text"/>
              </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="jobDate" value="Ажилд орсон огноо "/>
                  </div>
                  {/* <FileInput/> */}
                  <TextInput type="text" />
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
      <div className="p-4 bg-gray-200 md:h-screen w-full space-y-3">
        <div className="bg-white p-6 rounded-lg">
          <div className="md:flex justify-between mb-4 space-y-3">
            <div className="text-xl">Ажилчид</div>
            <div className="md:flex gap-4">
              <TextInput id="startDate" type="date" />
              -
              <TextInput id="endDate" type="date" />
              <div className="flex gap-3 mt-3 justify-end md:justify-normal ">  
              <Button className="bg-orange-500">Хайх</Button>
              <a href="/branch">
                <Button className="bg-orange-500">
                Байгууллага бүртгэх
                </Button>
              </a>
              <Button className="bg-orange-500" onClick={openModal}>
                Ажилчид нэмэх
              </Button>
            </div>
            </div>
          </div> 
          <div className="md:grid grid-cols-3">
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Ажилчдын жагсаалт</h4>
                <div className="flex gap-4">
                  <a href="#">Идэвхитэй</a>
                  <a href="/employee_history">Түүх</a>
                </div>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Ажилтны зураг</Table.HeadCell>
                    <Table.HeadCell>Овог</Table.HeadCell>
                    <Table.HeadCell>Нэр</Table.HeadCell>
                    <Table.HeadCell>Байгууллага</Table.HeadCell>
                    <Table.HeadCell>Ажилтны код</Table.HeadCell>
                    <Table.HeadCell>Мэргэжил</Table.HeadCell>
                    <Table.HeadCell>Ажилд орсон огноо</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    {employee?.map((employee: Employee, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>{employee.filePath}</Table.Cell>
                        <Table.Cell>{employee.person.firstName}</Table.Cell>
                        <Table.Cell>{employee.person.lastName}</Table.Cell>
                        <Table.Cell>{employee.branch.branchName}</Table.Cell>
                        <Table.Cell>{employee.person.customerCode}</Table.Cell>
                        <Table.Cell>{employee.positionId}</Table.Cell>
                        <Table.Cell>{employee.jobStart}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div> 
            <div className="p-4">
              <Card>
              <div className="md:flex gap-4">
              <a href="/serviceOrder" className="text-1xl">
              <Button className="bg-orange-500">Хийсэн үйлчилгээний бүртгэл</Button></a>
              </div>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Эзэмшигчийн нэр</Table.HeadCell>
                    <Table.HeadCell>Байгууллага /Branch/</Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                    <Table.HeadCell>Үнэ</Table.HeadCell>
                    <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                    <Table.HeadCell>Төлөх дүн</Table.HeadCell>
                    <Table.HeadCell>Төлсөн дүн</Table.HeadCell>
                    <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                      {serviceOrder?.map((serviceOrder: ServiceOrder, index: number) => (
                        <Table.Row key={index}>
                          
                          <Table.Cell className="space-2xl">
                            <FontAwesomeIcon icon={faPenToSquare}/>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
          </div>
        </div>
        <div className="md:p-4">
          <Card>
            <h4 className="text-1xl">Үйлчилгээ хийсэн механикч</h4>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Үйлчилгээ хийсэн механикч</Table.HeadCell>
                <Table.HeadCell>Нийт</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {serviceEmployee?.map((serviceEmployee: ServiceEmployee, index: number) => (
                  <Table.Row key={index}> 
                  <Table.Cell>{serviceEmployee.employeeId}</Table.Cell>
                  <Table.Cell>{serviceEmployee.serviceOrder.paidAmount}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default Human;
