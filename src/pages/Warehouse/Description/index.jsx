import { TextInput, Button,  Card, Table, ListGroup } from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Description = () => {
    return(
        <Layout> 
            <div className="p-4 bg-gray-200 h-screen w-full"> 
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between mb-4"> 
                  <h4 className="text-1xl">Агуулах</h4>
                  <div className="flex gap-4"> 
                  <TextInput id="search" type="search" placeholder="Партын дугаар"/>
                    <Button className="bg-blue-200">
                        Хайх
                    </Button>
                  </div>
              </div>

        <div className="flex gap-4"> 
              <Card vertical={true} imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"> 
              <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                Брендын нэр
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Брендын тайлбар 
              </p>
              <div className="w-48"> 
                <ListGroup> 
                <ListGroup.Item> 
                    Статус:
                </ListGroup.Item>
                <ListGroup.Item> 
                    Байгуулагдсан он:
                </ListGroup.Item>
                <ListGroup.Item> 
                    Улс:
                </ListGroup.Item>
                <ListGroup.Item> 
                    Вебсайт:
                </ListGroup.Item>
                <ListGroup.Item> 
                    Каталоги:
                </ListGroup.Item>
                </ListGroup>
              </div>
              </Card>
              <Table> 
         <Table.Head className="uppercase">
              <Table.HeadCell>Брендын нэр</Table.HeadCell>
              <Table.HeadCell>Партын дугаар</Table.HeadCell>
              <Table.HeadCell>Улс</Table.HeadCell>
              <Table.HeadCell>Тоо</Table.HeadCell>
              <Table.HeadCell>Нэгж үнэ</Table.HeadCell>
              <Table.HeadCell>Нийт үнэ</Table.HeadCell>
              <Table.HeadCell>Үйлдэл</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell>Meyle</Table.Cell>
                <Table.Cell>11111</Table.Cell>
                <Table.Cell>Турк</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>50,000</Table.Cell>
                <Table.Cell>500,000</Table.Cell>
                <Table.Cell className="text-xl">
                 <a href="/purchase">
                 <FontAwesomeIcon icon={faCartShopping} />
                 </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
         </Table>
        </div>
            </div>
            </div>
        </Layout>
    );
}

export default Description;