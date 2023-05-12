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
} from "flowbite-react";
import { useState } from "react";
import Layout from "../../../components/layout";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Inventory } from "../../API";


const Spare = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();

  // const { register, handleSubmit } = useForm<Inventory>();

  // const { mutateAsync } = useMutation("inventories", inventories);

  // async function inventories(values: Inventory) {
  //   const formData = new FormData();
  //   formData.set("file", values.purchasedFrom);

  //   const fileResponse = await axiosClient.post("/file_upload", formData);
  //   return fileResponse.data;
  // }
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
  const { data: inventory } = useQuery("getInventory", () =>
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
    const response = axiosClient.get(
      `/inventories?purchasedFrom=${params.purchasedFrom}`
    );
    return (await response).data;
  }
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
                  <Label htmlFor="purchasedFrom" value="Файл оруулах" />
                </div>
                <FileInput id="purchasedFrom"  />
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
                placeholder="Сэлбэгний үлдэгдэл хайх"
                ref={purchasedFromRef}
              />
              <Button type="submit" className="bg-orange-500">
                Хайх
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

              <div className="p-4 md:block hidden ">
                <Card>                 
                  {/* too,shirheg, zarah vne garaas oruulj ogno shvv  */}
                <TextInput type="file" onChange={handleFileChange}/>
                <div>{fileSelected && `${fileSelected.name} - ${fileSelected.type}`}</div>
                <Button onClick={handleUploadClick} className="bg-orange-500">Сэлбэг нэмэх</Button>
                &nbsp;&nbsp;&nbsp;
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
                          <Table.Cell>{inventory.supplier}</Table.Cell>
                          <Table.Cell>{inventory.purchasedFrom}</Table.Cell>
                          <Table.Cell>{inventory.quantity}</Table.Cell>
                          <Table.Cell>{inventory.cost}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </Card>
              </div>
              <div className="md:hidden" >
        {inventory?.map((inventory: Inventory, index: number) => (
          <div className="w-full  bg-white p-2 mt-2 rounded-md text-[11px] flex">
          <div className="w-full p-2">
          <div>Нийлүүлэгч</div>
                      <div>Хаанаас</div>
                      <div>Тоо, ширхэг</div>
                      <div>Зарах үнэ</div>
          </div>
          <div className="w-full p-2 text-right" key={index} > 
          <div>{inventory.supplier}</div>
                          <div>{inventory.purchasedFrom}</div>
                          <div>{inventory.quantity}</div>
                          <div>{inventory.cost}</div>
          </div>
          </div>
          ))}
        </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Spare;
