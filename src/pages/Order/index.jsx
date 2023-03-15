import { TextInput, Button} from "flowbite-react";
import Layout from "../../components/layout";
import { useState } from "react";
const Order = () => {
  const [showSearch, setSearch] = useState(false);
    
  function Haih(){
      //fetch api
     setSearch(true);
  }
  return (
    <Layout> 
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <h1 className="text-1xl">Захиалга хийх </h1>
          </div>
        </div>
    </Layout>
  );
}
export default Order;