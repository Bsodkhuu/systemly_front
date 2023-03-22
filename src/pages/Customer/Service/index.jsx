
import { TextInput, Button,  Table, Checkbox} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";

const Service = ()=> {
  const [showSearch, setShowSearch] = useState();
  const [showChoose, setShowChoose] = useState();

  function choose(){
    setShowChoose();
  }
  function search(){
    setShowSearch();
  }
  return(
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээний цаг авах</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
             
              <Button className="bg-blue-500" onClick={search}>
                  Хайх
              </Button>
            
            </div>
          </div>
             {/* calendar */}
           <div className="grid grid-cols-3">
            <div>
              <Table>
                <Table.Head className="uppercase">
                <Table.HeadCell>
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>
                     Ажилтны нэрс
                  </Table.HeadCell>
                  <Table.HeadCell>
                    Үйлчилгээний төрөл
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row>
                    <Table.Cell>Example</Table.Cell>
                    <Table.Cell>Example</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div>
              Calender
            </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
export default Service;