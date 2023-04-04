import Layout from "../../components/layout";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";

const Order = () => {
  const [showSearch, setShowSearch] = useState(false);

  function search() {
    setShowSearch();
  }
  return (
    <Layout>
      <div className="p-4 bg-gray-200 h-screen w-full">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h1 className="text-1xl">Захиалга хийх </h1>
            <div className="flex gap-4">
              <TextInput id="search" type="search" placeholder="Хайх" />
              <Button className="bg-blue-500" onClick={search}>
                Хайх
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div>
              <a href="/zahialga">
                <Button size="xl">Захиалга</Button>
              </a>
            </div>
            <div>
              <a href="/inquiry">
                <Button size="xl">Inquiry</Button>
              </a>
            </div>
          </div>
           &nbsp;
          <h1>Түүвэр захиалга </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
