import React, { useState } from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, ListGroup, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Position } from "../../API";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";


const Position_Data = () => {
    const [showModal, setShowModal ] = useState(false);
    function openModal() {
        setShowModal(true);
      }
      function closeModal() {
        setShowModal(false);
      }

      const { register, handleSubmit} = useForm<Position>();
      const { mutateAsync } = useMutation("create", create);

      const { data: postitionData } = useQuery("getPosition",getPosition);

      async function getPosition() {
        const response = await axiosClient.get("/positions");
        return response.data as Position[];
      }

      async function create(values: Position) {
        const response = await axiosClient.post("/positions", values);
        return response.data;
    }

    async function onSubmit(values: Position) {
        await mutateAsync(values);
        closeModal();
      }
    return (
        <Layout>
            <Modal show={showModal} onClose={closeModal}>
                <Modal.Header>Албан тушаал нэмэх</Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="positionName" value="Албан тушаал"/>
                                </div>
                                <TextInput id="positionName" placeholder="Албан тушаал" required {...register("positionName")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal} className="bg-gray-400">Буцах</Button>
                    <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
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
                                    {postitionData?.map((postitionData: Position, index: number) => (
                                        <ListGroup.Item key={index}>
                                          Албан тушаал: {postitionData.positionName}
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Card>
                    </div>
                </div>
                
        
        </Layout>
    );
}

export default Position_Data;