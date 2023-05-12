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
      <div className="p-4 bg-gray-200 md:h-screen w-full ">
        <div className="bg-white md:p-6 p-4 rounded-lg space-y-4">
          <div className="md:flex justify-between md:mb-4 space-y-2 ">
            <h4 className="text-md">Үйлчилгээний цаг авах</h4>
            <div className="flex gap-4">
              <TextInput id="date" type="date" />
              <Button className="bg-orange-500">Хайх</Button>
            </div>
          </div>
          
          <div className="md:p-4">
            <Card className="max-w-sm">
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">Хайх</Button>
              </div>
              <Table className="hidden md:block">
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
              <div className="md:hidden">
              {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                    <div className="w-full bg-gray-200 rounded-md text-[11px] flex">
                    <div className="w-full p-2 space-y-2">
                          <div>Хуваарь</div>                    
                    </div>
                      <div className="w-full p-2 text-right" >
                      <div>{serviceAppointment.startTime}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;
