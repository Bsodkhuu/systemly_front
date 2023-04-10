import Layout from "../../components/layout";
import {
  Button,
  Table,
  Label,
  Modal,
  Card,
  TextInput,
  FileInput, Checkbox
} from "flowbite-react";

import {useState} from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../config/axios";

  const Human = ()=> {

    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit } = useForm();
    const { mutateAsync } = useMutation("createCustomer", createCustomer);
    const { data: serviceHistory } = useQuery(
      "getServiceHistory",
      getServiceHistory
    );
  
    async function getServiceHistory() {
      const response = await axiosClient.get("/service_histories");
      return response.data;
    }
  
    async function createCustomer(values) {
      const response = await axiosClient.post("/affiliate_employees", values);
      return response.data;
    }
  
    async function onSubmit(values) {
      await mutateAsync(values);
      closeModal();
    }
    function openModal(){
      setShowModal(true);
    }
    function closeModal() {
      setShowModal(false);
    }

    const { data: employeesList} = useQuery("getEmployees", getEmployees);
    async function getEmployees(){
      const response = await axiosClient.get("/affiliate_employees");
      response.data;
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
                    <Label htmlFor="ovog" value="Овог" />
                  </div>
                  <TextInput id="ovog" {...register("ovog")}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Нэр"/>
                  </div>
                  <TextInput id="name" {...register("name")}/>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Утасны дугаар" />
                  </div>
                  <TextInput id="phone" {...register("phone")}/>
                </div>
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Имэйл"/>
                  </div>
                  <TextInput id="email" {...register("email")}/>
                </div>
              </div>
              <div className="flex gap-4">
              
                <div className="w-1/2">
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Албан тушаал"/>
                  </div>
                  <TextInput type="name" {...register("name")}/>
                </div>
                
              </div>
              
            </form>
          </Modal.Body>
          <Modal.Footer> 
            <Button onClick={closeModal} className="bg-gray-400">
              Буцах
            </Button>
            <Button onClick={handleSubmit(onSubmit)} className="bg-blue-500">
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
                <Button className="bg-blue-500">
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
                      
                    </Table.Head>
                    <Table.Body>
                      {employeesList?.map((affiliate, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{affiliate.ovog}</Table.Cell>
                          <Table.Cell>{affiliate.name}</Table.Cell>
                          <Table.Cell>{affiliate.position.name}</Table.Cell>
                        </Table.Row>
                      ))}
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
                       {serviceHistory?.map((serviceHistory, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{serviceHistory.service.name}</Table.Cell>
                          <Table.Cell>{serviceHistory.quantity}</Table.Cell>
                          <Table.Cell>{serviceHistory.service.price}</Table.Cell>
                          <Table.Cell>{serviceHistory.ajilGuitsetgesenAjiltan.name}</Table.Cell>
                          <Table.Cell>{serviceHistory.discount}</Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                       ))}
                    </Table.Body>
                  </Table>
                </Card>
              </div>
        </div>
      </Layout>
    );
  }
export default Human;
