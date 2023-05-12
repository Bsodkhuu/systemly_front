import React from "react";
import Layout from "../../../components/layout";
import { Button, Table } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Product } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { data: product } = useQuery("getProduct", getProduct);

  async function getProduct() {
    const response = await axiosClient.get("/products");
    return response.data as Product[];
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Сагс</h4>
          </div>
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Үйлдвэрлэгч</Table.HeadCell>
              <Table.HeadCell>Бүтээгдэхүүний код</Table.HeadCell>
              <Table.HeadCell>Бүтээгдэхүүний нэр</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Бүтээгдэхүүний хэмжих нэгж</Table.HeadCell>
              <Table.HeadCell>Үндсэн үнэ</Table.HeadCell>
              <Table.HeadCell>Тээврийн хэрэгсэл төрөл</Table.HeadCell>
              <Table.HeadCell>Тээврийн хэрэгсэл</Table.HeadCell>
              <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
              <Table.HeadCell>Үйлдэл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {product?.map((product: Product, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{product.manufacturerId}</Table.Cell>
                  <Table.Cell>{product.productCode}</Table.Cell>
                  <Table.Cell>{product.productName}</Table.Cell>
                  <Table.Cell>{product.productDescription}</Table.Cell>
                  <Table.Cell>{product.prodmetric.typeId}</Table.Cell>
                  <Table.Cell>{product.priceMain}</Table.Cell>
                  <Table.Cell>{product.vehicleType}</Table.Cell>
                  <Table.Cell>{product.nameEng}</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <a href="/messej">
                      <Button className="bg-orange-500">
                      <FontAwesomeIcon icon={faShoppingCart}/>
                      </Button>
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  )
};

export default Cart;
