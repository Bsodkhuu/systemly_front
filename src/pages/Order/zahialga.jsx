
import { TextInput, Button, Carousel, Card, Table, Select, Label, Avatar, ListGroup} from "flowbite-react";
import Layout from "../../components/layout"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../config/axios";

const Zahialga = () => {
  const [showSearch, setSearch] = useState(false);
 
  const {data, isLoading} = useQuery("products", getProducts);

    async function getProducts(){
      const response = await axiosClient.get("/products");
      return response.data;
    }

    if(isLoading){
      return <Layout></Layout>
    }

    console.log(data);
  
  function Haih(){
      //fetch api
     setSearch(true);
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
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h5 className="text-1xl">Захиалга</h5>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="brand" value="Брэнд"/>
                  </div>
                  <Select id="brand">
                    <option value="meyle">Meyle</option>
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
            {/* category, sub category */}
            <div className="w-48">
               <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Engine"/>
                  </div>
                  <Select id="category" required={true}>
                    <option value="gasket">Gasket timing case</option>
                  </Select>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Engine"/>
                  </div>
                  <Select id="category" required={true}>
                    <option value="gasket">Gasket timing case</option>
                  </Select>
                </div>
               </div>
              </div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> 
                  <Carousel> 
                   {reviews.map(review => (
                       <img className="d-block w-50" 
                       src={review.image}
                       alt={review.link} />
                   ))}
                  </Carousel>
                </div>
               
            {/* сэлбэгийн жагсаалт */}
            <div className="p-4">
              <Card> 
                <Table> 
                  <Table.Head className="uppercase">
                   
                    {/* <Table.HeadCell>Бүтээгдэхүүний ангилал</Table.HeadCell> */}
                    <Table.HeadCell>Парт дугаар</Table.HeadCell>
                    <Table.HeadCell>Тайлбар</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                    <Table.HeadCell>Валют</Table.HeadCell>
                    <Table.HeadCell>Fitting</Table.HeadCell>
                    <Table.HeadCell>Тоо, ширхэг сонгох</Table.HeadCell>
                    <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>

                  <Table.Body>
                    {data?.map((i) => (
                      <Table.Row>
                        {/* <Table.Cell>{i.productCategoryId.map((j) => j.en).join(",")}</Table.Cell> */}
                        <Table.Cell>{i.part_number}</Table.Cell>
                        <Table.Cell>{i.description}</Table.Cell>
                        <Table.Cell>{i.netPrice}</Table.Cell>
                        <Table.Cell>{i.currency}</Table.Cell>
                        <Table.Cell>{i.fittingPostion}</Table.Cell>
                       
                        <Table.Cell>
                        <TextInput type="number"/>
                        </Table.Cell>
                        <Table.Cell>
                        <Button className="bg-blue-500" onClick={getProducts}>
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                      </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                  
                </Table>
              </Card>
            </div>
          </div>
          </div> 
        <div className="col-span">
        <div className="p-2"> 
        <Card className="max-w-sm"> 
           <h1 className="text-1xl">Сагс</h1>
             <div className="w-50"> 
              <ListGroup>
                {data?.map((i) => (
                 <ListGroup.Item>
                  Парт дугаар: {i.part_number}
                  <ListGroup.Item></ListGroup.Item>
                  Тайлбар: {i.description}
                  <ListGroup.Item></ListGroup.Item>
                  Нэгжийн үнэ: {i.netPrice}
                  <ListGroup.Item></ListGroup.Item>
                  Валют: {i.currency}
                  <ListGroup.Item></ListGroup.Item>
                  Fitting: {i.fittingPostion}
                  <ListGroup.Item></ListGroup.Item>
                  Тоо, ширхэг: {i.quantity}
                  <ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item></ListGroup.Item>
                  Нийт үнэ: {i.subtotal}
                  </ListGroup.Item>
                ))}
            </ListGroup>
             &nbsp;
            <a href="/messej"> 
            <Button  className="bg-blue-500"> 
              Захиалга үүсгэх
            </Button>
            </a>
            </div>
        </Card>
    </div>
        </div>
      </div>
        
    </Layout>
  );
}


export default Zahialga;


