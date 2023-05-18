import React, { useEffect, useRef, useState } from "react";
import { TextInput, Button, Table, Card } from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Calendar, Badge, DatePicker } from "antd";
import { useSearchParams } from "react-router-dom";
import { ServiceAppointment } from "../../API";
import { modal } from "../../../components/ant/Modal";
import DelgerenguiKharakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/TsagiinMedeelel";
import TsagZakhialakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/TsagZakhialakhModal";
import BuhDelgerenguiTsagKharakh from "../../../components/pageComponent/uilchilgeeniiTsagKharakh/BukhTsagiinMedeelel";
import local from "antd/lib/date-picker/locale/mn_MN";
import { Person, PersonPhone, Vehicle } from "../../../pages/API";

// function getListData(value: { date: () => any }) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//       ];
//       break;
//     case 10:
//       listData = [
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//       ];
//       break;
//     case 15:
//       listData = [
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//         {
//           turul: "warning",
//           avsantsag: "08:30",
//           khereglegchiinKod: "6969",
//           khereglegchiinNer: "Батаа",
//           uilchilgeeniiTurul: "Tos soliolakh",
//           utas: "88221188",
//           mechanic: "Батука",
//           mashinDugaar: "1028УБА",
//         },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// }
// const getMonthData = (value: { month: () => number }) => {
//   if (value.month() === 8) {
//     return 1394;
//   }
// };

const Service = () => {
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
  // const monthCellRender = (value: { month: () => number }) => {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // };
  // const dateCellRender = (value: { date: () => any }) => {
  //   const listData = getListData(value);
  //   return (
  //     <>
  //       <div className="flex justify-end relative ">
  //         <div
  //           onClick={() => bukhDelgerenguiTsag(listData)}
  //           className="absolute z-50 hover:bg-orange-500 bg-gray-300 rounded-md p-2">
  //           <div>{listData.length}</div>
  //         </div>
  //       </div>
  //       <ul className="events">
  //         {listData.map((item) => (
  //           <li key={item.avsantsag}>
  //             <a
  //               onClick={() => delgerenguiKharakh(item)}
  //               className="hover:bg-orange-500 hover:text-white hover:scale-100 p-1 rounded-md hover:shadow-md space-x-3 flex">
  //               <div>
  //                 <Badge status={item.turul} />
  //               </div>
  //               <div className="flex justify-center items-center space-x-3 ">
  //                 <div>{item.avsantsag}</div>
  //                 <div className="font-bold">{item.mashinDugaar}</div>
  //               </div>
  //             </a>
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };

  const { data: personName } = useQuery("get_Name", getPersonName);
  const { data: vehicleData } = useQuery("get_Vehicle", getVehicle);
  const { data: phoneData } = useQuery("get_phones", getPhoneNumbers);
  const { data: personData } = useQuery("getPerson", getPerson);
  // const { data: serviceData } = useQuery("getService", getService);
  // async function getService() {
  //   const response = await axiosClient.get("/services");
  //   return response.data as Service[];
  // }
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
    const response = await axiosClient.get("/vehicles");
    return response.data as Vehicle[];
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
          // serviceData={serviceData}
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
                      {serviceAppointment?.map(
                        (
                          serviceAppointment: ServiceAppointment,
                          index: number
                        ) => (
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
                        )
                      )}
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
                locale={local}
                className="text-[9px]"
                // dateCellRender={dateCellRender}
                // monthCellRender={monthCellRender}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;
