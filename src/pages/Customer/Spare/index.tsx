import React, { ChangeEvent, useEffect, useRef } from "react";
import {
  TextInput,
  Button,
  FileInput,
  Modal,
  Label,
  Carousel,
  Card,
  Table,
  Alert,
} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { GarageInventory} from "../../API";


const Spare = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();

  const [fileSelected, setFileSelected] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileSelected(e.target.files[0]);
    }
  };

  async function  handleUploadClick () {
    if (!fileSelected) {
      return;
    }
    const formData = new FormData();
    
    const fileResponse = await axiosClient.post("http://localhost:3000/file_upload", formData);
    return fileResponse.data;
  };
  
  function nexus() {
    // supplier selbeg medeelliig table helwereer haruulah
    //fetch api
  }
  function all() { }

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }


  const { data: garageInventory} = useQuery("getInventory", getInventory);

  async function getInventory() {
    const response = await axiosClient.get("/garage-inventory");
    return response.data as GarageInventory[];
  }
  const reviews = [
    {
      id: 1,
      image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      link: "",
    },
    {
      id: 2,
      link: "",
      image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    },
  ];
  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Сэлбэг нэмэх</Modal.Header>
        <Modal.Body>
          <form
            className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Файл оруулах" />
                </div>
                <FileInput id=""  />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button  className="bg-orange-500">
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h3 className="text-1xl">Сэлбэгийн үлдэгдэл</h3>
            <div className="flex gap-4">
              <TextInput
                name="purchasedFrom"
                type="search"
                placeholder="Сэлбэгний үлдэгдэл хайх"/>
              <Button type="submit" className="bg-orange-500">
                Хайх
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2">
              
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                  {reviews.map((review) => (
                    <img
                      className="d-block w-50"
                      src={review.image}
                      alt={review.link}
                    />
                  ))}
                </Carousel>
              </div>
              <Alert color="success" rounded={false} withBorderAccent={true} additionalContent={
                <React.Fragment>
                 <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                  Excel файлаар оруулж ирсэн тоо ширхэгийг үйлчилгээ хийсэн материал дээр үндсэн тоо ширхэгийг хасаж харуулж байна. 
                 </div>
                </React.Fragment>}></Alert>
              <div className="p-4 md:block hidden ">
                <Card>
                <TextInput type="file" onChange={handleFileChange}/>
                <div>{fileSelected && `${fileSelected.name} - ${fileSelected.type}`}</div>
                <Button onClick={handleUploadClick} className="bg-orange-500">Сэлбэг нэмэх</Button>
                &nbsp;&nbsp;&nbsp;
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Салбар байгууллага</Table.HeadCell>
                      <Table.HeadCell>Үйлдвэрлэгч</Table.HeadCell>
                      <Table.HeadCell>Бүтээгдэхүүний код</Table.HeadCell>
                      <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
                      <Table.HeadCell>Тайлбар</Table.HeadCell>
                      <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
                      <Table.HeadCell>Захиалгын дугаар</Table.HeadCell>
                      <Table.HeadCell>Нийт захиалгын тоо ширхэг</Table.HeadCell>
                      <Table.HeadCell>Тоо, ширхэг Хасах</Table.HeadCell>
                      <Table.HeadCell>Бүтээгдэхүүний үнэ</Table.HeadCell>
                      <Table.HeadCell>Зарах үнэ</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {garageInventory?.map((garageInventory: GarageInventory, index: number) => (
                        <Table.Row key={index}>
                          <Table.Cell>{garageInventory.branch.branchName}</Table.Cell>
                          <Table.Cell>{garageInventory.product.manufacturerId}</Table.Cell>
                          <Table.Cell>{garageInventory.product.productCode}</Table.Cell>
                          <Table.Cell>{garageInventory.product.productName}</Table.Cell>
                          <Table.Cell>{garageInventory.product.productDescription}</Table.Cell>
                          <Table.Cell>{garageInventory.prodmetric.typeId}</Table.Cell>
                          <Table.Cell>{garageInventory.order.numbOfProd}</Table.Cell>
                          <Table.Cell>{garageInventory.productCnt}</Table.Cell>
                          <Table.Cell>{garageInventory.productPirce}</Table.Cell>
                          <Table.Cell>{garageInventory.mainPrice}</Table.Cell>
                        </Table.Row>
                      ))}
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
};

export default Spare;
