import { TextInput,Button, Label, Select } from "flowbite-react";
import Layout from "../../../components/layout";
import React from "react";
import { useMutation, useQuery} from "react-query";
import { axiosClient } from "../../../config/axios";
import { useForm } from "react-hook-form";
import { Service, Branch } from "../../API";
import { useNavigate } from "react-router-dom";

const Active = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Service>();
  const { mutateAsync } = useMutation("createService", createService);
  const { data: branchData } = useQuery("getbranch", getbranch);

  async function getbranch() {
    const response = await axiosClient.get("/branch");
    return response.data as Branch[];
  }

  async function createService(values: Service) {
    const response = await axiosClient.post("/services",{
      ...values,
      price: parseFloat(values.price.toString()),
    });
    return response.data;
  }
  async function onSubmit(values: Service) {
    await mutateAsync(values);
    navigate("/sale");
}
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Үйлчилгээ бүртгэх </h4>
            
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="branchId" value="Байгууллагын нэр" />
                </div>
                <Select id="branchId" placeholder="Байгууллагын нэр" {...register("branchId")}>
                  {branchData?.map((i) => (
                    <option key={`branch_${i.id}`} value={i.id}>
                      {i.branchName}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="serviceName" value="Үйлчилгээний нэр"/>
                </div>
                <TextInput type="text" id="serviceName" placeholder="Үйлчилгээний нэр" {...register("serviceName")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Үйлчилгээний үнэ"/>
                </div>
                <TextInput type="text" id="price" placeholder="Үйлчилгээний үнэ" {...register("price")}/>
              </div>
            </div>
            <div className="flex gap-4">
                <div className="w-1/2">
                   <div className="mb-2 block">
                     <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                      </div>
                       <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                       </div>
                       <div className="w-1/2">
                         <div className="mb-2 block">
                          <Label htmlFor="deleteFlag" value="Засвар хийсэн утга"/>
                            </div>
                            <TextInput id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label htmlFor="deleteDate" value="Засвар хийсэн он сар"/>
                        </div>
                      <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                </div>
            </div>
             <div className="flex gap-4">
              <a href="/sale"><Button className="bg-gray-400">Буцах</Button></a>
              <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
             </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Active;
