import { TextInput, Button, Table, Avatar} from "flowbite-react";
import Layout from "../../../components/layout";
import { useState } from "react";

const EmployeeHistory = () => {
    const [showSearch, setShowSearch] = useState(false);
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
                        Ажилтны дугаар
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Овог нэр
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Утасны дугаар
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Хүйс
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Хэлтэс
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Мэргэжил
                       </Table.HeadCell>
                       <Table.HeadCell>
                        Ажилд орсон он сар
                       </Table.HeadCell>
                      
                    </Table.Head>
                    <Table.Body> 
                        <Table.Row>
                            <Table.Cell>
                                <Avatar src="" />
                            </Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>Example</Table.Cell>
                            <Table.Cell>12345678</Table.Cell>
                            <Table.Cell>Эм</Table.Cell>
                            <Table.Cell>Хөгжүүлэгч</Table.Cell>
                            <Table.Cell>IT Enginer</Table.Cell>
                            <Table.Cell>
                                <TextInput type="date" id="date_time"/>
                            </Table.Cell>
                            
                            
                        </Table.Row>
                    </Table.Body>
                </Table>
             </div>
           </div>
        </Layout>
    );
}
export default EmployeeHistory;