import React, {useRef} from "react";
import { TextInput, Button, Table, Card } from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

import { useSearchParams } from "react-router-dom";
import { ServiceAppointment } from "../../API";

const Service = () => {
  const [searchParams] = useSearchParams();

  const { data: serviceAppointment } = useQuery("getServiceAppointment",()=> 
    getServiceAppointment({
      startTime: searchParams.get("startTime") || "",
    })
  );

  const startTimeRef = useRef<HTMLInputElement>(null);

  async function getServiceAppointment(params: { startTime: string }) {
    const response = axiosClient.get(`/service_appointments?startTime=${params.startTime}`);
    return (await response).data;
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээний цаг авах</h4>
            <div className="flex gap-4">
              <TextInput id="date" type="date" />
              <Button className="bg-orange-500">Хайх</Button>
            </div>
          </div>
          {/* calendar */}
          <div className="grid grid-cols-2">
            <div className="p-4">
              <Card className="max-w-sm">
                <h5 className="text-1xl">Цаг авсан жагсаалт</h5>
                <div className="flex gap-4">
                  <TextInput id="search" type="search" placeholder="Хайх" />
                  <Button className="bg-orange-500">Хайх</Button>
                </div>
                <Table>
                  <Table.Head className="uppercase">
                    {/* <Table.HeadCell></Table.HeadCell> */}
                    <Table.HeadCell>Нэр</Table.HeadCell>
                    <Table.HeadCell>Үйлчилгээний төрөл</Table.HeadCell>
                    <Table.HeadCell>Цаг авсан</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>{serviceAppointment.startTime}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
           
          </div>
          <div className="p-4">
            <Card className="max-w-sm">
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>Хуваарь</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                    <Table.Row key={index}>
                      <Table.Cell>{serviceAppointment.startTime}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;
