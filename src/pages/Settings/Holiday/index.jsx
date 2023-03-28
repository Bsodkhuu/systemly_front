import { TextInput, Button, Table} from "flowbite-react";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Holiday = () => {
  const [holiday, setHoliday] = useState({
    description: '',
  });

  const [holidayList, setHolidayList] = useState([]);


  function save(){
    console.log("бүх нийтийн амралт post request шүү");
    console.log(holiday);

    fetch("http://localhost:3000/settings/amralt",{
      method: "POST", 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(holiday)
    }).then(res => res.json()
    ).then(data => {
      console.log(data);
    });
  }
  
  function onChangeDescription(event){
    holiday.description = event.target.value;
  }


  function fetchData(){
    console.log("бүх нийтийн амралт get request шүү");

    fetch("http://localhost:3000/settings/holidays",{
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()
    ).then(data =>{
      console.log(data);
      setHolidayList(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [""]);

    return(
        <Layout>
             <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
            </div>
           </div>
           
           <Table> 
            <Table.Head className="uppercase"> 
              <Table.HeadCell>Эхлэх он сар</Table.HeadCell>
              <Table.HeadCell>Дуусах он сар</Table.HeadCell>
              <Table.HeadCell>Тайлбар</Table.HeadCell>
              <Table.HeadCell>Хадгалах</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell>
                  <TextInput type="date"/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="date"/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="text" onChange={onChangeDescription}/>
                </Table.Cell>
                <Table.Cell>
                  <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body className="divide-y">
              {
                holidayList.map((holiday, index) => 
                <Table.Row key={index}>
                  <Table.Cell>
                    {holiday.openDate}
                  </Table.Cell>
                  <Table.Cell>
                    {holiday.closeDate}
                  </Table.Cell>
                  <Table.Cell>
                    {holiday.description}
                  </Table.Cell>
                  <Table.Cell className="text-xl space-x-2">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrash} />
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
export default Holiday;