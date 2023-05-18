import React, { useEffect, useRef, useState } from "react";
import { TextInput, Button, Table, Card } from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Calendar, Badge, DatePicker } from "antd";
import { useSearchParams } from "react-router-dom";
import { PersonVehicle, ServiceAppointment, Person, PersonPhone, Service, Work } from "../../API";
import { modal } from "../../../components/ant/Modal";
import DelgerenguiKharakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/TsagiinMedeelel";
import TsagZakhialakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/TsagZakhialakhModal";
import BuhDelgerenguiTsagKharakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/BukhTsagiinMedeelel";
import local from "antd/lib/date-picker/locale/mn_MN";

const VilchilgeeniTsag = () => {
  const ref = useRef([]);
  const [searchParams] = useSearchParams();
  const { RangePicker } = DatePicker;

  const { data: serviceAppointment } = useQuery("getServiceAppointment", () =>
    getServiceAppointment({
      startTime: searchParams.get("startTime") || "",
    })
  );

  const startTimeRef = useRef<HTMLInputElement>(null);

  async function getServiceAppointment(params: { startTime: string }) {
    const response = axiosClient.get(
      `/service_appointments?startTime=${params.startTime}`
    );
    return (await response).data;
  }
  function delgerenguiKharakh(item: {} | undefined) {
    const footer = [
      <div className="flex justify-end space-x-3">
        <div>
          <Button
            className="bg-slate-500 hover:bg-white hover:text-black hover:ring hover:ring-orange-300 focus:outline-none focus:ring focus:ring-orange-300"
            // onClick={() => ref.current.khaaya()}
>
            Хаах
          </Button>
        </div>
      </div>,
    ];
    modal({
      title: "Захиалгын дэлгэрэнгүй харах",
      content: (
        <DelgerenguiKharakh
          ref={ref}
          data={item}
          destroy={undefined}
          token={undefined}
          turul={undefined}
          onRefresh={undefined}
        />
      ),
      footer,
    });
  }
  function bukhDelgerenguiTsag(
    listData: {
      turul: string;
      avsantsag: string;
      khereglegchiinKod: string;
      khereglegchiinNer: string;
      uilchilgeeniiTurul: string;
      utas: string;
      mechanic: string;
      mashinDugaar: string;
    }[]
  ) {
    const footer = [
      <div className="flex justify-end space-x-3">
        <div>
          <Button
            className="bg-slate-500 hover:bg-white hover:text-black hover:ring hover:ring-orange-300 focus:outline-none focus:ring focus:ring-orange-300"
            // onClick={() => ref.current.khaaya()}
          >
            Хаах
          </Button>
        </div>
      </div>,
    ];
    modal({
      title: "Дэлгэрэнгүй захиалга",
      width: "80%",
      content: (
        <BuhDelgerenguiTsagKharakh
          ref={ref}
          data={listData}
          destroy={undefined}
          token={undefined}
          turul={undefined}
          onRefresh={undefined}
        />
      ),
      footer,
    });
  }
  

  const { data: personName } = useQuery("get_Name", getPersonName);
  const { data: vehicleData } = useQuery("get_Vehicle", getVehicle);
  const { data: phoneData } = useQuery("get_phones", getPhoneNumbers);
  const { data: personData } = useQuery("getPerson", getPerson);
  const { data: serviceData } = useQuery("getService", getService);
  

  
  async function getService() {
    const response = await axiosClient.get("/services");
    return response.data as Service[];
  }
  async function getPerson() {
    const response = await axiosClient.get("/persons");
    return response.data as Person[];
  }
  async function getPhoneNumbers() {
    const response = await axiosClient.get("/person-phones");
    return response.data as PersonPhone[];
  }

  async function getPersonName() {
    const response = await axiosClient.get("/persons");
    return response.data as Person[];
  }
  async function getVehicle() {
    const response = await axiosClient.get("/person-vehicles");
    return response.data as PersonVehicle[];
  }
  function tsagZakhialakh() {
    modal({
      title: "Цаг захиалга",
      content: (
        <TsagZakhialakh
          destroy={undefined}
          personName={personName}
          vehicleData={vehicleData}
          phoneData={phoneData}
          personData={personData}
          serviceData={serviceData}
        />
      ),
      footer: [],
    });
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 md:h-screen w-full ">
        <div className="bg-white md:p-6 p-4 rounded-lg space-y-4">
          <div className="md:flex justify-between md:mb-4 space-y-2">
            <h4 className="text-md">Үйлчилгээний цаг авах</h4>
            <div className="flex gap-4">
              
              <RangePicker locale={local} />
              <Button className="bg-orange-500">Хайх</Button>
              <Button
                className="bg-orange-500"
                onClick={() => {
                  return tsagZakhialakh();
                }}>
                Үйлчилгээний цаг авах
              </Button>
            </div>
          </div>
          {/* calendar */}
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div>
                <div className="md:p-4">
                  <Card className="max-w-sm">
                    <h5 className="text-1xl">Цаг авсан жагсаалт</h5>
                    <div className="flex gap-4">
                      <TextInput id="search" type="search" placeholder="Хайх" />
                      <Button className="bg-orange-500">Хайх</Button>
                    </div>
                    
                    <Table className="hidden md:block">
                      <Table.Head className="uppercase">
                        {/* <Table.HeadCell></Table.HeadCell> */}
                        <Table.HeadCell>Нэр</Table.HeadCell>
                        <Table.HeadCell>Үйлчилгээний төрөл</Table.HeadCell>
                        <Table.HeadCell>Цаг авсан</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {serviceAppointment?.map(
                          (
                            serviceAppointment: ServiceAppointment,
                            index: number
                          ) => (
                            <Table.Row key={index}>
                              <Table.Cell></Table.Cell>
                              <Table.Cell>{serviceAppointment.service.serviceName}</Table.Cell>
                              <Table.Cell>
                                {serviceAppointment.startTime}
                              </Table.Cell>
                            </Table.Row>
                          )
                        )}
                      </Table.Body>
                    </Table>
                  </Card>
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
                      {serviceAppointment?.map(
                        (
                          serviceAppointment: ServiceAppointment,
                          index: number
                        ) => (
                          <Table.Row key={index}>
                            <Table.Cell>
                              {serviceAppointment.startTime}
                            </Table.Cell>
                          </Table.Row>
                        )
                      )}
                    </Table.Body>
                  </Table>
                  <div className="md:hidden">
                    {serviceAppointment?.map(
                      (
                        serviceAppointment: ServiceAppointment,
                        index: number
                      ) => (
                        <div className="w-full bg-gray-200 rounded-md text-[11px] flex">
                          <div className="w-full p-2 space-y-2">
                            <div>Хуваарь</div>
                          </div>
                          <div className="w-full p-2 text-right">
                            <div>{serviceAppointment.startTime}</div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </Card>
              </div>
            </div>
            <div className="md:col-span-9 md:shadow-md  md:bg-red-500 md:block hidden ">
              <Calendar
                locale={local}
                className="text-[9px]"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default VilchilgeeniTsag;
