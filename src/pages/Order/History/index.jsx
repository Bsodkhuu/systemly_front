import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select} from "flowbite-react";
import { useState } from "react";
const History = () => {
    const [showSearch, setSearch] = useState(false);
    
    function Haih(){
        //fetch api
       setSearch(true);
    }
    return (
        <Layout> 
            <div className="p-4 bg-gray-200 h-screen w-full">
             <div className="bg-white p-6 rounded-lg"> 
             <div className="flex justify-between mb-4"> 
             <h5 className="text-1xl">Захиалгийн Түүх</h5>
             <div className="flex gap-4"> 
             <TextInput id="search" type="search" placeholder="Хайх"/>
             <Button className="bg-blue-500" onclick={Haih}>
                Хайх
             </Button>
             </div>
             </div>
             <Table> 
                <Table.Head> 
                <Table.HeadCell> 
                   Захиалга
                </Table.HeadCell>
                <Table.HeadCell> 
                   Нийлүүлэгч
                </Table.HeadCell>
                <Table.HeadCell> 
                   Статус
                </Table.HeadCell>

                </Table.Head>
                <Table.Body className="divide-y">
              <Table.Row>
                
                <Table.Cell>Meyle</Table.Cell>
                <Table.Cell>11111</Table.Cell>
                <Table.Cell>
                <Table.Cell>
                Төлбөр төлөгдсөн
                </Table.Cell>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
             </Table>
             </div>
             </div>
        </Layout>
    );
}

export default History;