import React, { useState } from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, ListGroup, Modal, TextInput } from "flowbite-react";


const Position = () => {
    const [showModal, setShowModal ] = useState(false);
    function openModal() {
        setShowModal(true);
      }
      function closeModal() {
        setShowModal(false);
      }
    return (
        <Layout>
            <Modal show={showModal} onClose={closeModal}>
                <Modal.Header>Албан тушаал нэмэх</Modal.Header>
                <Modal.Body>
                    <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="" value="Албан тушаал"/>
                                </div>
                                <TextInput id="" placeholder="Албан тушаал" required/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal} className="bg-gray-400">Буцах</Button>
                    <Button className="bg-orange-500">Хадгалах</Button>
                </Modal.Footer>
            </Modal>
            
                <div className="p-2 bg-gray-200 md:col-span-2 md:h-screen">
                    <div className="p-2 bg-white rounded-lg">
                        <div className="justify-between mb-4 space-y-2 md:flex md:space-y-0">
                            <h4 className="text-1xl">Албан тушаал</h4>
                             <div className="md:flex gap-4">
                               <div className="flex gap-3 mt-3 justify-end md:justify-normal ">
                                 <Button className="bg-orange-500" onClick={openModal}>Албан тушаал нэмэх</Button>
                            </div>
                        </div>
                    </div>
                        <Card className="max-w-sm">
                            <div className="w-50">
                                <ListGroup>
                                    
                                </ListGroup>
                            </div>
                        </Card>
                    </div>
                </div>
                
        
        </Layout>
    );
}

export default Position;