import {
  TextInput,
  Button,
  Carousel,
  FileInput,
  Card,
  Textarea,
  Label,
  Table,
} from "flowbite-react";
import Layout from "../../../components/layout";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Description} from "../../API";

const Inquiry = () => {

  const { register, handleSubmit } = useForm<Description>();
  
  const { mutateAsync } = useMutation("descriptions", descriptions);
  
  
  async function descriptions(values: Description) {
    const response = await axiosClient.post("/descriptions", values);
    return response.data;
  }

  async function onSubmit(values: Description) {
    await mutateAsync(values);
  }
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
    
    const fileResponse = await axiosClient.post("/file_upload", formData);
    return fileResponse.data;
  };

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
      
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Үнийн санал</h5>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-orange-500">
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
                        src={review.image}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>

              <div className="flex">
                <div className="p-4">
                  <Card className="max-w-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                    <div className="mb-2 block">
                      <Label htmlFor="description" value="Тайлбар бичих" />
                      <Textarea id="description" {...register("body")}/>
                      &nbsp;
                      <Button onClick={handleSubmit(onSubmit)} className="bg-orange-500">Хүсэлт илгээх</Button>
                    </div>
                    </form>
                  </Card>
                </div>
              </div>
              {/* сэлбэгийн жагсаалт харуулах  */}
              <div className="p-2">
                <Card>
                  <FileInput onChange={handleFileChange}/>
                  <div>{fileSelected && `${fileSelected.name} - ${fileSelected.type}`}</div>
                  <Button onClick={handleUploadClick} className="bg-orange-500">Сэлбэгийн үнийн санал</Button>
                  
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Inquiry number</Table.HeadCell>
                      <Table.HeadCell>Гишүүн</Table.HeadCell>
                      <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                      <Table.HeadCell>Part Number</Table.HeadCell>
                      <Table.HeadCell>Тайлбар</Table.HeadCell>
                      <Table.HeadCell>Fitting Position</Table.HeadCell>
                      <Table.HeadCell>Үнэ</Table.HeadCell>
                      <Table.HeadCell>Валют</Table.HeadCell>
                      <Table.HeadCell>Асуулгын огноо</Table.HeadCell>
                      <Table.HeadCell>Үйлдэл</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      
                    </Table.Body>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};
export default Inquiry;
