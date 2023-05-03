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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
interface Inquiry extends InquiryDetail{
  id: string;
  createdAt: string;
  updatedAt: string;
  createdDate: string;
  inquiryNumber: string;
  userId?: string;
  [partNumber: string]: any;
}

interface InquiryDetail{
  affiliateId: string;
  partNumber: string;
  quantity: number;
  netPrice: number;
  currency: string;
  productId?: string;
  supplierId?: string;
  inquiryId?: string;
  orderDetailId?: string;
  statusTypeId?: string;
}

export interface Description{
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string
}
const Inquiry = () => {
  const { register, handleSubmit } = useForm<Description>();
  
  const { mutateAsync } = useMutation("descriptions", descriptions);
  const { data: inquiry } = useQuery("getInquiry", getInquiry);
  
  async function getInquiry() {
    const response = await axiosClient.get("/inquiries");
    return response.data as Inquiry[];
  }
  
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
    
    const fileResponse = await axiosClient.post("http://localhost:3000/file_upload", formData);
    return fileResponse.data;
  };

  const reviews = [
    {
      id: 1,
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/02/13/autoparts.png",
      link: "",
    },
    {
      id: 2,
      link: "",
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/02/13/geo-experts.png",
    },
    {
      id: 3, 
      link:"", 
      image:"https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/02/13/200-570-autoservice.png",
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
                        alt={review.link}
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
                  <h1 className="text-1xl">Сэлбэгийн үнийн саналын жагсаалт</h1>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>Партын дугаар</Table.HeadCell>
                      <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
                      <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                      <Table.HeadCell>Үнэ</Table.HeadCell>
                      <Table.HeadCell>Валют</Table.HeadCell>
                      <Table.HeadCell>Үйлдэл</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {inquiry?.map((inquiry: Inquiry, index: number)=>(
                         <Table.Row key={index}>
                         <Table.Cell>{inquiry.partNumber}</Table.Cell>
                         <Table.Cell>{inquiry.createdDate}</Table.Cell>
                         <Table.Cell>{inquiry.quantity}</Table.Cell>
                         <Table.Cell>{inquiry.netPrice}</Table.Cell>
                         <Table.Cell>{inquiry.currency}</Table.Cell>
                         <Table.Cell className="text-1xl">
                           <FontAwesomeIcon icon={faCartShopping} />
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
        {/* <div className="col-span">
          <Cart />
        </div> */}
      
    </Layout>
  );
};
export default Inquiry;
