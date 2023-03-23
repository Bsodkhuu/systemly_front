import { TextInput, Button, Table} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";

const Holiday = () => {
  const [showSave, setShowsave] = useState();
  function save(){
    setShowsave()
  }
    return(
        <Layout>
             <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
            </div>
           </div>
           
           <Table> 
            <Table.Head className="uppercase"> 
              <Table.HeadCell>Эхлэх он сар</Table.HeadCell>
              <Table.HeadCell>Дуусах он сар</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Хадгалах</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell>
                  <TextInput type="date" />
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="date" />
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="text" />
                </Table.Cell>
                <Table.Cell>
                  <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
           </Table>
           </div>
           </div>
        </Layout>
    );
}
export default Holiday;