import { TextInput, Button,Card, Table, Select, Label, Avatar, ListGroup} from "flowbite-react";
import Layout from "../../components/layout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Order = () => {
  const [showSearch, setSearch] = useState(false);
    
  function Haih(){
      //fetch api
     setSearch(true);
  }
  return (
    <Layout> 
        <div className="p-4 bg-gray-200 h-screen w-full"> 
         <div className="bg-white p-6 rounded-lg">
           <div className="flex justify-between mb-4"> 
            <h5 className="text-1xl">Захиалга хийх</h5>
           <div className="flex gap-4">
               <div className="w-1/2"> 
                 <div className="mb-2 block"> 
                 <Label htmlFor="brand" value="Брэнд"/>
                 </div>
                 <Select id="brand"> 
                 <option value="meyle">Meyle</option>
                 <option value="bosticon">Bosch</option>
                 </Select>
               </div>
              <div className="w-1/2"> 
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Ангилал" />
                </div>
                <Select id="category"> 
                <option value="Engine">Engine</option>
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
           {/* Category, subcategory */}
           <div className="grid grid-cols-2">
            <div className="col-span-2"> 
            
               <h1 className="text-1xl">Ангилал</h1>
            </div> 
            {/* Захиалга */}
            <div className="p-4"> 
            <div className="border"> 
              <Table className="divide-y"> 
                <Table.Head className="uppercase"> 
                 <Table.HeadCell>Брэнд</Table.HeadCell>
                 <Table.HeadCell>Партын дугаар</Table.HeadCell>
                 <Table.HeadCell>Тайлбар</Table.HeadCell>
                 <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                 <Table.HeadCell>Валют</Table.HeadCell>
                 <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                 <Table.HeadCell>Үйлдэл</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y"> 
                <Table.Row> 
                  <Table.Cell>
                    <Avatar src="" />
                  </Table.Cell>
                  <Table.Cell>12345</Table.Cell>
                  <Table.Cell>Meyle</Table.Cell>
                  <Table.Cell>10.000</Table.Cell>
                  <Table.Cell>$</Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" id="numbers"/>
                  </Table.Cell>
                  <Table.Cell className="text-xl space-x-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Table.Cell>
                </Table.Row>
                </Table.Body>
              </Table>
            </div>
            </div>

            {/* Сагс */}
            <div className="p-4"> 
            <Card className="max-w-sm"> 
            <h1 className="text-1xl">Сагс</h1>
            <div className="w-50"> 
            <ListGroup> 
              <ListGroup.Item> 
                <Avatar src=""/>
              </ListGroup.Item>
              <ListGroup.Item> 
                Партын дугаар: 12345
              </ListGroup.Item>
              <ListGroup.Item> 
                Тайлбар: Meyle
              </ListGroup.Item>
              <ListGroup.Item> 
                Нэгжийн үнэ: 50
              </ListGroup.Item>
              <ListGroup.Item> 
                Валют: $
              </ListGroup.Item>
              <ListGroup.Item> 
                Тоо ширхэг: 1
              </ListGroup.Item>
              <ListGroup.Item> 
                Нийт үнэ: 50$
              </ListGroup.Item>
            </ListGroup>
             &nbsp;
            <Button  className="bg-blue-500"> 
              Захиалга үүсгэх
            </Button>
            </div>
            </Card>
            
            </div>

           </div>
         </div>
        </div>
    </Layout>
  );
}


export default Order;