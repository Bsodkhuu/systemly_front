import React, { useEffect, useRef, useState } from "react";
import { TextInput, Button, Table, Card } from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Calendar, Badge, DatePicker } from "antd";
import { useSearchParams } from "react-router-dom";
import { ServiceAppointment } from "../../API";
import { modal } from "../../../components/ant/Modal";

import BuhDelgerenguiTsagKharakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/buhDelgerenguiTsagKharakh";
import DelgerenguiKharakh from "../../../components/pageComponent/modal/DelgerenguiKharakh";
import TsagZakhialakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/TsagZakhialakh";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
      ];
      break;
    case 10:
      listData = [
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
      ];
      break;
    case 15:
      listData = [
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
        {
          turul: "warning",
          avsantsag: "08:30",
          khereglegchiinKod: "6969",
          khereglegchiinNer: "Батаа",
          uilchilgeeniiTurul: "Tos soliolakh",
          utas: "88221188",
          mechanic: "Батука",
          mashinDugaar: "1028УБА",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value: { month: () => number }) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Service = () => {
  const ref = useRef(null);
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            onClick={() => ref.current.khaaya()}>
            Хаах
          </Button>
        </div>
        {/* <div>
          <Button
            className="bg-orange-500 hover:bg-white hover:text-black hover:ring hover:ring-gray-300  focus:outline-none focus:ring focus:ring-gray-300 "
            onClick={() => ref.current.khadgalya()}>
            Бүртгэл нэмэх
          </Button>
        </div> */}
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
            onClick={() => ref.current.khaaya()}>
            Хаах
          </Button>
        </div>
        {/* <div>
          <Button
            className="bg-orange-500 hover:bg-white hover:text-black hover:ring hover:ring-gray-300  focus:outline-none focus:ring focus:ring-gray-300 "
            onClick={() => ref.current.khadgalya()}>
            Бүртгэл нэмэх
          </Button>
        </div> */}
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
  const monthCellRender = (value: { month: () => number }) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  function tsagZakhialakh() {
    const footer = [
      <div className="flex justify-end space-x-3">
        <div>
          <Button
            className="bg-slate-500 hover:bg-white hover:text-black hover:ring hover:ring-orange-300 focus:outline-none focus:ring focus:ring-orange-300"
            onClick={() => ref.current.khaaya()}>
            Хаах
          </Button>
        </div>
        {/* <div>
          <Button
            className="bg-orange-500 hover:bg-white hover:text-black hover:ring hover:ring-gray-300  focus:outline-none focus:ring focus:ring-gray-300 "
            onClick={() => ref.current.khadgalya()}>
            Бүртгэл нэмэх
          </Button>
        </div> */}
      </div>,
    ];
    modal({
      title: "Дэлгэрэнгүй захиалга",
      content: (
        <TsagZakhialakh
          ref={ref}
          data={undefined}
          destroy={undefined}
          token={undefined}
          turul={undefined}
          onRefresh={undefined}
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
              {/* <TextInput id="date" type="date" />
              <Button className="bg-orange-500">Хайх</Button> */}
              <RangePicker />
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
              <div
              // className="md:grid md:grid-cols-2"
              >
                <div className="md:p-4">
                  <Card className="max-w-sm">
                    <h5 className="text-1xl">Цаг авсан жагсаалт</h5>
                    <div className="flex gap-4">
                      <TextInput id="search" type="search" placeholder="Хайх" />
                      <Button className="bg-orange-500">Хайх</Button>
                    </div>
                    {/* <div className="md:hidden sm:block">
                {serviceAppointment?.map((serviceAppointment: ServiceAppointment, index: number) => (
                     <div className="w-full bg-gray-200 rounded-md text-[11px] flex">
                     <div className="w-full p-2 space-y-2">
                           <div>Нэр</div>                    
                           <div>Үйлчилгээний төрөл</div>
                           <div>Цаг авсан</div>
                     </div>
                       <div className="w-full p-2 text-right" key={index}>
                       <div>{serviceAppointment.customer.lastName}</div>
                               <div>{serviceAppointment.serviceType.name}</div>
                               <div>{serviceAppointment.startTime}</div>
                       </div>
                     </div>
                    ))}
                    </div> */}
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
                              <Table.Cell></Table.Cell>
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
                className="text-[9px]"
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;
