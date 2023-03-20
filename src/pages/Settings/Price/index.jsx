import { TextInput, Button, Card, Table, Modal, Label } from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {useState} from "react";


const Price = () => {
  const [showSearch, setShowSearch] = useState();
  const [showActive, setShowActive] = useState();
  const [showModal, setShowModal] = useState(false);

  function active(){
    {/* zaswarin idewhitei bvrtgene  */}
    

    setShowActive();
  }

  
  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
 

  function search(){
    setShowSearch();
  }
    return(
        <Layout> 
          <Modal show={showModal} onClose={closeModal}>
             <Modal.Header>Идэвхитэй</Modal.Header>
             <Modal.Body> 
              <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                <div className="flex gap-4"> 
                   <div className="w-1/2"> 
                   <div className="mb-2 block"> 
                       <Label htmlFor="service" value="Засвар үйлчилгээний нэр"/>
                   </div>
                   <TextInput id="service"/>
                   </div>
                   <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                     <Label htmlFor="price" value="Үнэ"/>
                    </div>
                    <TextInput id="price" />
                   </div>
                   <div className="w-1/2"> 
                     <div className="mb-2 block"> 
                       <Label htmlFor="currency" value="Валют" />
                     </div>
                     <TextInput id="currency"/>
                   </div>
                </div>

              </form>
             </Modal.Body>
             <Modal.Footer>
               <Button onClick={closeModal} className="bg-gray-400">
                Буцах
               </Button>
               <Button onClick={active} className="bg-gray-400">
                Хадгалах
               </Button>
             </Modal.Footer>
          </Modal>
          <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4"> 
              <TextInput id="searc" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>Идэвхитэй</Button>
              <a href="/inactive">
              <Button className="bg-blue-500">Идэвхигүй</Button>
              </a>
            </div>
           </div>


           <div className="grid grid-cols-2"> 
             <div className="p-4"> 
             
             <div className="max-w-lg"> 
              <div className="flex gap-4"> 
              
              {/* <Button className="bg-blue-500" onClick={openModal}>Идэвхитэй</Button>
                 {/* table helwereer ajilaa bvrtgene  */}
                {/* <Button className="bg-blue-500" onClick={Inactive}>
                  Идэвхигүй
                </Button>  */}
              
              </div>
              &nbsp;
             <Card className="max-w-sm"> 
             <h5 className="text-1xl">Засвар үйлчилгээний жагсаалт</h5>
             <Table> 
                <Table.Head className="uppercase"> 
                 <Table.HeadCell>
                  Засвар үйлчилгээний нэр
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
             </Card>
             </div>
             </div>
           </div>
           </div>
          </div>
        </Layout>
    );
}

export default Price;