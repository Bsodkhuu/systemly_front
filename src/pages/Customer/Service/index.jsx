
import { TextInput, Button,  Table, Card, Checkbox, ListGroup} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";

const Service = ()=> {
  const [showSearch, setShowSearch] = useState();
  
  function search(){
    setShowSearch();
  }
  return(
    <Layout>
    
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            
            <h4 className="text-1xl">Үйлчилгээний цаг авах
           
            </h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
             
              <Button className="bg-blue-500" onClick={search}>
                  Хайх
              </Button>
            <TextInput id="date" type="date"/>
            </div>
          </div>
             {/* calendar */}
             <div className="grid grid-cols-2">
        <div className="p-4">
          <Card className="max-w-sm"> 
            <h5 className="text-1xl">Цаг авсан жагсаалт</h5>
           <div className="flex gap-4">
            <TextInput id="search" type="search" placeholder="Хайх"/>
            <Button className="bg-blue-500" onClick={search}>Хайх</Button>
           </div>
            <Table> 
              <Table.Head className="uppercase"> 
                {/* <Table.HeadCell></Table.HeadCell> */}
                 <Table.HeadCell>Нэрс</Table.HeadCell>
                 <Table.HeadCell>Үйлчилгээний төрөл</Table.HeadCell>
                 <Table.HeadCell>Цаг авсан</Table.HeadCell>
                 
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                
                  <Table.Cell>example</Table.Cell>
                  <Table.Cell>example</Table.Cell>
                  <Table.Cell>08:00</Table.Cell>
                 
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </div>
        <div className="p-3">
          Calendar
        </div>
       </div>
       <div className="p-4">
          <Card className="max-w-sm"> 
            <h5 className="text-1xl">Үзлэгийн хуваарь</h5>
              <div className="flex gap-4">
               <TextInput id="search" type="search" placeholder="Хайх"/>
               <Button className="bg-blue-500" onClick={search}>Хайх</Button>
              </div>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Хуваарь</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Cell>
                  <TextInput type="date" />
                </Table.Cell>
              </Table.Body>
            </Table>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Service;