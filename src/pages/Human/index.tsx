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
import { Branch, Employee, Person, PersonPhone, Position, ServiceEmployee, ServiceOrder, ServiceOrderProduct } from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
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
  
  const { data: branchData } = useQuery("getBranch", getBranch);
  const { data: phoneData } = useQuery("getPhone", getPhone);
  const { data: positionData }  = useQuery("getPosition", getPosition);
  const { data: serviceOrderProduct } = useQuery("getOrderProduct", getOrderProduct);

  async function getOrderProduct() {
    const response = await axiosClient.get("/service-order-product");
    return response.data as ServiceOrderProduct[];
  }
  async function getPosition() {
    const response = await axiosClient.get("/positions");
    return response.data as Position[];
  }
  async function getPhone() {
    const response = await axiosClient.get("/person-phones");
    return response.data as PersonPhone[];
  }

  async function getBranch() {
    const response = await axiosClient.get("/branch");
    return response.data as Branch[];
  }

  async function createEmployee(values: Employee) {
    const response = await axiosClient.post("/employees", values);
    return response.data;
  }

  async function onSubmit(values: Employee) {
    await mutateAsync(values);
    closeModal();
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
                  <Label htmlFor="lastName" value="Ажилтны нэр" />
                </div>
                <TextInput id="lastName" placeholder="Ажилтны нэр" required {...register("lastName")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="Овог" />
                </div>
                <TextInput id="firstName" placeholder="Овог" {...register("firstName")} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="registerId" value="Регистрийн дугаар" />
                </div>
                <TextInput id="registerId" placeholder="Регистрийн дугаар" required {...register("registerId")}/>
               </div>
               <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="positionId" value="Албан тушаал" />
                </div>
                <Select id="positionId" placeholder="Албан тушаал" {...register("positionId")}>
                    {positionData?.map((i) => (
                      <option key={`position_${i.id}`} value={i.id}>
                        {i.positionName}
                      </option>
                    ))}
                  </Select>
               </div>
            </div>
            <div className="flex gap-4">
             <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="branchId" value="Байгууллагын нэр"/>
                  </div>
                  <Select id="branchId" placeholder="Байгууллагын нэр" {...register("branchId")}>
                    {branchData?.map((i) => (
                      <option key={`branch_${i.id}`} value={i.id}>
                        {i.branchName}
                      </option>
                    ))}
                  </Select>
                </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Имэйл" />
                </div>
                <TextInput id="email" placeholder="Имэйл" {...register("email")} />
                
              </div>
              
              </div>
              <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="filePath" value="Ажилтны зураг"/>
                </div>
                <TextInput id="filePath" placeholder="Ажилтны зураг" required {...register("filePath")}/>
              </div>
               <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phoneId" value="Утасны дугаар" />
                </div>
                <Select id="phoneId" placeholder="Утасны дугаар" {...register("phoneId")}>
                {phoneData?.map((i) => (
                  <option key={`personPhone_${i.id}`} value={i.id}>
                    {i.phone}
                  </option> 
                ))}
              </Select>
              </div>
               
            </div>
            <div className="flex gap-4">
                <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="jobStart" value="Ажилд орсон огноо "/>
                      </div>
                      <TextInput type="date" id="jobStart" {...register("jobStart")}/>
                    </div> 
                <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="activeFlag"
                            value="Идэвхтэй эсэх"/>
                        </div>
                        <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                    </div>
              </div>
                    <div className="flex gap-4">
                       <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="deleteFlag"
                            value="Засвар хийсэн утга"/>
                        </div>
                        <TextInput
                        id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block">
                        <Label
                            htmlFor="deleteDate"
                            value="Засвар хийсэн он сар"/>
                        </div>
                        <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
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
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
              <Button className="bg-orange-500" onClick={openModal}>
                Ажилчид нэмэх
              </Button>
            </div>
          </div> 
          <div className="md:grid grid-cols-3">
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Ажилчдын жагсаалт</h4>
                <div className="flex gap-4">
                  <a href="#"><Button className="bg-orange-500">Ажиллаж байгаа</Button></a>
                  <a href="/employee_history">
                    <Button className="bg-orange-500">Ажлаас гарсан</Button>
                  </a>
                 
                </div>
                <Label htmlFor="" value="Албан тушаал" />
                <Select>
                    {positionData?.map((i) => (
                      <option value={i.id}>
                        {i.positionName}
                      </option>
                    ))}
                  </Select>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Ажилтны зураг</Table.HeadCell>
                    <Table.HeadCell>Нэр</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    {employee?.map((employee: Employee, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>{employee.filePath}</Table.Cell>
                        <Table.Cell>{employee.lastName}</Table.Cell>
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
                    <Table.HeadCell>Засварын хуудсын дугаар</Table.HeadCell>
                    <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                    <Table.HeadCell>Машин</Table.HeadCell>
                    <Table.HeadCell>Огноо</Table.HeadCell>
                    
                  </Table.Head>
                  <Table.Body>
                      {serviceOrder?.map((serviceOrder: ServiceOrder, index: number) => (
                        <Table.Row key={index}>
                          <Table.Cell>{serviceOrder.zaswarNumber}</Table.Cell>
                          <Table.Cell>{serviceOrder.personVehicle.vehicleNumber}</Table.Cell>
                          <Table.Cell>{serviceOrder.vehicle.vehicleName}</Table.Cell>
                          <Table.Cell>{serviceOrder.serviceDate}</Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>

            <div className="md:p-4">
            <Card>
            <a href="/serviceEmployee" className="text-1xl">
              <Button className="bg-orange-500">Үйлчилгээ хийсэн механикч</Button></a>
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
        </div>
        <div className="md:p-4">
         <Card>
          <div className="md:flex gap-4">
            <a href="/details" className="text-1xl">
              <Button className="bg-orange-500">Үйлчилгээний дэлгэрэнгүй</Button>
            </a>
          </div>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Үйлчилгээ</Table.HeadCell>
                <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                <Table.HeadCell>Механикч</Table.HeadCell>
                <Table.HeadCell>Хямдрал</Table.HeadCell>
                <Table.HeadCell>Нийт</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {serviceOrderProduct?.map((serviceOrderProduct: ServiceOrderProduct, index: number) => (
                 <Table.Row key={index}>
                   <Table.Cell>{serviceOrderProduct.service.serviceName}</Table.Cell>
                   <Table.Cell>{serviceOrderProduct.productCnt}</Table.Cell>
                   <Table.Cell>{serviceOrderProduct.service.price}</Table.Cell>
                   <Table.Cell>{serviceOrderProduct.serviceEmployee.employeeId}</Table.Cell>
                   <Table.Cell>{serviceOrderProduct.serviceOrder.payPrice}</Table.Cell>
                   <Table.Cell></Table.Cell>
                   <Table.Cell></Table.Cell>
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
