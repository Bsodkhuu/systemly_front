import Layout from "../../components/layout";
import { Table } from "flowbite-react";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";

const ProductPage = () => {
  const { data, isLoading } = useQuery("products", getProducts);

  async function getProducts() {
    const response = await axiosClient.get("/product_categories");

    return response.data;
  }

  if (isLoading) {
    return <Layout></Layout>;
  }

  console.log(data);

  return (
    <Layout>
      <Table>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>En</Table.HeadCell>
          <Table.HeadCell>SubCategories</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data?.data.map((i) => (
            <Table.Row>
              <Table.Cell>{i.id}</Table.Cell>
              <Table.Cell>{i.en}</Table.Cell>
              <Table.Cell>
                {i.productSubCategories.map((j) => j.en).join(", ")}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
};

export default ProductPage;
