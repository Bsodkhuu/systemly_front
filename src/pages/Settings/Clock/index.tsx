import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select, Checkbox } from "flowbite-react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Clock = () => {
  const [works, setWorks] = useState({
    name: "",
    open: "",
    close: "",
  });
  const [workList, setWorkList] = useState([]);

  const WEEKS = ["Monday", "Tuesday", "Wednesday", "Thursday"];

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Ажлын цагийн хуваарь</h4>
            <a href="/holiday">
              <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            </a>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайлт" />
              <Button className="bg-blue-500">Хайх</Button>
            </div>
          </div>
          <div className="p-4">
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>7 хоног</Table.HeadCell>
                <Table.HeadCell>Нээх</Table.HeadCell>
                <Table.HeadCell>Хаах</Table.HeadCell>
                <Table.HeadCell>Ажиллах эсэх</Table.HeadCell>
                <Table.HeadCell>Үйлдэл</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>
                    <Select>
                      {WEEKS.map((i) => (
                        <option value={i}>{i}</option>
                      ))}
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="time" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="time" />
                  </Table.Cell>
                  {/* <Table.Cell>
                  <TextInput type="text" onChange={onChangeWorkCheckbox}/>
                </Table.Cell> */}
                  <Table.Cell>
                    <Button className="bg-blue-500">Хадгалах</Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Body className="divide-y">
                {workList.map((works: any, index: number) => (
                  <Table.Row key={index}>
                    <Table.Cell>{works.name}</Table.Cell>
                    <Table.Cell>{works.open}</Table.Cell>
                    <Table.Cell>{works.close}</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell className="text-xl space-x-2">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <FontAwesomeIcon icon={faTrash} />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Clock;
