import React from "react";
import { Avatar, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { AffiliateEmployee } from "..";

const EmployeeHistory = () => {
  
  const {data: employeeHistory} = useQuery("getEmployeeHistory", getEmployeeHistory);
  async function getEmployeeHistory() {
    const response = await axiosClient.get("/affiliate_employees");
    return response.data as AffiliateEmployee[]
  }
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
              <Table.HeadCell>Мэргэжил</Table.HeadCell>
              <Table.HeadCell>Ажилд орсон он сар</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {employeeHistory?.map((employeeHistory: AffiliateEmployee, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Avatar img={employeeHistory.image}/>
                  </Table.Cell>
                  <Table.Cell>{employeeHistory.ovog}</Table.Cell>
                  <Table.Cell>{employeeHistory.name}</Table.Cell>
                  <Table.Cell>{employeeHistory.phone}</Table.Cell>
                  <Table.Cell>{employeeHistory.position.name}</Table.Cell>
                  <Table.Cell>{employeeHistory.jobDate}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default EmployeeHistory;
