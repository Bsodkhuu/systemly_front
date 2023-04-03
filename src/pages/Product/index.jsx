import { useState } from "react";
import Layout from "../../components/layout";
import { useEffect } from "react";
import { Table } from "flowbite-react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const p = await fetch("http://localhost:4000/product_categories");
      const data = await p.json();

      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <Layout>
      <Table>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>En</Table.HeadCell>
          <Table.HeadCell>SubCategories</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {products.map((i) => (
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
