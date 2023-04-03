import Layout from "../../../components/layout";
import {
    Button,
    Label,
    TextInput
  } from "flowbite-react";
import {useState} from "react";

const Transport= () => {

    const [showSearch, setShowSearch] = useState();
    const [vehicleMake, setVehicleMake] = useState({
        make_id:"", 
        model_name: "", 
        vehicle_class_id:"",
        vehicle_body_type_id:"", 
      });
    function transport(){
        console.log("vehicle make models");
        fetch("http://localhost:3000/customers/vehiclemakemodels", {
            method:"POST",
            headers:{
             "Content-Type": "application/json",
             "Access-Control-Allow-Origin": "*"
            },
            body: JSON.str
        }).then(res => res.json()).then(data => {
            console.log(data);
        });
    }

    function OnMake(event) {
        vehicleMake.make_id = event.target.value;
    }
    function OnModel(event) {
        vehicleMake.model_name = event.target.value;
    }
    function OnvehicleClass(event) {
        vehicleMake.vehicle_class_id = event.target.value;
    }
    function OnBody(event) {
        vehicleMake.vehicle_body_type_id = event.target.value;
    }
    function search(){
        setShowSearch();
    }
    return(
        <Layout> 
           <div className="p-4 bg-gray-200 h-screen w-full"> 
             <div className="bg-white p-6 rounded-lg">
                <div className="flex justify-between mb-4"> 
                  <h4 className="text-1xl">Тээврийн хэрэгсэл</h4>
                  <div className="flex gap-4">
                    <TextInput id="search" type="search" placeholder="Тээврийн хэрэгсэл" />
                    <Button className="bg-blue-500" onClick={search}> 
                    Хайх
                    </Button>
                  </div>
                </div>
               <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="make_id" value="Загвар"/>
                        </div>
                        <TextInput id="make_id" onChange={OnMake}/>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="model_name" value="Модел"/>
                        </div>
                        <TextInput id="model_name" onChange={OnModel}/>
                    </div>
                </div>


                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="vehicle_production_year_from" value="Машин үйлдвэрлэсэн оноос хойш"/>
                        </div>
                        <TextInput type="date" id="vehicle_production_year_from" onChange={OnvehicleClass}/>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block"> 
                        <Label htmlFor="vehicle_production_year_to" value="Машин үйлдвэрлэсэн оноос өмнө"/>
                        </div>
                        <TextInput type="date" id="vehicle_production_year_to" />
                    </div>
                </div>
                

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="vehicle_class_id" value="Машины анги"/>
                        </div>
                        <TextInput id="vehicle_class_id" onChange={OnvehicleClass}/>
                    </div>
                    <div className="w-1/2">
                        <div className="mb-2 block"> 
                        <Label htmlFor="vehicle_body_type_id" value="Машины төрөл"/>
                        </div>
                        <TextInput id="vehicle_body_type_id" onChange={OnBody}/>
                    </div>
                </div>

               <div className="flex gap-4">
                  <Button  className="bg-gray-400">Буцах</Button>
                  <Button onClick={transport} className="bg-gray-400">Хадгалах</Button>
               </div>
               </form>
             </div>
           </div>
        </Layout>
    );
}

export default Transport;