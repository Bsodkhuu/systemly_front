import { TextInput, Button, Table, Avatar} from "flowbite-react";
import Layout from "../../../components/layout";
import { useEffect, useState } from "react";

const EmployeeHistory = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);
    const [employee, setEmployee] = useState({
        employee_ovog: '', 
        employee_name: '',
        phone: '', 
        email: '',
        image: '',
      });
   
    function fetchData(){
        console.log("ажилчдын түүх");
        fetch("http://localhost:3000/human/gishuun",{
            headers:{
                "Content-Type":"application/json",
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
    function search() {
        // fetch('/api/customer')
        setShowSearch();
      }
    return (
        <Layout>
           <div className="p-4 bg-gray-200 h-screen w-full"> 
             <div className="bg-white p-6 rounded-lg"> 
               <div className="flex justify-between mb-4">
                <h4 className="text-1xl">Ажилтны түүх</h4>
                <div className="flex gap-4">
                    <TextInput id="search" type="search" placeholder="Хайх"/>
                    <Button className="bg-blue-500" onClick={search}>
                        Хайх
                    </Button>
                </div>
               </div>
                <Table> 
                    <Table.Head className="uppercase"> 
                       <Table.HeadCell>
                        Ажилтны зураг
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Овог 
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Нэр
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Утасны дугаар
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Мэргэжил
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Ажилд орсон он сар
                       </Table.HeadCell>
                      
                    </Table.Head>
                    <Table.Body> 
                        {
                            employeeList.map((employee, index)=> 
                            <Table.Row key={index}>
                               <Table.Cell>
                               {employee.image}
                               </Table.Cell>
                               <Table.Cell>
                               {employee.employee_ovog}
                               </Table.Cell>
                               <Table.Cell>
                               {employee.employee_name}
                               </Table.Cell>
                               <Table.Cell>
                               {employee.phone}
                               </Table.Cell>
                               <Table.Cell>
                               {employee.position_name}
                               </Table.Cell>
                               <Table.Cell>
                                {/* <TextInput type="date"  /> */}
                                {employee.created_date}
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
export default EmployeeHistory;