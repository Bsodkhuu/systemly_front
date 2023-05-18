import React from "react";
import Layout from "../../../components/layout";
import { Button, Card, Label, Select, Table, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";
import { Order, Product, Supplier } from "../../API";

const Asuulguud = () => {
    return(
        <Layout></Layout>
    );

//    const { data: supplier } = useQuery("getSupplier", getSupplier);
   
//    async function getSupplier() {
//     const response = await axiosClient.get("/suppliers");
//     return response.data as Supplier[];
//    }

//    const { data: affiliate } =  useQuery("getAffiliate", getAffiliate);

//    async function getAffiliate() {
//     const response = await axiosClient.get("/affilies");
//     return response.data as Affiliate[];
//    }

//    const { data: inquiry } = useQuery("getInquiry", getInquiry);

   

//    async function getInquiry() {
//     const response = await axiosClient.get("/inquiries");
//     return response.data as Inquiry[];
//    }
 
//    const { data: product } = useQuery("getProduct", getProduct);

//    async function getProduct() {
//     const response = await axiosClient.get("/products");
//     return response.data as Product[];
//    }

//    const { data: order } = useQuery("getOrder", getOrder);
   
//    async function getOrder() {
//     const response = await axiosClient.get("/orders");
//     return response.data as Order[];
//    }

//     return (
//         <Layout>
//             <div className="md:grid md:grid-cols-3 md:gap-4">
//                 <div className="md:p-4 p-2 bg-gray-200 md:h-screen col-span-2">
//                     <div className="bg-white md:p-6 p-4 rounded-md space-y-3 md:space-y-0 ">
//                         <div className="md:flex justify-between md:mb-4">
//                             <div className="md:text-xl mb-6 font-bold text-[15px] ">Асуулгууд</div>
//                             <div className="md:flex gap-4 space-y-3 md:space-y-0 ">
//                                 <div className="md:w-1/2 flex items-center gap-3">
//                                     <div className="mb-2 block w-[30%]">
//                                         <Label htmlFor="supplier" value="Нийлүүлэгч" />
//                                     </div>
//                                     <div className="w-[70%]">
//                                     <Select>
//                                         {supplier?.map((i)=> (
//                                             <option value={i.id}>
//                                                 {i.supplierList}
//                                             </option>
//                                         ))}
//                                     </Select>
//                                     </div> 
//                                 </div>
//                                 <div className="md:w-1/2 flex items-center gap-3">
//                                     <div className="mb-2 block w-[30%] " >
//                                         <Label htmlFor="order" value="Захиалагч"/>
//                                     </div>
//                                     <div className="w-[70%]" >  
//                                     <Select>
//                                         {affiliate?.map((i) => (
//                                             <option value={i.id}>
//                                                 {i.affiliateName}
//                                             </option>
//                                         ))}
//                                     </Select>
//                                     </div>
//                                 </div>
//                                 <div className="md:w-1/2 flex items-center gap-3">
//                                     <div className="mb-2 block w-[30%] ">
//                                         <FontAwesomeIcon icon={faMagnifyingGlass}/>
//                                     </div>
//                                     <div className="w-[70%]">
//                                     <TextInput id="search" type="search" placeholder="Хайх" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                        <div className="md:grid grid-cols-2 space-y-3  md:space-y-0">
//                        <div className="md:p-4">

                     
//                         <Card> 
//                         <div className="md:text-xl text-[11px]">Асуулгын жагсаалт</div>
                        
//                         <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
//                         {inquiry?.map((inquiry: Inquiry, index: number) =>(
//                             <div className="bg-white border  border-orange-500 p-1 text-[11px] rounded-md text-gray-600 flex">
//                                 <div className="w-[50%]" >
//                                     <div className="font-bold text-black" >Inquiry дугаар</div>
//                                     <div className="font-bold">Гишүүний нэр</div>
//                                     <div>Асуулга ирсэн огноо</div>
//                                     <div>Нийлүүлэгч</div>
//                                 </div>
//                                 <div className="w-[50%]" key={index} >
//                                     <div className="font-bold text-black" >{inquiry.inquiryNumber}</div>
//                                     <div className="font-bold">{inquiry.affiliate.affiliateName}</div>
//                                     <div>{inquiry.createdDate}</div>
//                                     <div>{inquiry.supplier.supplierList}</div>
//                                 </div>
//                             </div>
//                             ))}
//                         </div>
                       

//                             <div className="md:flex md:gap-4 hidden md:block ">
//                             <Table>
//                                 <Table.Head className="uppercase">
//                                     <Table.HeadCell>Inquiry дугаар</Table.HeadCell>
//                                     <Table.HeadCell>Гишүүний нэр</Table.HeadCell>
//                                     <Table.HeadCell>Асуулга ирсэн огноо</Table.HeadCell>
//                                     <Table.HeadCell>Нийлүүлэгч</Table.HeadCell>
//                                 </Table.Head>
//                                 <Table.Body>
                                   
//                                 </Table.Body>
//                             </Table>
//                             </div>
//                         </Card>
//                         </div>

//                         <div className="md:p-4">
//                             <Card>
//                             <div className="md:text-xl text-[11px]">Асуулгын дэлгэрэнгүй</div>
//                             <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
//                             {product?.map((product: Product, index: number) => (
//                             <div className="bg-white border  border-orange-500 p-1 text-[11px] rounded-md text-gray-600 flex">
//                                 <div className="w-[50%]" >
//                                     <div className="font-bold text-black" >Inquiry дугаар</div>
//                                     <div className="font-bold">Гишүүний нэр</div>
//                                     <div>Асуулга ирсэн огноо</div>
//                                     <div>Нийлүүлэгч</div>
//                                 </div>
//                                 <div className="w-[50%]" key={index} >
//                                     <div className="font-bold text-black" >{product.part_number}</div>
//                                     <div className="font-bold">{product.description}</div>
//                                     <div>{product.netPrice}</div>
//                                     <div>{product.fittingPostion}</div>
//                                     <div>{product.quantity}</div>
//                                 </div>
//                             </div>
//                             ))}
//                             </div>
//                             <div className="flex gap-4 hidden md:block ">
//                             <Table>
//                                 <Table.Head className="uppercase">
//                                     <Table.HeadCell>Партын дугаар</Table.HeadCell>
//                                     <Table.HeadCell>Тайлбар</Table.HeadCell>
//                                     <Table.HeadCell>Нэгжийн үнэ</Table.HeadCell>
//                                     <Table.HeadCell>Fitting</Table.HeadCell>
//                                     <Table.HeadCell>Хүссэн тоо</Table.HeadCell>
//                                     <Table.HeadCell>Бэлэн байгаа тоо</Table.HeadCell>
//                                     <Table.HeadCell>ETA(Хэрэв байхгүй бол бэлэн болох хугацаа)</Table.HeadCell>
//                                 </Table.Head>
//                                 <Table.Body>
                                    
//                                 </Table.Body>
//                             </Table>
//                             </div>
//                             </Card>
//                         </div>
//                        </div>
//                     </div>
//                 </div>
//             <div className="col-span bg-gray-200 ">
//                 <div className="p-2">
//                     <Card className="md:max-w-sm">
//                         <div className="md:text-xl text-[11px]">Захиалгын хураангуй</div>
//                         <Button className="bg-orange-500"><div className="text-[11px]" >Захиалга үүсгэх</div></Button>
//                         <div className="md:hidden overflow-y-auto h-64 space-y-3 ">
//                         {order?.map((order: Order, index: number) => (
//                             <div className="bg-white border  border-orange-500 p-1 text-[11px] rounded-md text-gray-600 flex">
//                                 <div className="w-[50%]" >
//                                     <div className="font-bold text-black" >Inquiry дугаар</div>
//                                     <div className="font-bold">Гишүүний нэр</div>
//                                     <div>Асуулга ирсэн огноо</div>
//                                     <div>Нийлүүлэгч</div>
//                                 </div>
//                                 <div className="w-[50%]" key={index} >
//                                     <div>{order.affiliate.affiliateName}</div>
//                                     <div>{order.totalPrice}</div>
//                                 </div>
//                             </div>
//                             ))}
//                             </div>
//                         <div className="hidden md:block " >
//                         <Table>
//                             <Table.Head className="uppercase">
//                                 <Table.HeadCell>Брэндийн нэр(Нийлүүлэгч нэр)</Table.HeadCell>
//                                 <Table.HeadCell>Нийт дүн</Table.HeadCell>
//                             </Table.Head>
//                             <Table.Body>
                                
//                             </Table.Body>
//                         </Table>
//                         </div>
                        
//                     </Card>
//                 </div>
//             </div>
//             </div>
//         </Layout>
}
export default Asuulguud;