import React, { useEffect, useRef } from "react";
import {
  TextInput,
  Button,
  FileInput,
  Modal,
  Label,
  Carousel,
  Card,
  Table
} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useForm } from "react-hook-form";
import { fileURLToPath } from "url";

export interface Inventory{
  id: string;
  createdAt: string;
  updatedAt: string;
  purchasedFrom: string;
  supplier: string;
  mainCategoryId?: string;
  subCategoryId?:string;
  cost: number;
  quantity: number;
}
const Spare = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();

  const { register, handleSubmit } = useForm<Inventory>();

  const { mutateAsync } = useMutation("inventories", inventories);

  async function inventories(values: Inventory) {
    const response = await axiosClient.post("/inventories", {
      ...values, 
      quantity: parseInt(values.quantity.toString()), 
      cost: parseInt(values.cost.toString()),
    }
      // purchasedFrom: fileURLToPath(values.purchasedFrom.toString()),
    );
    return response.data;
  }

  const { data: inventory } = useQuery("getInventory",() => 
    getInventory({
      purchasedFrom: searchParams.get("purchasedFrom") || "",
    })
  );

  const purchasedFromRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (purchasedFromRef.current) {
      purchasedFromRef.current.value = searchParams.get("purchasedFrom") || "";
    }
  }, []);

  async function getInventory(params: { purchasedFrom: string }) {
    const response = axiosClient.get(`/inventories?purchasedFrom=${params.purchasedFrom}`);
    return (await response).data;
  }
  function nexus() {
    // supplier selbeg medeelliig table helwereer haruulah
    //fetch api
   
  }
  function all() {
   
  }

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function onSubmit(values: Inventory) {
    await mutateAsync(values);
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="purchasedFrom" value="Файл оруулах" />
                </div>
                <FileInput id="purchasedFrom" {...register("purchasedFrom")}/>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">
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
                placeholder="Сэлбэгний үлдэгдэл хайх" ref={purchasedFromRef}
              />
              <Button type="submit" className="bg-orange-500">
                Хайх
              </Button>
              <Button className="bg-orange-500" onClick={openModal}>
                Сэлбэг нэмэх
              </Button>
            </div>
          </div>

          {/* supplier, nexus,busad */}

          <div className="grid grid-cols-2">
            <div className="col-span-2">
              {/* supplier logo */}
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
              <div className="p-4">
                <Card>
                  <div className="flex gap-4">
                    <Button className="bg-orange-500" onClick={nexus}>
                      Nexus
                      {/* supplier selbeg medeelliig table helwereer haruulah  */}
                    </Button>
                    <Button className="bg-orange-500" onClick={all}>
                      Бусад
                      {/* excel file orj irsen medeelliig table helwereer haruulaj  */}
                    </Button>
                  </div>
                  {/* too,shirheg, zarah vne garaas oruulj ogno shvv  */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="supplier" value="Нийлүүлэгч"/>
                    <TextInput type="text" {...register("supplier")}/>&nbsp;
                    <Label htmlFor="purchasedFrom" value="Хаанаас"/>
                    <TextInput type="text" {...register("purchasedFrom")}/>&nbsp;
                    <Label htmlFor="quantity" value="Тоо ширхэг"/>
                    <TextInput type="text" {...register("quantity")}/>&nbsp;
                    <Label htmlFor="cost" value="Зарах үнэ"/>
                    <TextInput type="text" {...register("cost")}/>&nbsp;
                    <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хадгалах</Button>
                  </form>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                      <Table.HeadCell>Хаанаас</Table.HeadCell>
                      <Table.HeadCell>Тоо, ширхэг</Table.HeadCell>
                      <Table.HeadCell>Зарах үнэ</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                     {inventory?.map((inventory: Inventory, index: number) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          {inventory.supplier}
                        </Table.Cell>
                        <Table.Cell>
                          {inventory.purchasedFrom}
                        </Table.Cell>
                        <Table.Cell>
                          {inventory.quantity}
                        </Table.Cell>
                        <Table.Cell>
                          {inventory.cost}
                        </Table.Cell>
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
