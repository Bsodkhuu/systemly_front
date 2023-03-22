import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select } from "flowbite-react";
import { useState } from "react";

const Clock= () => {
  const [showSave, setShowsave] = useState();

  function save(){
    setShowsave();
  }
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
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
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
                      <TextInput type="text" />
                    </Table.Cell>
                    <Table.Cell>
                    <TextInput type="text" />
                    </Table.Cell>
                    <Table.Cell>
                    <TextInput type="text" />
                    </Table.Cell>
                    <Table.Cell>
                      <Select>
                        <option value="true">Үнэн</option>
                        <option value="false">Худал</option>
                      </Select>
                    </Table.Cell>
                    <Table.Cell>
                      <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
           </div>
           </div>
          
        </Layout>
    );
}
export default Clock;