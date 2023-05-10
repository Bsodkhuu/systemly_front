import React from "react";
import { Avatar, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const EmployeeHistory = () => {
  
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Ажилтны түүх</h4>
            
          </div>
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Ажилтны зураг</Table.HeadCell>
              <Table.HeadCell>Овог</Table.HeadCell>
              <Table.HeadCell>Нэр</Table.HeadCell>
              <Table.HeadCell>Утасны дугаар</Table.HeadCell>
              {/* <Table.HeadCell>Мэргэжил</Table.HeadCell> */}
              <Table.HeadCell>Ажилд орсон он сар</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default EmployeeHistory;
