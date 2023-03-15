import { useState } from "react";
import { TextInput, Button, Card, Table, Select,Checkbox} from "flowbite-react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const My= () => {

    const [showSearch, setSearch] = useState(false);
    
    function Haih(){
        //fetch api
       setSearch(true);
    }

    function orders(){

    }
   
    return(
        <Layout>
           <div className="p-4 bg-gray-200 h-screen w-full">
             <div className="bg-white p-6 rounded-lg"> 
             <div className="flex justify-between mb-4"> 
             <h5 className="text-1xl">Миний захиалгууд</h5>
             <div className="flex gap-4"> 
             <TextInput id="search" type="search" placeholder="Хайх"/>
             <Button className="bg-blue-500" onclick={Haih}>
                Хайх
             </Button>
             </div>
             </div>
             

          <div className="grid grid-cols-2"> 
            <div className="flex p-4"> 
            <Card> 
            <h5 className="text-1xl">Захиалгийн жагсаалт</h5>
               <div className="flex gap-4"> 
             <a href="#"> 
             <Button className="bg-blue-500" onclick={orders}>
                 Идэвхитэй
               </Button> 
               </a>
               <a href="/history"> 
               <Button className="bg-blue-500">
                 Түүх
               </Button>
               </a>
               </div>

               <Table> 
               <Table.Head>
               <Table.HeadCell className="!p-4">
               <Checkbox />
              </Table.HeadCell>
                <Table.HeadCell> 
                   Захиалгийн дугаар
                </Table.HeadCell>
                <Table.HeadCell> 
                   Нийлүүлэгч
                </Table.HeadCell>
                <Table.HeadCell> 
                   Статус
                </Table.HeadCell>
               </Table.Head>
                <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell className="!p-4">
                <Checkbox />
                </Table.Cell>
                <Table.Cell>Meyle</Table.Cell>
                <Table.Cell>11111</Table.Cell>
                <Table.Cell>
                <Select>
                    <option value="zahialga hiigdej bgaa">Захиалга хийгдэж байгаа</option>
                    <option value="zahialga batalgaajuulsan">Захиалга баталгаажсан</option>
                    <option value="sawlagdaj bgaa">Савлагдаж байгаа</option>
                    <option value="teewerlelt">Тээвэрлэлт эхэлсэн</option>
                    <option value="ub">Улаанбаатарт ирсэн</option>
                    <option value="zahialagchid">Захиалагчид хүргэж өгсөн</option>
                  </Select>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
               </Table>
            </Card>
            </div>
            <div className="p-4">
              <div className="border">
                <p>Сонгосон захиалгийн дэлгэрэнгүй</p>
              </div>
              <div className="p-4"> 
              <div className="border">
              <p>Сонгосон захиалгийн замын мэдээний дэлгэрэнгүй</p>
              </div>
              </div>
            </div>
          </div>
    
             </div>
           </div>
        </Layout>
    );
}
 export default My;