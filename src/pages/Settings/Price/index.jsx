import { TextInput, Button, Card, Table } from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {useState} from "react";


const Price = () => {
  const [showSearch, setShowSearch] = useState();
  const [showActive, setShowActive] = useState();
  const [showInactive, setShowInactive] = useState();

  function active(){
    {/* zaswarin idewhitei bvrtgene  */}
    setShowActive();
  }

  function Inactive(){
    {/* zaswarin idewhif zawsaraa bvrtgene */}
    setShowInactive();
  }

  function createPrice(){
    setShowModal(false);
  }
 

  function search(){
    setShowSearch();
  }
    return(
        <Layout> 
          <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4"> 
              <TextInput id="searc" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
            </div>
           </div>


           <div className="grid grid-cols-2"> 
             <div className="p-4"> 
             
             <div className="max-w-lg"> 
              <div className="flex gap-4"> 
              
              <Button className="bg-blue-500" onClick={active}>Идэвхитэй</Button>
             
                
                <Button className="bg-blue-500" onClick={Inactive}>
                  Идэвхигүй
                </Button>
              
              </div>
              <Table> 
                <Table.Head className="uppercase"> 
                 <Table.HeadCell>
                  Засварын үйлчилгээний нэр
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Үнэ
                 </Table.HeadCell>
                 <Table.HeadCell>
                   Валют
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Үйлдэл
                 </Table.HeadCell>
                </Table.Head>
                <Table.Body> 
                  <Table.Row>
                    <Table.Cell> 
                      qwerty
                    </Table.Cell>
                    <Table.Cell> 
                      1
                    </Table.Cell>
                    <Table.Cell> 
                      $
                    </Table.Cell>
                    <Table.Cell className="text-xl space-x-2">
                     <FontAwesomeIcon icon={faPenToSquare} />
                     <FontAwesomeIcon icon={faTrash} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
             </div>
             </div>
           </div>
           </div>
          </div>
        </Layout>
    );
}

export default Price;