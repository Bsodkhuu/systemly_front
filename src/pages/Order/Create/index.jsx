import { Button,Card,Label,Avatar, TextInput, Textarea, ListGroup} from "flowbite-react";

import Layout from "../../../components/layout";
import {useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../../config/axios";
import { useQuery } from "react-query";

const Create = () => {
    const navigate = useNavigate();

    const { register, handleSubmit} = useForm();
    const {mutateAsync} = useMutation("address", addressUser);
    const {data, isLoading} = useQuery("products", getProducts);

    async function getProducts(){
      const response = await axiosClient.get("/products");
      return response.data;
    }

    async function addressUser(values){
      const data = await axiosClient.post("/address", values);
      return data;
    }
    if(isLoading){
      return <Layout></Layout>
    }
    console.log(data);


    async function onSubmit(values){
      const data = await mutateAsync(values);

      if(data){
        navigate("/checkbox");
      }
    }
    return (
    <Layout> 

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-200 h-screen col-span-2">
         <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h5 className="text-1xl">Хүргэлтийн хаяг</h5>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500">Хайх</Button>
            </div>
          </div>
         
            <div className="flex gap-4">
              <a href="/backorder">
              /Бэлэн болон бэлэн бус захиалга орсон гэдгийн мэссэжээр харуулана/ 
              <Button className="bg-blue-500">Бэлэн бус захиалга</Button>
              </a>
            </div>
            
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div className="grid grid-cols-2">
            <div>
              <Card>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="firstname" value="Овог" />
                      </div>
                      <TextInput id="firstname" {...register("firstname")}/>
                    </div>
                    <div className="w-1/2">
                      <div className="mb-2 block">
                        <Label htmlFor="lastname" value="Нэр" />
                      </div>
                      <TextInput id="lastname" {...register("lastname")}/>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="email" value="Имэйл" />
                      </div>
                      <TextInput id="email" {...register("email")}/>
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="phone" value="Утасны дугаар" />
                    </div>
                    <TextInput id="phone" {...register("phone")}/>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="city" value="Хот" />
                      </div>
                      <TextInput id="city"  {...register("city")}/>
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="state" value="Бүс" />
                    </div>
                    <TextInput id="state" {...register("state")} />
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-1/2"> 
                      <div class="mb-2 block">
                        <Label htmlFor="country" value="Улс" />
                      </div>
                      <TextInput id="country" {...register("country")}/>
                    </div>
                    <div className="w-1/2"> 
                    <div className="mb-2 block"> 
                    <Label htmlFor="order_note" value="Захиалгийн тайлбар" />
                    </div>
                    <Textarea id="order_note" {...register("order_note")}/>
                    </div>
                 </div>
                 <Button type="submit" className="btn btn-success" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                </form>
              </Card>
            </div>
          </div>
         </div>
        </div>
        <div className="col-span">
          
          <div className="p-2">
          <Card>
            <h1 className="text-1xl">Сагс</h1>
            <div className="w-50">
            <ListGroup>
                {data.map((i) => (
                 <ListGroup.Item>
                
                 Парт дугаар: {i.part_number}
                 <ListGroup.Item></ListGroup.Item>
                 Тайлбар: {i.description}
                 <ListGroup.Item></ListGroup.Item>
                 Нэгжийн үнэ: {i.netPrice}
                 <ListGroup.Item></ListGroup.Item>
                 Валют: {i.currency}
                 <ListGroup.Item></ListGroup.Item>
                 Fitting: {i.fittingPostion}
                 
                 <ListGroup.Item></ListGroup.Item>
                 Тоо, ширхэг: {i.quantity}
                 <ListGroup.Item></ListGroup.Item>
                 
                 Нийт үнэ: {i.subtotal}
                 </ListGroup.Item>
                ))}
            </ListGroup>
            &nbsp;
            <ListGroup>
                {data.map((i) => (
                 <ListGroup.Item>
                 Парт дугаар: {i.part_number}
                 <ListGroup.Item></ListGroup.Item>
                 Тайлбар: {i.description}
                 <ListGroup.Item></ListGroup.Item>
                 Нэгжийн үнэ: {i.netPrice}
                 <ListGroup.Item></ListGroup.Item>
                 Валют: {i.currency}
                 <ListGroup.Item></ListGroup.Item>
                 Fitting: {i.fittingPostion}
                 
                 <ListGroup.Item></ListGroup.Item>
                 Тоо, ширхэг: {i.quantity}
                 <ListGroup.Item></ListGroup.Item>
                 
                 Нийт үнэ: {i.subtotal}
                 </ListGroup.Item>
                ))}
            </ListGroup>
              &nbsp;
            <a href="/checkbox"> 
            <Button  className="bg-blue-500"> 
              Захиалга баталгаажуулах 
            </Button>
            </a>
            &nbsp;
            <a href="/zahialga"> 
            <Button  className="bg-blue-500"> 
              Сэлбэг хайх
            </Button>
            </a>
            </div>
          </Card>
          </div>
        </div>
      </div>
     
  </Layout>
    );
}

export default Create;