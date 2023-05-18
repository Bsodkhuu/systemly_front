import React from "react";
import { Avatar, Table} from "flowbite-react";
import Layout from "../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Employee } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EmployeeHistory = () => {
  const { data: employee} = useQuery("getEmployee", getEmployee);

  async function getEmployee() {
    const response = await axiosClient.get("/employees");
    return response.data as Employee[];
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
              <Table.HeadCell>Байгууллага</Table.HeadCell>
              <Table.HeadCell>Мэргэжил</Table.HeadCell>
              <Table.HeadCell>Ажилд орсон огноо</Table.HeadCell>
              <Table.HeadCell>Ажлаас гарсан огноо</Table.HeadCell>
              <Table.HeadCell>Үйлдэл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {employee?.map((employee: Employee, index: number) => (
                <Table.Row key={index}>
                        <Table.Cell>{employee.filePath}</Table.Cell>
                        <Table.Cell>{employee.firstName}</Table.Cell>
                        <Table.Cell>{employee.lastName}</Table.Cell>
                        <Table.Cell>{employee.branch.branchName}</Table.Cell>
                        <Table.Cell>{employee.position.positionName}</Table.Cell>
                        <Table.Cell>{employee.jobStart}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        {/* <Table.Cell>{employee.jobEnd}</Table.Cell> */}
                        <Table.Cell className="space-2xl">
                         <FontAwesomeIcon icon={faPenToSquare}/>
                        </Table.Cell>
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
