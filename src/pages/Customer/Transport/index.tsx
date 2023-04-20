import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { axiosClient } from "../../../config/axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


interface VehicleMakeModel{
  makeId: string;
  modelId: string;
  modelName: string;
  vehicleProductionYearFrom: string;
  vehicleProductionYearTo: string;
  vehicleClassId: string;
  vehicleBodyTypeId: string;
  featuredCheck: boolean;
}

const Transport = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<VehicleMakeModel>();
  const { mutateAsync } = useMutation(
    "createVehicleMakeModel",
    createVehicleMakeModel
  );

  async function createVehicleMakeModel(values: VehicleMakeModel) {
    const response = await axiosClient.post("/vehicle_make_models", values);
    return response.data;
  }

  async function onSubmit(values: VehicleMakeModel) {
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
          <form
            onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="makeId" value="Загвар" />
                </div>
                <TextInput id="makeId" {...register("makeId")} />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="modelName" value="Модел" />
                </div>
                <TextInput id="modelName" {...register("modelName")} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicleProductionYearFrom"
                    value="Машин үйлдвэрлэсэн оноос хойш"
                  />
                </div>
                <TextInput
                  type="number"
                  id="vehicleProductionYearFrom"
                  {...register("vehicleProductionYearFrom")}
                />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicleProductionYearTo"
                    value="Машин үйлдвэрлэсэн оноос өмнө"
                  />
                </div>
                <TextInput
                  type="number"
                  id="vehicleProductionYearTo"
                  {...register("vehicleProductionYearTo")}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleClassId" value="Машины анги" />
                </div>
                <TextInput
                  id="vehicleClassId"
                  {...register("vehicleClassId")}
                />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicleBodyTypeId" value="Машины төрөл" />
                </div>
                <TextInput
                  id="vehicleBodyTypeId"
                  {...register("vehicleBodyTypeId")}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gray-400">Буцах</Button>
              <Button onClick={handleSubmit(onSubmit)} className="bg-orange-400">
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
