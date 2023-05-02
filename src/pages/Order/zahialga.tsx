import React, { useState } from "react";
import {
  TextInput,
  Button,
  Carousel,
  Card,
  Table,
  Select,
  Label,
  ListGroup, 
} from "flowbite-react";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";
interface Supplier{
  id: string;
  createdAt: string;
  updatedAt: string;
  supplierList: string;
  vehicleManufacturerId?: string;
}

interface ProductCategory{
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
}

interface ProductSubCategory{
  id: string;
  createdAt: string;
  updatedAt: string;
  en: string;
  productCategoryId?: string;
}

const Zahialga = () => {
  const { data, isLoading } = useQuery("products", getProducts);

  const {data: supplier} = useQuery("getSupplier", getSupplier);
  async function getSupplier() {
    const response = await axiosClient.get("/suppliers");
    return response.data as Supplier[];
  }

  const {data: productCategory} = useQuery("getProductCategory", getProductCategory);
  async function getProductCategory() {
    const response = await axiosClient.get("/product_categories");
    return response.data as ProductCategory[];
  }

  const {data: productSub} = useQuery("getProductSub", getProductSub);

  async function getProductSub() {
    const response = await axiosClient.get("/product_subcategories");
    return response.data as ProductSubCategory[];
  }
  const [productQuantities, setProductQuantities] = useState<
    {
      id: string;
      quantity: number;
    }[]>();

  async function getProducts() {
    const response = await axiosClient.get("/products");
    setProductQuantities(
      response.data.map((i: any) => ({
        id: i.id,
        quantity: i.quantity,
      }))
    );
    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }

  const reviews = [
    {
      id: 1,
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/09/30/obo_customs_400x141.png",
      link: "",
    },
    {
      id: 2,
      link: "",
      image: "https://nexusautomn.s3.amazonaws.com/media/order/uploads/2022/02/13/supply-solution.png",
    },
  ];
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Захиалга</h5>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="brand" value="Брэнд" />
                  </div>
                  <Select>
                   {supplier?.map((i) => (
                    <option value={i.id}>
                      {i.supplierList}
                    </option>
                   ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Ангилал" />
                  </div>
                  <Select>
                    {productCategory?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <TextInput id="search" type="search" placeholder="Хайх" />
                </div>
              </div>
            </div>
            {/* category, sub category */}
            <div className="w-48">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                  {productCategory?.map((i) => (
                      <Label htmlFor="category" value={i.en} />
                    ))}
                  </div>
                  <Select>
                    {productSub?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    {productCategory?.map((i) => (
                      <Label htmlFor="category" value={i.en} />
                    ))}
                  </div>
                  <Select>
                    {productSub?.map((i) => (
                      <option value={i.id}>
                        {i.en}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
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

            {/* сэлбэгийн жагсаалт */}
            <div className="p-4">
              <Card>
                <Table>
                  <Table.Head className="uppercase">
                    {/* <Table.HeadCell>Бүтээгдэхүүний ангилал</Table.HeadCell> */}
                    <Table.HeadCell>Парт дугаар</Table.HeadCell>
                    <Table.HeadCell>Тайлбар</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                    <Table.HeadCell>Валют</Table.HeadCell>
                    <Table.HeadCell>Fitting</Table.HeadCell>
                    <Table.HeadCell>Тоо, ширхэг сонгох</Table.HeadCell>
                    <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>

                  <Table.Body>
                    {data?.map((i: any) => (
                      <Table.Row>
                        {/* <Table.Cell>{i.productCategoryId.map((j) => j.en).join(",")}</Table.Cell> */}
                        <Table.Cell>{i.part_number}</Table.Cell>
                        <Table.Cell>{i.description}</Table.Cell>
                        <Table.Cell>{i.netPrice}</Table.Cell>
                        <Table.Cell>{i.currency}</Table.Cell>
                        <Table.Cell>{i.fittingPostion}</Table.Cell>

                        <Table.Cell>{i.quantity}
                          {/* <TextInput
                            onChange={(e) =>
                              setProductQuantities((l) =>
                                l?.map((j) => {
                                  if (j.id === i.id) {
                                    return {
                                      ...j,
                                      quantity: +e.currentTarget,
                                    };
                                  } else {
                                    return j;
                                  }
                                })
                              )
                            }
                            type="number"
                          /> */}
                        </Table.Cell>
                        <Table.Cell>
                          <Button className="bg-blue-500">
                            <FontAwesomeIcon icon={faCartShopping} />
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-span">
          <div className="p-2">
            <Card className="max-w-sm">
              <h1 className="text-1xl">Сагс</h1>
              <div className="w-50">
                <ListGroup>
                  {data?.map((i: any) => (
                    <ListGroup.Item>
                      Парт дугаар: {i.part_number}
                      <ListGroup.Item></ListGroup.Item>
                      Тайлбар: {i.description}
                      <ListGroup.Item></ListGroup.Item>
                      Нэгжийн үнэ: {i.netPrice}
                      <ListGroup.Item></ListGroup.Item>
                      Валют: {i.currency}
                      <ListGroup.Item></ListGroup.Item>
                      Fitting: {i.fittingPostion}
                      <ListGroup.Item></ListGroup.Item>
                      Тоо, ширхэг: {i.quantity}
                      {/* <TextInput
                            onChange={(e) =>
                              setProductQuantities((l) =>
                                l?.map((j) => {
                                  if (j.id === i.id) {
                                    return {
                                      ...j,
                                      quantity: +e.currentTarget,
                                    };
                                  } else {
                                    return j;
                                  }
                                })
                              )
                            }
                            type="number"
                          /> */}
                      <ListGroup.Item></ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                      Нийт үнэ: {i.netPrice * i.quantity}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                &nbsp;
                <a href="/messej">
                  <Button className="bg-blue-500">Захиалга үүсгэх</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Zahialga;
