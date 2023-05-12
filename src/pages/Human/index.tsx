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
import { ServiceEmployee, ServiceOrder } from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";



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
  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Ажилчид нэмэх</Modal.Header>
        <Modal.Body>
          <form
           // onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div>
              
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Нэр" />
                </div>
                <TextInput id="name"  />
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
          <Button  className="bg-orange-500">
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Ажилчид</h4>

            <div className="flex gap-4">
              <TextInput id="startDate" type="date" />
              -
              <TextInput id="endDate" type="date" />
              <Button className="bg-orange-500">Хайх</Button>
              <Button className="bg-orange-500" onClick={openModal}>
                Ажилчид нэмэх
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Ажилчдын жагсаалт</h4>
                <div className="flex gap-4">
                  <a href="#">Идэвхитэй</a>
                  <a href="/employee_history">Түүх</a>
                  
                </div>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>
                      <Checkbox />
                    </Table.HeadCell>

                    <Table.HeadCell>Овог</Table.HeadCell>
                    <Table.HeadCell>Нэр</Table.HeadCell>
                    <Table.HeadCell>Мэргэжил</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    
                  </Table.Body>
                </Table>
              </Card>
            </div>
            <div className="p-4">
              <Card>
                <h4 className="text-1xl">Хийгдсэн үйлчилгээний бүртгэл</h4>
                <Table>
                  <Table.Head className="uppercase">
                    <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                    <Table.HeadCell>Үнэ</Table.HeadCell>
                    <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                    <Table.HeadCell>Төлөх дүн</Table.HeadCell>
                    <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                      {serviceOrder?.map((serviceOrder: ServiceOrder, index: number) => (
                        <Table.Row key={index}>
                          <Table.Cell>{serviceOrder.service.serviceName}</Table.Cell>
                          <Table.Cell>{serviceOrder.service.price}</Table.Cell>
                          <Table.Cell>{serviceOrder.personVehicle.vehicleNumber}</Table.Cell>
                          <Table.Cell>{serviceOrder.payPrice}</Table.Cell>
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
        <div className="p-4">
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
