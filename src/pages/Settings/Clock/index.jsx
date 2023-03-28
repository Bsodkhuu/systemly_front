import Layout from "../../../components/layout";
import { TextInput, Button, Table, Select, Checkbox } from "flowbite-react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Clock= () => {
  const [work, setWork] = useState({
    weekend: '', 
    open:'', 
    close:''
  });
  const [workList, setWorkList] = useState([]);

   //ajlin tsagin huwaari post request
    function save(){
      
      console.log("Ажлын цагийн хуваарь post request");
      console.log(work);

      fetch("http://localhost:3000/settings/work", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(work)
      }).then(res => res.json()
      ).then(data => {
        console.log(data);
      });
    }

    function onChangeWeekend(event){
      work.weekend = event.target.value;
    }

    function onChangeOpen(event){
      work.open = event.target.value;
    }

    function onChangeClose(event){
      work.close = event.target.value;
    }

  //example data get request

  function fetchData(){
    console.log("Ажлын цагийн хуваарь get");
    fetch("http://localhost:3000/settings/ajil", 
    {
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => res.json()
    ).then(data => {
      console.log(data);
      setWorkList(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [""]);
    return (
        <Layout>
           <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Ажлын цагийн хуваарь</h4>
            <a href="/holiday">
              <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            </a>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
            </div>
           </div>
            <div className="p-4"> 
              <Table>
                <Table.Head className="uppercase">
                  <Table.HeadCell>7 хоног</Table.HeadCell>
                  <Table.HeadCell>Нээх</Table.HeadCell>
                  <Table.HeadCell>Хаах</Table.HeadCell>
                  <Table.HeadCell>Ажиллах эсэх</Table.HeadCell>
                  <Table.HeadCell>Үйлдэл</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
              <Table.Row>
                <Table.Cell>
                  <TextInput type="text" onChange={onChangeWeekend}/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="time" onChange={onChangeOpen}/>
                </Table.Cell>
                <Table.Cell>
                  <TextInput type="time" onChange={onChangeClose}/>
                </Table.Cell>
                <Table.Cell>
                  <Button className="bg-blue-500" onClick={save}>Хадгалах</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
                <Table.Body className="divide-y">
                 {
                  workList.map((work, index) => 
                  <Table.Row key={index}>
                    <Table.Cell>
                      {work.weekend}
                    </Table.Cell>
                    <Table.Cell>
                      {work.open}
                    </Table.Cell>
                    <Table.Cell>
                      {work.close}
                    </Table.Cell>
                    <Table.Cell>
                      <Checkbox/>
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
           </div>
          
        </Layout>
    );
}
export default Clock;