import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { InquiryDetail } from "../My";


const History = () => {
  const { data: inquiryDetail } = useQuery("getInquiryDetail", getInquiryDetail);

  async function getInquiryDetail() {
    const response = await axiosClient.get("/inquiry_details");
    return response.data as InquiryDetail[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h5 className="text-1xl">Захиалгийн Түүх</h5>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-orange-500">
                Хайх
              </Button>
            </div>
          </div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Захиалга</Table.HeadCell>
              <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
              <Table.HeadCell>Статус төрөл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            {inquiryDetail?.map((inquiryDetail: InquiryDetail, index: number) => (
               <Table.Row key={index}>
                  <Table.Cell>{inquiryDetail.orderDetail.order_id}</Table.Cell>
                  <Table.Cell>{inquiryDetail.supplier.supplierList}</Table.Cell>
                  <Table.Cell>{inquiryDetail.statusType.statusName}</Table.Cell>
              </Table.Row>
             ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default History;
