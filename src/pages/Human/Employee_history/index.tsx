import React from "react";
import { TextInput, Button, Table, Avatar } from "flowbite-react";
import Layout from "../../../components/layout";
import { useState } from "react";

const EmployeeHistory = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  function search() {
    // fetch('/api/customer')
    setShowSearch(false);
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Ажилтны түүх</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
            </div>
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
            <Table.Body>
             
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                  
                  </Table.Cell>
                </Table.Row>
             
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default EmployeeHistory;
