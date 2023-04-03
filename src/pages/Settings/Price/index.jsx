import { TextInput, Button, Select, Table, Modal, Label} from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useState, Fragment, useEffect} from "react";

const Price = () => {
  const [showSearch, setShowSearch] = useState();
  const [showActive, setShowActive] = useState();
  const [showModal, setShowModal] = useState(false);
  const [zaswarin_vne, setZaswarin_vne] = useState({
    service_type_main_category: '', 
    service_type_subcategory: '', 
    service_type_name: '',
    price: '',
    currency: ''
  });
  const [zaswarinVneList, setZaswarinVne] = useState([]);


  function Inactive(){
    {/* zaswarin idewhitei bvrtgene  */}
    // Inactive uilchilgeenii jagsaaltaas shuud hadgalah tovch daraad active ruu oruulna
    openModal();
    console.log("service");
    console.log(service);
    fetch("http://localhost:3000/settings/vne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(service)
    }).then(res => res.json()
    ).then(data => {
      console.log(data);
    });
    closeModal();
  }
  
  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function search(){
    setShowSearch();
  }
  //zaswar vne post request 
  function save(){
    console.log("Засварын үнийн post request");
    console.log(zaswarin_vne);

    fetch("http://localhost:3000/settings/vne", {
      method: "POST", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(zaswarin_vne)
    }).then(res => res.json()).then(data => console.log(data));
  }
  function onChangeMain(event){
    zaswarin_vne.service_type_main_category= event.target.value;
  }
  function onChangeSub(event){
    zaswarin_vne.service_type_subcategory = event.target.value;
  }
  function onChangeServiceName(event){
    zaswarin_vne.service_type_name = event.target.value;
  }

  function onChangePrice(event){
    zaswarin_vne.price = event.target.value;
  }
  function onCurrency(event){
    zaswarin_vne.currency = event.target.value;
  }
  //zawsarin vne data delte request 
  function ustgah(){
    console.log("засварын үнийн тохиргоо delete");

    fetch("http://localhost:3000/settings/zaswar/:id", {
      method: "DELETE", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },

    }).then(res=> res.json()).then(data => {
      console.log(data);
      setZaswarinVne(data);
    })
  }
  //zawsarin vne data put request 

  function shinechleh(){
    console.log("засварын үнийн тохиргоо put");
    fetch("http://localhost:3000/settings/zaswarvne/:id",{
      method:"PUT", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify(zaswarin_vne)
    }).then(res => res.json()).then(data => {
      console.log(data);
      setZaswarinVne(data);
    });
  }
  //zaswarin vne data get request 
  function fetchData(){
    console.log("засварын үнийн тохиргоо get");
    fetch("http://localhost:3000/settings/zaswar", {
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()).then(data => {
      console.log(data);
      setZaswarinVne(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [""]);


 
  return(
    <Layout> 
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Үйлчилгээ бүртгэх</Modal.Header>
          <Modal.Body> 
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              <div className="flex gap-4"> 
                <div className="w-1/2"> 
                  <div className="mb-2 block"> 
                    <Label htmlFor="service" value="Засвар үйлчилгээний нэр"/>
                  </div>
                  <TextInput id="service"
                    onChange={onChangeServiceName}/>
                </div>
                <div className="w-1/2"> 
                  <div className="mb-2 block"> 
                    <Label htmlFor="price" value="Үнэ"/>
                  </div>
                  <TextInput id="price"
                    onChange={onChangePrice}/>
                </div>
                <div className="w-1/2"> 
                  <div className="mb-2 block"> 
                    <Label htmlFor="currency" value="Валют" />
                  </div>
                  <TextInput id="currency"
                    onChange={onCurrency}/>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={Inactive} className="bg-gray-400">
              Хадгалах
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="p-4 bg-gray-200 h-screen w-full"> 
          <div className="bg-white p-6 rounded-lg"> 
            <div className="flex justify-between mb-4"> 
              <h4 className="text-1xl">Засварын үнийн тохиргоо</h4>
              <div className="flex gap-4"> 
                <TextInput id="search" type="search" placeholder="Хайлт"/>
                <Button className="bg-blue-500" onClick={search}>
                  Хайх
                </Button>
                <Button className="bg-blue-500" onClick={openModal}>Үйлчилгээ бүртгэх</Button>
                <a href="/active">
                  <Button className="bg-blue-500">Идэвхитэй</Button>
                </a>
              </div>
            </div>

           {/* main, sub group service service table + towch daraad mashinii torlin vne garar oruullaad hadgalah towch darah  */}
            <Table> 
              <Table.Head className="uppercase"> 
                <Table.HeadCell>
                  Main group
                </Table.HeadCell>
                <Table.HeadCell>
                  Sub group
                </Table.HeadCell>
                <Table.HeadCell>
                  Үйлчилгээний нэр
                </Table.HeadCell>
                <Table.HeadCell>
                  Том оврийн
                </Table.HeadCell>
                <Table.HeadCell>
                  SUV 
                </Table.HeadCell>
                <Table.HeadCell>
                  Дунд гарын 
                </Table.HeadCell>
                <Table.HeadCell>
                  Суудлын
                </Table.HeadCell>
                <Table.HeadCell>
                  Үйлдэл
                </Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Select>
                      <option value="" onChange={onChangeMain}>Мотор</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select>
                      <option value="" onChange={onChangeSub}>Моторын тосолгоо</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select>
                      <option value="" onChange={onChangeServiceName}>Example</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice} />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                  </Table.Cell>
                </Table.Row>
                {/* oorsdoo garaar vilchilgeeni neree oruulna shvv  */}
                <Table.Row>
                  <Table.Cell>
                    <Select>
                      <option value="" onChange={onChangeMain}>Мотор</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <Select>
                      <option value="" onChange={onChangeSub}>Моторын тосолгоо</option>
                    </Select>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="text" onChange={onChangeServiceName}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput type="number" onChange={onChangePrice}/>
                  </Table.Cell>
                  <Table.Cell>
                    <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                  </Table.Cell>
                </Table.Row>
                </Table.Body>
                <Table.Body>
                  {
                    zaswarinVneList.map((zaswarin_vne, index) => 
                    <Table.Row key={index}>
                      <Table.Cell>
                       <Select>
                       <option value="">
                       {zaswarin_vne.service_type_main_category}
                       </option>
                       
                       </Select>
                      </Table.Cell>
                      <Table.Cell>
                        <Select>
                          <option value="">
                          {zaswarin_vne.service_type_subcategory}
                          </option>
                        </Select>
                      </Table.Cell>
                      <Table.Cell>
                        <Select>
                          <option value="">
                          {zaswarin_vne.service_type_name}
                          </option>
                        </Select>
                      </Table.Cell>
                      <Table.Cell>
                        {zaswarin_vne.price}
                      </Table.Cell>
                      <Table.Cell>
                        {zaswarin_vne.price}
                      </Table.Cell>
                      <Table.Cell>
                        {zaswarin_vne.price}
                      </Table.Cell>
                      <Table.Cell>
                        {zaswarin_vne.price}
                      </Table.Cell>
                      <Table.Cell className="text-xl space-x-2">
                  <FontAwesomeIcon icon={faPenToSquare} onClick={shinechleh} />
                  <FontAwesomeIcon icon={faTrash} onClick={ustgah}/>
                </Table.Cell>
                    </Table.Row>
                    )
                  }
                
              </Table.Body>
            </Table>
           </div>
          </div>
        </Layout>
    );
}

export default Price;
