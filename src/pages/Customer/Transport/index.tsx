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
  vehicleProductionYearFrom: number;
  vehicleProductionYearTo: number;
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
                  <Label htmlFor="make_id" value="Загвар" />
                </div>
                <TextInput id="make_id" {...register("makeId")} />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="model_name" value="Модел" />
                </div>
                <TextInput id="model_name" {...register("modelName")} />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicle_production_year_from"
                    value="Машин үйлдвэрлэсэн оноос хойш"
                  />
                </div>
                <TextInput
                  type="number"
                  id="vehicle_production_year_from"
                  {...register("vehicleProductionYearFrom")}
                />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="vehicle_production_year_to"
                    value="Машин үйлдвэрлэсэн оноос өмнө"
                  />
                </div>
                <TextInput
                  type="number"
                  id="vehicle_production_year_to"
                  {...register("vehicleProductionYearTo")}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicle_class_id" value="Машины анги" />
                </div>
                <TextInput
                  id="vehicle_class_id"
                  {...register("vehicleClassId")}
                />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="vehicle_body_type_id" value="Машины төрөл" />
                </div>
                <TextInput
                  id="vehicle_body_type_id"
                  {...register("vehicleBodyTypeId")}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gray-400">Буцах</Button>
              <Button onClick={handleSubmit(onSubmit)} className="bg-gray-400">
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
