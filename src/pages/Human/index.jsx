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

import {useState } from "react";

  const Human = ()=> {

    const [showModal, setShowModal] = useState(false);
    const [showSearch, setShowSearch] = useState();
    const [employee, setEmployee] = useState({
      lastName: '',
      firstName: '',
      phone: '',
      email: '',
      register: '',
      profession: '',
      avatar: '',
      checked: false
    });
    const [employeeList] = useState([]);
    const [showServiceList, setShowServiceList] = useState([]);
    const [serviceList] = useState([
      {
        id: 'ID123',
        name: 'Tos solih',
        employeeId: 'RD11223345'
      },
      {
        id: 'ID12345',
        name: 'Tosnii shuur solih',
        employeeId: 'RD11223345'
      },
      {
        id: 'ID11223345',
        name: 'Buten ugaalga',
        employeeId: 'RD11223347'
      }
    ]);
    function openModal(){
      setShowModal(true);
    }
    function closeModal(){
      setShowModal(false);
    }

    function createHuman(){
      console.log(employee.lastName);
      console.log(employee.firstName);
      console.log(employee.phone);
      console.log(employee.email);
      console.log(employee.register);
      console.log(employee.profession);
      console.log(employee.avatar);
      employeeList.push({register: employee.register,
        lastName: employee.lastName,
        firstName: employee.firstName,
        profession: employee.profession,
        checked: false});
      setShowModal(false);
    }

    function search(){
      setShowSearch();
    }

    function onChangeEmployeeLastName(event) {
      employee.lastName = event.target.value;
    }
    function onChangeEmployeeFirstName(event) {
      employee.firstName = event.target.value;
    }
    function onChangeEmployeePhone(event) {
      employee.phone = event.target.value;
    }
    function onChangeEmployeeEmail(event) {
      employee.email = event.target.value;
    }
    function onChangeEmployeeRegister(event) {
      employee.register = event.target.value;
    }
    function onChangeEmployeeProfession(event) {
      employee.profession = event.target.value;
    }
    function onChangeEmployeeAvatar(event) {
      employee.avatar = event.target.value;
    }
    function employeeChecked(event, register) {
      console.log(event.target.checked);
      console.log(register);
      var foundEmployee = employeeList.find((employee) => employee.register == register);
      foundEmployee.checked = event.target.checked;
      console.log(employeeList);
    }
    function employeeService() {
      var checkedEmployees = employeeList.filter((employee) =>
        employee.checked == true);
      console.log(checkedEmployees);
      var foundService = serviceList.filter((service) =>
        checkedEmployees.find((employee) =>
          service.employeeId == employee.register));
      console.log(foundService);
      setShowServiceList(foundService);
    }
    function employeeActive() {
      console.log('active');
    }
    function employeeHistory() {
      console.log('history');
    }
    return(
      <Layout> 
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Ажилчид нэмэх</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-h-96 overflow-y-auto">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Овог" />
                  </div>
                  <TextInput id="lastName"
                    onChange={onChangeEmployeeLastName}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="Нэр"/>
                  </div>
                  <TextInput id="firstName" type="text"
                    onChange={onChangeEmployeeFirstName}/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Утасны дугаар" />
                  </div>
                  <TextInput id="phone"
                    onChange={onChangeEmployeePhone}/>
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
                    onChange={onChangeEmployeeRegister}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="image" value="Ажилчдын зураг" /> 
                  </div>
                  <FileInput id="image"
                    onChange={onChangeEmployeeAvatar}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="profession" value="Албан тушаал"/>
                  </div>
                  <TextInput type="profession"
                    onChange={onChangeEmployeeProfession}/>
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
                <TextInput id="search" type="search" placeholder="Хайх"/>
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
                    <Button onClick={employeeActive} className="bg-blue-500">Идэвхитэй</Button>
                    <Button onClick={employeeHistory} className="bg-blue-500">Түүх</Button>
                    <Button className="bg-blue-500" onClick={employeeService}>Үйлчилгээ</Button>
                  </div>
                  <Table>
                    <Table.Head className="uppercase">
                      <Table.HeadCell>
                        <Checkbox/>
                      </Table.HeadCell>
                      <Table.HeadCell>Ажилтаны зураг</Table.HeadCell>
                      <Table.HeadCell>Овог</Table.HeadCell>
                      <Table.HeadCell>Нэр</Table.HeadCell>
                      <Table.HeadCell>Мэргэжил</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {
                        employeeList.map(employee =>
                          <Table.Row key={employee.register}>
                            <Table.Cell>
                              <Checkbox onChange={() => employeeChecked(event, employee.register)}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Avatar src={employee.avatar}>
                              </Avatar>
                            </Table.Cell>
                            <Table.Cell>
                              {employee.lastName}
                            </Table.Cell>
                            <Table.Cell>
                              {employee.firstName}
                            </Table.Cell>
                            <Table.Cell>
                              {employee.profession}
                            </Table.Cell>
                          </Table.Row>
                        )
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
                      <Table.HeadCell>Үйлчилгээний нэр</Table.HeadCell>
                      <Table.HeadCell>Ажилтаны регистер</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      {
                        showServiceList.map(service =>
                          <Table.Row key={service.id}>
                            <Table.Cell>
                              {service.name}
                            </Table.Cell>
                            <Table.Cell>
                              {service.employeeId}
                            </Table.Cell>
                          </Table.Row>
                        )
                      }
                    </Table.Body>
                  </Table>
                </Card>
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
                        <Table.Cell>Example</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>10.000</Table.Cell>
                        <Table.Cell>Example</Table.Cell>
                        <Table.Cell>Calculate</Table.Cell>
                        <Table.Cell>20.000</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  export default Human;
