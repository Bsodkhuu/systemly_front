import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { axiosClient } from "../../../config/axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


const Transport = () => {
  const navigate = useNavigate();
  navigate("/customer");

  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h4 className="text-1xl">Тээврийн хэрэгсэл</h4>
          </div>
          <form
            //onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleName" value="Машины нэр" />
                </div>
                <TextInput id="vehicleName" />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleType" value="Төрөл" />
                </div>
                <TextInput id="vehicleType"  />
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
                <TextInput id="vehicleNameEng"/>
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicleNameEng"
                    value="vehicle Name Eng"/>
                </div>
                <TextInput
                  id="vehicleNameEng"/>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gray-400">Буцах</Button>
              <Button className="bg-orange-400">
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
