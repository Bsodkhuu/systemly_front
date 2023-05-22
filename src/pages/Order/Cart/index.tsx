import React from "react";
import Layout from "../../../components/layout";
import { Button, Table, TextInput } from "flowbite-react";
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
              {/*  Cart */}
        </div>
      </div>
    </Layout>
  )
};

export default Cart;
