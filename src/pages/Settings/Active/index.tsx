import { TextInput, Button, Table } from "flowbite-react";
import Layout from "../../../components/layout";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const Active = () => {
  const [showSearch, setShowSearch] = useState();
  const { data: priceList } = useQuery("getPrice", getPrice);

  async function getPrice() {
    const response = await axiosClient.get("/service-types");
    return response.data;
  }

  function search() {
    setShowSearch(undefined);
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээний нэр (Идэвхитэй)</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
            </div>
          </div>
          <Table>
            <Table.Head className="uppercase">
              <Table.HeadCell>Засвар үйлчилгээний нэр</Table.HeadCell>
              <Table.HeadCell>Үнэ</Table.HeadCell>
              <Table.HeadCell>Валют</Table.HeadCell>
              {/* <Table.HeadCell>Үйлдэл</Table.HeadCell> */}
            </Table.Head>
            <Table.Body className="divide-y">
              {priceList?.map((price: any, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{price.name}</Table.Cell>
                  <Table.Cell>{price.price}</Table.Cell>
                  <Table.Cell>{price.currency}</Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                <Table.Cell>Наклад</Table.Cell>
                <Table.Cell>10000</Table.Cell>
                <Table.Cell>$</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </Layout>
  );
};
export default Active;
