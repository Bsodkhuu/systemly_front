
import { TextInput, Button, Carousel, Card, Table, Select, Label, Avatar, ListGroup} from "flowbite-react";
import Layout from "../../components/layout";
import Cart from "../Order/Cart/index"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const Zahialga = () => {

  
  const [showSearch, setSearch] = useState(false);
  const [showCancel, setCancel] = useState(false);

  function Haih(){
      //fetch api
     setSearch(true);
  }
  function cancel(){
    //fetch api
   setCancel(true);
}
const reviews = [
  {
     id: 1, 
     image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
     link:"" 
  },
  {
     id: 2, 
     link:"",
     image: "https://flowbite.com/docs/images/carousel/carousel-1.svg", 
  },
];
  return (
    <Layout> 
        <div className="p-4 bg-gray-200 h-screen w-full"> 
         <div className="bg-white p-6 rounded-lg">
           <div className="flex justify-between mb-4"> 
            <h5 className="text-1xl">Захиалга</h5>
            <a href="/inquiry">
            <h5 className="text-1xl">Inquiry</h5>
            </a>
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
           <div className="grid grid-cols-2 ">
            <div className="col-span-2"> 
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> 
                  <Carousel> 
                   {reviews.map(review => (
                       <img className="d-block w-50" 
                       src={review.image}
                       alt={review.link} />
                   ))}
                  </Carousel>
                </div>
            </div> 
            {/* Захиалга */}
            <div className="p-4"> 
              <Card>
              <Table> 
                <Table.Head className="uppercase"> 
                <Table.HeadCell>Сериал</Table.HeadCell>
                 <Table.HeadCell>Брэнд</Table.HeadCell>
                 <Table.HeadCell>OE</Table.HeadCell>
                 <Table.HeadCell>Партын дугаар</Table.HeadCell>
                 <Table.HeadCell>Тайлбар</Table.HeadCell>
                 <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                 <Table.HeadCell>Валют</Table.HeadCell>
                 <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                 <Table.HeadCell>Үйлдэл</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y"> 
                <Table.Row> 
                <Table.Cell>EK508</Table.Cell>
                  <Table.Cell>
                    <Avatar src="" />
                  </Table.Cell>
                  <Table.Cell>12345</Table.Cell>
                  <Table.Cell>Meyle</Table.Cell>
                  <Table.HeadCell>OE</Table.HeadCell>
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
              </Card>
            
            </div>

            {/* Сагс */}
              
              <Cart/>
            {/* захиалга үүсгэх  */}
           </div>
         </div>
        </div>
    </Layout>
  );
}


export default Zahialga;


