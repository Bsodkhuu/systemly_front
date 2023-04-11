import { Table } from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const My = () => {
  const { data: zaminMedee } = useQuery("getZaminMedee", getZaminMedee);

  async function getZaminMedee() {
    const response = await axiosClient.get("/zamin_medees");
    return response.data;
  }
  return (
    <Layout>
      <Table>
        <Table.Head className="uppercase">
          <Table.HeadCell>Байршил</Table.HeadCell>
          <Table.HeadCell>Статус</Table.HeadCell>
          <Table.HeadCell>Он сар</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {zaminMedee?.map((i: any) => (
            <Table.Row>
              <Table.Cell>{i.location}</Table.Cell>
              {/* <Table.Cell>{i.zamStatusType.statusTypeName}</Table.Cell> */}
              <Table.Cell>{i.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
};
export default My;

{
  /* <div className="grid grid-cols-3 gap-4">
           <div className="p-4 bg-gray-200 h-screen col-span-2">
             <div className="bg-white p-6 rounded-lg"> 
             <div className="flex justify-between mb-4"> 
             <h5 className="text-1xl">Миний захиалгууд</h5>
             <div className="flex gap-4"> 
             <TextInput id="search" type="search" placeholder="Хайх"/>
             <Button className="bg-blue-500">
                Хайх
             </Button>
             </div>
             </div>
          <div className="grid grid-cols-2"> 
            <div className="p-4"> 
            <Card> 
            <h5 className="text-1xl">Захиалгийн жагсаалт</h5>
               <div className="flex gap-4"> 
             <a href="#"> 
             <Button className="bg-blue-500">
                 Идэвхитэй
               </Button> 
               </a>
               <a href="/history"> 
               <Button className="bg-blue-500">
                 Түүх
               </Button>
               </a>
              
               </div>
            захиалга баталгаажуулах Статусд орсон тохиолдолд захиалгаа баталгаажуулнаа
            
               <Table> 
               <Table.Head>
               <Table.HeadCell className="!p-4">
               <Checkbox />
              </Table.HeadCell>
             

                {/* zahialga or-10002 ni back-end iimerhvv baidlaar hiine shvv */
}
//           <Table.HeadCell>
//              Захиалгын дугаар
//           </Table.HeadCell>
//           <Table.HeadCell>
//              Нийлүүлэгч
//           </Table.HeadCell>
//           <Table.HeadCell>
//              Статус
//           </Table.HeadCell>

//          </Table.Head>
//           <Table.Body className="divide-y">
//         <Table.Row>
//           <Table.Cell className="p-4">
//           <Checkbox />
//           </Table.Cell>
//           <Table.Cell>Meyle</Table.Cell>
//           <Table.Cell>11111</Table.Cell>
//           <Table.Cell>
//             Агуулахыг шалгаж дууссан захиалга баталгаажуулах гэсэн nofications илгээх
//           </Table.Cell>
//         </Table.Row>
//       </Table.Body>
//          </Table>
//       </Card>
//       </div>
//       <div className="p-4">

//          <Card>
//           <h5 className="text-1xl">Захиалгийн дэлгэрэнгүй</h5>
//             <div className="flex gap-4">
//               <Table>
//                   <Table.Head>
//                       <Table.HeadCell>Захиалга</Table.HeadCell>
//                       <Table.HeadCell>Партын дугаар</Table.HeadCell>
//                       <Table.HeadCell>Тоо ширхэг</Table.HeadCell>
//                       <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
//                       <Table.HeadCell>Currency</Table.HeadCell>
//                       <Table.HeadCell>Нийт үнэ</Table.HeadCell>
//                   </Table.Head>
//                   <Table.Body className="divide-y">
//                   <Table.Row>
//                       <Table.Cell>Meyle</Table.Cell>
//                       <Table.Cell>12345</Table.Cell>
//                       <Table.Cell>10</Table.Cell>
//                       <Table.Cell>50.0</Table.Cell>
//                       <Table.Cell>$</Table.Cell>
//                       <Table.Cell>500.000</Table.Cell>
//                   </Table.Row>
//                   </Table.Body>
//               </Table>
//             </div>
//          </Card>
//         </div>
//     </div>
//   </div>
// </div>
//   <div className="col-span">
//     <div className="p-4">
//         <Card className="max-w-sm">
//           <h5 className="text-1xl">Замын мэдээний дэлгэрэнгүй</h5>
//            <div className="flex gap-4">
//            <Table>
//                   <Table.Head>
//                       <Table.HeadCell>Байршил</Table.HeadCell>
//                       <Table.HeadCell>Статус</Table.HeadCell>
//                       <Table.HeadCell>Он сар</Table.HeadCell>
//                      </Table.Head>
//                   <Table.Body className="divide-y">
//                     {data?.data.map((i) => (
//                       <Table.Row>
//                         <Table.Cell>{i.location}</Table.Cell>
//                         <Table.Cell>{i.zamStatusType.map((j) => j.statusTypeName).join(",")}</Table.Cell>
//                         <Table.Cell>{i.date}</Table.Cell>
//                       </Table.Row>
//                     ))}
//                   </Table.Body>
//                   <Table.Body className="divide-y">

//                   <Table.Row>
//                       <Table.Cell>Bad bentheim,GE</Table.Cell>
//                       <Table.Cell>Ирсэн</Table.Cell>
//                       <Table.Cell>2023.03.15</Table.Cell>
//                   </Table.Row>
//                   </Table.Body>

//               </Table>
//           </div>
//         </Card>
//       </div>
//     </div>
//   </div>