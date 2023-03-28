
import { TextInput, Button, Carousel, Card, Table, Select, Label, Avatar, ListGroup} from "flowbite-react";
import Layout from "../../components/layout";
import Cart from "../Order/Cart/index"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const Zahialga = () => {

  
  const [showSearch, setSearch] = useState(false);
  const [showCancel, setCancel] = useState(false);
 
  const [order, setOrder] = useState({
    serial: '', 
    oe_brand: '',
    part_number: '',
    description: '',
    net_price: '',
    currency: '',
    fitting: '', 
    too: '',
  });

  function cart(){
    console.log("Захиалга post request");
    console.log(order);

    fetch("http://localhost:3000/order/zahialga", {
      method: "POST", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(order)
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
  }

  function onChangeSerial(event){
    order.serial = event.target.value;
  }

  function onChangeOe(event){
    order.oe_brand = event.target.value;
  }

  function onChangePart(event){
    order.part_number = event.target.value;
  }

  function onChangeDesc(event){
    order.description = event.target.value;
  }

  function onChangeNetPrice(event) {
    order.net_price = event.target.value;
  }

  function onChangeCurrency(event){
    order.currency = event.target.value;
  }

  function onChangeFitting(event){
    order.fitting = event.target.value;
  }

  function onChangeToo(event){
    order.too = event.target.value
  }

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
                    <Table.HeadCell>Сериал</Table.HeadCell>
                    <Table.HeadCell>OE Брэнд</Table.HeadCell>
                    <Table.HeadCell>Партын дугаар</Table.HeadCell>
                    <Table.HeadCell>Тайлбар</Table.HeadCell>
                    <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                    <Table.HeadCell>Валют</Table.HeadCell>
                    <Table.HeadCell>Fitting</Table.HeadCell>
                    <Table.HeadCell>Тоо, ширхэг сонгох</Table.HeadCell>
                    <Table.HeadCell>Үйлдэл</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeSerial} />
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeOe}/>
                        {/* niilegchin brendin ner orj irnee */}
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangePart} />
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeDesc} />
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeNetPrice}/>
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeCurrency} />
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="text" onChange={onChangeFitting}/>
                      </Table.Cell>
                      <Table.Cell>
                        <TextInput type="number" onChange={onChangeToo}/>
                      </Table.Cell>
                      <Table.Cell>
                        <Button className="bg-blue-500" onClick={cart}>
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card>
            </div>
          </div>
          </div> 
        <div className="col-span">
          <Cart/>
        </div>
      </div>
        
    </Layout>
  );
}


export default Zahialga;


