import React from "react";
import Layout from "../../../../components/layout";
import { useQuery } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { Product } from "../../../API";

const Product = () => {
    const {data: product } = useQuery("getProduct", getProduct);

    async function getProduct() {
        const response = await axiosClient("/products");
        return response.data as Product[];
    }
    return (
        <Layout>
            <h1>Санал болгох бүтээгдэхүүн</h1>

            
            
        </Layout>
    );
}
export default Product;