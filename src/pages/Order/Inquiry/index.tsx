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
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
interface Inquiry extends InquiryDetail{
  id: string;
  createdAt: string;
  updatedAt: string;
  createdDate: string;
  userId?: string;
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
const Inquiry = () => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useMutation("createInquiry", createInquiry);
  const { data: inquiry } = useQuery("getInquiry", getInquiry);
  
  async function getInquiry() {
    const response = await axiosClient.get("/inquiries");
    return response.data as Inquiry[];
  }
  async function createInquiry(values: Inquiry) {
    const response = await axiosClient.post("/", values);
    return response.data;
  }

  async function onSubmit(values: Inquiry) {
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
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Үнийн санал</h5>
              <div className="flex gap-4">
                <TextInput id="search" type="search" placeholder="Хайх" />
                <Button className="bg-blue-500">
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
              </div>

              <div className="flex">
                <div className="p-4">
                  <Card className="max-w-lg">
                    <form  className="flex flex-col gap-4 max-h-96 overflow-y-auto">
                    <div className="mb-2 block">
                      <Label htmlFor="description" value="Тайлбар бичих" />
                      <Textarea id="description" />
                      &nbsp;
                      <Button className="ml-auto">Хүсэлт илгээх</Button>
                    </div>
                    </form>
                  </Card>
                </div>
              </div>
              {/* сэлбэгийн жагсаалт харуулах  */}
              <div className="p-2">
                <Card>
                  <FileInput />
                  <Button className="bg-blue-500">Сэлбэгийн үнийн санал</Button>
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
                         <Table.Row>
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
        <div className="col-span">
          <Cart />
        </div>
      </div>
    </Layout>
  );
};
export default Inquiry;
