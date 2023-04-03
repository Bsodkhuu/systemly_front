import Layout from "../../components/layout";
import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  Select,
  ListGroup,
  Avatar,
  Dropdown, Textarea, FileInput, Checkbox
} from "flowbite-react";

import {useState, useEffect} from "react";

  const Human = ()=> {

    const [showModal, setShowModal] = useState(false);
    const [showSearch, setShowSearch] = useState();
    const [employee, setEmployee] = useState({
      employee_ovog: '', 
      employee_name: '',
      phone: '', 
      email: '',
      image: '',
    });

    const [employeeList, setEmployeeList] = useState([]);
    
    function openModal(){
      setShowModal(true);
    }
    function closeModal() {
      setShowModal(false);
    }

    function createHuman(){
      console.log("employee");
      console.log(employee);
      fetch("http://localhost:3000/human/aff", {
        method: "POST", 
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(employee)
      }).then(res => res.json()).then(data => {
        console.log(data);
      })
      closeModal();
    }

    //employee get

    function fetchData(){
      console.log("нийт ажилчдын бүртгэл");
      fetch("http://localhost:3000/human/gishuun", {
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        setEmployeeList(data);
      });
    }

    useEffect(() => {
      fetchData();
    }, [""]);

    

    function onChangeEmployeeName(event){
      employee.employee_name = event.target.value;
    }
    function onChangeEmployeeOvog(event){
      employee.employee_ovog = event.target.value;
    }
    function onChangePhone(event){
      employee.phone = event.target.value;
    }
    function onChangeEmployeeEmail(event){
      employee.email = event.target.value;
    }
    function onChangeEmployeeImage(event){
      employee.image = event.target.value;
    }
    function onChangeEmployeePosition(event){
      employee.position_name = event.target.value;
    }
    function onChangeEmployeeNumbers(event){
      employee.register_number = event.target.value;
    }
    function search(){
      setShowSearch();
    }

   
    // function checkAllEmployees(event) {
    //   const employeeRows = Array.from(document.getElementsByClassName('employee_row'));
    //   employeeRows.forEach((row) => {
    //     var checkbox = row.childNodes[0].childNodes[0];
    //     if (event.target.checked == false) {
    //       checkbox.checked = false;
    //     } else {
    //       checkbox.checked = true;
    //     }
    //   });
    // }
    // function checkAllServices(event) {
    //   const serviceRows = Array.from(document.getElementsByClassName('service_row'));
    //   serviceRows.forEach((row) => {
    //     var checkbox = row.childNodes[0].childNodes[0];
    //     if (event.target.checked == false) {
    //       checkbox.checked = false;
    //     } else {
    //       checkbox.checked = true;
    //     }
    //   });
    // }
/*    function employeeChecked(event, register) {
      console.log(event.target.checked);
      console.log(register);
      var foundEmployee = employeeList.find((employee) => employee.register == register);
      foundEmployee.checked = event.target.checked;
      console.log(employeeList);
    }
*/
    // function employeeService() {
    //   const employeeRows = Array.from(
    //     document.getElementsByClassName('employee_row')
    //   );
    //   var tempList = [];
    //   employeeRows.forEach(employee => {
    //     var checked = employee.childNodes[0].childNodes[0].checked;
    //     if (checked == true) {
    //       var foundServices = serviceList.filter(service => service.employeeId == employee.id);
    //       tempList = tempList.concat(foundServices);
    //     }
    //   });
    //   setShowServiceList(tempList);
    // }

    // function serviceDetails() {
    //   const serviceRows = Array.from(document.getElementsByClassName('service_row'));
    //   var tempList = [];
    //   serviceRows.forEach(serviceNode => {
    //     var checked = serviceNode.childNodes[0].childNodes[0].checked;
    //     if (checked == true) {
    //       var foundServices = serviceList.filter(service => service.id == serviceNode.id);
    //       tempList = tempList.concat(foundServices);
    //     }
    //   });
    //   setShowServiceDetailList(tempList);
    // }
    // function checkService(event, id) {
    //   console.log(event.target.checked);
    //   var foundService = serviceList.find((service) => service.id == id);
    //   foundService.checked = event.target.checked;
    // }
    return(
      <Layout> 
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Ажилчид нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="employee_ovog" value="Овог" />
                  </div>
                  <TextInput id="employee_ovog"
                    onChange={onChangeEmployeeOvog}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="employee_name" value="Нэр"/>
                  </div>
                  <TextInput id="firstName" type="text"
                    onChange={onChangeEmployeeName}/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Утасны дугаар" />
                  </div>
                  <TextInput id="phone"
                    onChange={onChangePhone}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Имэйл"/>
                  </div>
                  <TextInput id="email"
                    onChange={onChangeEmployeeEmail}/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="register_number" value="Регистрийн дугаар" />
                  </div>
                  <TextInput id="register_number"
                    onChange={onChangeEmployeeNumbers}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="image" value="Ажилчдын зураг" /> 
                  </div>
                  <FileInput id="image"
                    onChange={onChangeEmployeeImage}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="position_name" value="Албан тушаал"/>
                  </div>
                  <TextInput type="position_name"
                    onChange={onChangeEmployeePosition}/>
                </div>
                
              </div>
              
            </form>
          </Modal.Body>
          <Modal.Footer> 
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={createHuman} className="bg-blue-500">
              Хадгалах
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="p-4 bg-gray-200 h-screen w-full">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between mb-4">
              <h4 className="text-1xl">Ажилчид</h4>
             
              <div className="flex gap-4">
                <TextInput id="startDate" type="date"/>
                -
                <TextInput id="endDate" type="date"/>
                <Button className="bg-blue-500" onClick={search}>
                  Хайх
                </Button>
                <Button className="bg-blue-500" onClick={openModal}>
                Ажилчид нэмэх
              </Button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Ажилчдын жагсаалт</h4>
                  <div className="flex gap-4">
                    <a href="#">Идэвхитэй</a>
                    <a href="/employee_history">Түүх</a>
                    <Button className="bg-blue-500">Үйлчилгээ</Button>
                  </div>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>
                        <Checkbox/>
                      </Table.HeadCell>
                      
                      <Table.HeadCell>Овог</Table.HeadCell>
                      <Table.HeadCell>Нэр</Table.HeadCell>
                      <Table.HeadCell>Мэргэжил</Table.HeadCell>
                      <Table.HeadCell>Ажилтаны зураг</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {
                        employeeList.map((employee, index)=>
                        <Table.Row key={index}>
                          <Table.Cell>
                           <Checkbox/>
                          </Table.Cell>
                         
                          <Table.Cell>
                            {employee.employee_ovog}
                          </Table.Cell>
                          <Table.Cell>
                            {employee.employee_name}
                          </Table.Cell>
                          <Table.Cell>
                            {employee.position_name}
                          </Table.Cell>
                          <Table.Cell>
                            {employee.image}
                          </Table.Cell>
                        </Table.Row>)
                      }
                    </Table.Body>
                  </Table>
                </Card>
                </div>
              <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Хийсэн үйлчилгээний жагсаалт</h4>
                 
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>
                        <Checkbox/>
                      </Table.HeadCell>
                      <Table.HeadCell>Захиалгын дугаар</Table.HeadCell>
                      <Table.HeadCell>Улсын дугаар</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                    
                          <Table.Row>
                            <Table.Cell>
                              <Checkbox/>
                            </Table.Cell>
                            <Table.Cell>
                              12345
                            </Table.Cell>
                            <Table.Cell>
                              12345EDS
                            </Table.Cell>
                          </Table.Row>
                       
                    </Table.Body>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
            <div className="p-4">
                <Card>
                  <h4 className="text-1xl">Үйлчилгээний дэлгэрэнгүй</h4>
                  <Table> 
                    <Table.Head className="uppercase">
                      {/* mexanikin hiisen ajlin dvn  */}
                      <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                      <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
                      <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
                      <Table.HeadCell>Үйлчилгээ хийсэн механикч</Table.HeadCell>
                      <Table.HeadCell>Хямдрал</Table.HeadCell>
                      <Table.HeadCell>Нийт</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                     
                          <Table.Row>
                            <Table.Cell>
                              example
                            </Table.Cell>
                            <Table.Cell>
                             1
                            </Table.Cell>
                            <Table.Cell>
                             12.45
                            </Table.Cell>
                            <Table.Cell>
                             example
                            </Table.Cell>
                            <Table.Cell>
                             12%
                            </Table.Cell>
                            <Table.Cell>
                              Үнэ
                            </Table.Cell>
                          </Table.Row>
                    </Table.Body>
                  </Table>
                </Card>
              </div>
        </div>
      </Layout>
    );
  }
export default Human;
