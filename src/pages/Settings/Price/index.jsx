import { TextInput, Button, Select, Table, Modal, Label} from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {useState, Fragment} from "react";


const Price = () => {
  const [showSearch, setShowSearch] = useState();
  const [showActive, setShowActive] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSave, setShowSave] = useState();
  const [showDelete, setShowDelete] = useState();



  function Inactive(){
    {/* zaswarin idewhitei bvrtgene  */}
    // Inactive uilchilgeenii jagsaaltaas shuud hadgalah tovch daraad active ruu oruulna
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
  function save(){
    setShowSave();
  }

  function ustgah(){
    setShowDelete();
  }


    return(
        <Layout> 
          <Modal show={showModal} onClose={closeModal}>
             <Modal.Header>Үйлчилгээ бүртгэх</Modal.Header>
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
               <Button onClick={Inactive} className="bg-gray-400">
                Хадгалах
               </Button>
             </Modal.Footer>
          </Modal>
          <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>Үйлчилгээ бүртгэх</Button>
              <a href="/active">
              <Button className="bg-blue-500">Идэвхитэй</Button>
              </a>
            </div>
           </div>

           {/* main, sub group service service table + towch daraad mashinii torlin vne garar oruullaad hadgalah towch darah  */}
            

            <Table> 
              <Table.Head className="uppercase"> 
                 <Table.HeadCell>
                  Main group
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Sub group
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Том оврийн
                 </Table.HeadCell>
                 <Table.HeadCell>
                  SUV 
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Дунд гарын 
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Суудлын
                 </Table.HeadCell>
                 <Table.HeadCell>
                  Үйлдэл
                 </Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Select>
                      <option value="">Мотор</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                  <Select>
                      <option value="">Моторын тосолгоо</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" />
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

export default Price;