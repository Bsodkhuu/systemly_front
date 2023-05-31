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
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/bilsentin.jpg",
    },
    {
      id: 2,
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/bosh.jpg",
    },
    {
      id: 3,
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2023/04/brembo.jpg",
    },
    {
      id: 4, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/clarios.jpg",
    },
    {
      id: 4, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/clarios.jpg",
    },
    {
      id: 5, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/01/Continental.jpg",
    },
    {
      id: 6, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/Delphi.jpg",
    },
    {
      id: 7, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/denso.jpg",
    },
    {
      id: 8, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/dr1v.jpg)",
    },
    {
      id: 9, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/elring.jpg",
    },
    {
      id: 10, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/exide.jpg",
    },
    {
      id: 11, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/08/hc-cargo.jpg",
    },
    {
      id: 12, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/hella.jpg",
    },
    {
      id: 13, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/knorr.jpg",
    },
    {
      id: 14, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/kyb.jpg",
    },
    {
      id: 15, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/mahle.jpg",
    },
    {
      id: 16, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/05/mann.jpg",
    },
    {
      id: 17, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2023/04/Niterra.jpg",
    },
    {
      id: 18, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/03/NRF.jpg",
    },
    {
      id: 19, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/03/NTN.jpg",
    },
    {
      id: 20, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/osram.jpg",
    },
    {
      id: 21, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/Philips.jpg",
    },
    {
      id: 22, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/schaeffler.jpg",
    },
    {
      id: 23, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/skf.jpg",
    },
    {
      id: 24, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2022/04/Totalenergies.jpg",
    },
    {
      id: 25, 
      image: "https://www.nexusautomotiveinternational.eu/wp-content/uploads/2021/04/valeo.jpg",
    },
    {
      id: 26, 
      image: "",
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
                <FileInput id=""/>
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
            <h3 className="text-1xl">Агуулахын үлдэгдэл</h3>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2">
              
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                  {reviews.map((review) => (
                    <img
                      className="d-block w-50"
                      src={review.image}
                    />
                  ))}
                </Carousel>
              </div>
              
              <div className="p-4 md:block hidden ">
                <Card>
                <TextInput type="file" onChange={handleFileChange}/>
                <div>{fileSelected && `${fileSelected.name} - ${fileSelected.type}`}</div>
                <Button onClick={handleUploadClick} className="bg-orange-500">Нэмэх</Button>
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
                      <Table.HeadCell>Нийт захиалласан тоо ширхэг</Table.HeadCell>
                      <Table.HeadCell>Үнэ</Table.HeadCell>
                      <Table.HeadCell>Хасагдсан тоо ширхэг</Table.HeadCell>
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
                          <Table.Cell>{garageInventory.order.packageId}</Table.Cell>
                          <Table.Cell>{garageInventory.productPirce}</Table.Cell>
                          <Table.Cell>{garageInventory.productCnt}</Table.Cell>
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
