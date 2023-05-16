import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { axiosClient } from "../../../config/axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Vehicle } from "../../API";


const Transport = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Vehicle>();
  const { mutateAsync } = useMutation("createVehicle", createVehicle);

  async function createVehicle(values: Vehicle) {
    const response = await axiosClient.post("/vehicles", values);
    return response.data;
  }

  async function onSubmit(values: Vehicle ) {
    await mutateAsync(values);
    navigate("/customer");
  }

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Тээврийн хэрэгсэл</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleName" value="Машины нэр" />
                </div>
                <TextInput id="vehicleName" placeholder="Машины нэр" {...register("vehicleName")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleType" value="Төрөл" />
                </div>
                <TextInput id="vehicleType"  placeholder="Машины төрөл Жишээ: Prius, Toyota" {...register("vehicleType")}/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicleMark"
                    value="Марк"
                  />
                </div>
                <TextInput id="vehicleMark" placeholder="Марк" {...register("vehicleMark")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicleNameEng"
                    value="vehicle Name Eng"/>
                </div>
                <TextInput
                  id="vehicleNameEng" placeholder="" {...register("vehicleNameEng")}/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="activeFlag"
                    value="Идэвхтэй эсэх"
                  />
                </div>
                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="deleteFlag"
                    value="Засвар хийсэн утга"/>
                </div>
                <TextInput
                  id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="insertUser"
                    value="Үүсгэсэн хэрэглэгч"
                  />
                </div>
                <TextInput id="insertUser" placeholder="Үүсгэсэн хэрэглэгч" {...register("insertUser")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="updateUser"
                    value="Өөрчлөлт хийсэн хэрэглэгч"/>
                </div>
                <TextInput
                  id="updateUser" placeholder="Өөрчлөлт хийсэн хэрэглэгч" {...register("updateUser")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="deleteDate"
                    value="Засвар хийсэн он сар"
                  />
                </div>
                <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="deleteUser"
                    value="Засвар хийсэн хэрэглэгч"
                  />
                </div>
                <TextInput id="deleteUser" placeholder="Засвар хийсэн хэрэглэгч" {...register("deleteUser")}/>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gray-400">Буцах</Button>
              <Button className="bg-orange-400" onClick={handleSubmit(onSubmit)}>
                Хадгалах
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Transport;
