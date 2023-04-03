import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput
} from "flowbite-react";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [customer, setCustomer] = useState({
    lastName: '', 
    firstName: '', 
    phone_number: '',
    email: ''
  });
  const [customerList, setCustomerList] = useState([]);
  const [vehicleMake, setVehicleMake] = useState({
    make_id:"", 
    model_name: "", 
    vehicle_class_id:"",
    vehicle_body_type_id:"", 
  });
  const [vehicleMakeModels, setVehicleMakeModels] = useState([]);


  //garage customer vehicles 

  const [customerVehicles, setCustomerVehicles] = useState({
    vin_number: '',
    license_plate_number: ''
  });
  const [vehicleList, setVehicleList] = useState([]);
  //garage customer vehicles 
  function fetchData2(){
    fetch("http://localhost:3000/customers/auto", {
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
      setVehicleList(data);
    })
  }
  useEffect(() => {
    fetchData2();
   }, [""]);

   // vehicle make models 
  function fetchData1(){
    fetch("http://localhost:3000/customers/vehiclemake", {
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      },
    }).then(res => res.json()).then(data => {
      console.log(data);
      setVehicleMakeModels(data);
    })
  }
  useEffect(() => {
   fetchData1();
  }, [""]);

  
  //customers 
  function fetchData(){
    fetch("http://localhost:3000/customers",{
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      },

    }).then(res => res.json()).then(data => {
      console.log(data);
      setCustomerList(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [""]);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function createCustomer() {
    openModal();
    console.log("customers nemeh");

    fetch("http://localhost:3000/customers/hereglegch", {
      method: "POST", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify(customer)
    }).then(res => res.json()).then(data => {
      console.log(data);
    });
   closeModal();
  }
  function search() {
    // fetch('/api/customer')
    setShowSearch();
  }
  function onFirstName(event){
    customer.firstName = event.target.value;
  }

  function onLastName(event){
    customer.lastName = event.target.value;
  }

  function onEmail(event){
    customer.email = event.target.value;
  }

  function onPhone(event){
    customer.phone_number = event.target.phone_number;
  }

  return (
    <Layout>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Харилцагч нэмэх</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="Овог" />
                </div>
                <TextInput id="firstName" onChange={onFirstName}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Нэр" />
                </div>
                <TextInput id="lastName" onChange={onLastName}/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Утасны дугаар" />
                </div>
                <TextInput id="phone" onChange={onPhone}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Имэйл"/>
                </div>
                <TextInput id="email" onChange={onEmail} />
              </div>
              </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} className="bg-gray-400">
            Буцах
          </Button>
          <Button onClick={createCustomer} className="bg-blue-500">
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="grid grid-cols-3 gap-4">
      <div className="p-2 bg-gray-200 h-screen col-span-2">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between mb-4">
          <h4 className="text-1xl">Харилцагчийн бүртгэл</h4>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Улсын,арлын,утасны дугаараар хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
              <Button className="bg-blue-500" onClick={openModal}>
                Харилцагч нэмэх
              </Button>
              <a href="/transport">
                <Button className="bg-blue-500">
                  Тээврийн хэрэгсэл нэмэх
                </Button>
              </a>
            </div>
          </div>
       


       {/* owner, vehicle search and details  */}

       <div className="grid grid-cols-2">
        <div className="p-2">
          <Card className="max-w-sm"> 
            <h5 className="text-1xl">Харилцагчийн жагсаалт</h5>
           <div className="flex gap-4">
            <TextInput id="search" type="search" placeholder=" Хэрэглэгч хайх"/>
            <Button className="bg-blue-500" onClick={search}>Хайх</Button>
           </div>
            <Table> 
              <Table.Head className="uppercase"> 
                {/* <Table.HeadCell></Table.HeadCell> */}
                 <Table.HeadCell>Овог</Table.HeadCell>
                 <Table.HeadCell>Нэр</Table.HeadCell>
                 <Table.HeadCell>Утасны дугаар</Table.HeadCell>
                
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row>
                  {/* <Table.Cell> 
                    <Checkbox/> */}
                    {/* <Checkbox /> hariltsagchin jagsaaltaas songohod  ezemshigchin delgerendvi deer shuud haragdana */}
                  {/* </Table.Cell> */}
                  <Table.Cell>М.</Table.Cell>
                  <Table.Cell>М.</Table.Cell>
                  <Table.Cell>80156917</Table.Cell>
                </Table.Row>
                
              </Table.Body>
              <Table.Body>
                {
                  customerList.map((customer, index) => 
                  <Table.Row key={index}>
                    <Table.Cell>
                      {customer.firstName}
                    </Table.Cell>
                    <Table.Cell>
                      {customer.lastName}
                    </Table.Cell>
                    <Table.Cell>
                      {customer.phone_number}
                    </Table.Cell>
                  </Table.Row>)
                }
              </Table.Body>
            </Table>
          </Card>
        </div>
        <div className="p-2">
          <Card className="max-w-sm"> 
            <h5 className="text-1xl">Тээврийн хэрэгслийн жагсаалт</h5>
              <div className="flex gap-4">
               <TextInput id="search" type="search" placeholder="Тээврийн хэрэгсэл хайх"/>
               <Button className="bg-blue-500" onClick={search}>Хайх</Button>
              </div>
            <Table>
              <Table.Head className="uppercase">
                <Table.HeadCell>Загвар</Table.HeadCell>
                <Table.HeadCell>Модел</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {vehicleMakeModels.map((vehicleMake, index) => 
                <Table.Row key={index}>
                  <Table.Cell>
                    {vehicleMake.make_id}
                  </Table.Cell>
                  <Table.Cell>
                    {vehicleMake.model_name}
                  </Table.Cell>
                 
                </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Card>
          </div>
       </div>
    </div>
  </div>
      <div className="col-span">
      <div className="p-2">
          <Card> 
            <h5 className="text-1xl">Автомашины дэлгэрэнгүй </h5>
            <div className="flex gap-4">
               <TextInput id="search" type="search" placeholder="Автомашин хайх"/>
               <Button className="bg-blue-500" onClick={search}>Хайх</Button>
              </div>
            <a href="/zaswar_service">
              <Button className="bg-blue-500">
                Засвар эхлүүлэх
              </Button>
            </a>
            <Table>
              <Table.Head className="uppercase"> 
                 <Table.HeadCell>Vin дугаар</Table.HeadCell>
                 <Table.HeadCell>Төрөл</Table.HeadCell>
                 <Table.HeadCell>Үйлдвэрлэсэн он</Table.HeadCell>
                 <Table.HeadCell>Импортлосон он</Table.HeadCell>
                 <Table.HeadCell>Өнгө</Table.HeadCell>
                 <Table.HeadCell>Улсын дугаар</Table.HeadCell>

              </Table.Head>
              <Table.Body className="divide-y">
                {vehicleList.map((customerVehicles, index) => 
                <Table.Row key={index}>
                  <Table.Cell>
                    {customerVehicles.vin_number}
                  </Table.Cell>
                  <Table.Cell>
                    {/* torol */}
                    {customerVehicles.vin_number}
                  </Table.Cell>
                  <Table.Cell>
                    {customerVehicles.manufactured_year}
                  </Table.Cell>
                  <Table.Cell>
                    {customerVehicles.imported_year}
                  </Table.Cell>
                  <Table.Cell>
                   {/* ongo */}
                    {customerVehicles.imported_year}
                  </Table.Cell>
                  <Table.Cell>
                    {customerVehicles.license_plate_number}
                  </Table.Cell>
                </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Card>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customer;

