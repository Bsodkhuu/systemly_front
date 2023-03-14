import { TextInput, Table } from "flowbite-react";
import Layout from "../../components/layout";

const ServiceHistory = () => {
  return(
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl">Түүх харах</h1>
          <div className="flex gap-4"> 
          <TextInput id="search" type="search" placeholder="Хайх"/>
         
          </div>
        </div>
        <Table>
          <Table.Head className="uppercase">
            <Table.HeadCell>Загвар</Table.HeadCell>
            <Table.HeadCell>Маяг</Table.HeadCell>
            <Table.HeadCell>Үйлчилгээ авсан он сар</Table.HeadCell>
            
            <Table.HeadCell>Үйлчилгээний төрөл</Table.HeadCell>
            <Table.HeadCell>Ажил гүйцэтгэсэн ажилтан</Table.HeadCell>
            <Table.HeadCell>Тоо хэмжээ</Table.HeadCell>
            <Table.HeadCell>Үйлчилгээний үнэ</Table.HeadCell>
            <Table.HeadCell>Зардал</Table.HeadCell>
            <Table.HeadCell>Хөнгөлөлт</Table.HeadCell>
            <Table.HeadCell>Нийт дүн</Table.HeadCell>
          </Table.Head>
          <Table.Body className="dividy-y"> 
          <Table.Row> 
            <Table.Cell>1</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>2023.01.11</Table.Cell>
            <Table.Cell>q</Table.Cell>
            <Table.Cell>нэр</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>120,000</Table.Cell>
            <Table.Cell>100,000</Table.Cell>
            <Table.Cell>120,000</Table.Cell>
            
          </Table.Row>
          </Table.Body>
        </Table>
        </div> 
    </div>
    </Layout>
  );

}

export default ServiceHistory;
