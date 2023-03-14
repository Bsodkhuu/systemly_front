import {
    Button,
    FileInput,
    Label,
    Modal,
    TextInput,Card
  } from "flowbite-react";
  import Layout from "../../components/layout";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";
  import { useState } from "react";
  
  const Warehouse = () => {
    const [showModal, setShowModal] = useState(false);
  
    function openModal() {
      setShowModal(true);
    }
  
    function closeModal() {
      setShowModal(false);
    }
  
    function createwarehouse() {
      // fetch('/api/customer')
      setShowModal(false);
    }
  
    return (
      <Layout>
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Бараа нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="brand_name" value="Брендын нэр" />
                  </div>
                  <TextInput id="brand_name" />
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="logo" value="Лого" />
                  </div>
                  <FileInput id="logo" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="part_number" value="Партын дугаар" />
                  </div>
                  <TextInput id="part_number" />
                </div>
               
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={createwarehouse} className="bg-blue-500">
              Хадгалах
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h1 className="text-1xl">Агуулах бүртгэл</h1>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500" onClick={openModal}>
                  Агуулах бүртгэх
                </Button>
              </div>
            </div>
           <Card> 
          
           </Card>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Warehouse;
  