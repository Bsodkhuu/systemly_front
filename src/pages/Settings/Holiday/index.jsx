import { TextInput, Button } from "flowbite-react";
import Layout from "../../../components/layout";


const Holiday = () => {
    return(
        <Layout>
             <div className="p-4 bg-gray-200 h-screen w-full"> 
           <div className="bg-white p-6 rounded-lg"> 
           <div className="flex justify-between mb-4"> 
            <h4 className="text-1xl">Бүх нийтийн амралтын өдөр</h4>
            <div className="flex gap-4"> 
              <TextInput id="search" type="search" placeholder="Хайлт"/>
              <Button className="bg-blue-500">
                Хайх
              </Button>
              
            </div>
           </div>

           
           </div>
           </div>
        </Layout>
    );
}
export default Holiday;