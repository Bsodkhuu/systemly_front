import React from "react";
import Layout from "../../components/layout";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";

const Order = () => {
  return (
    <Layout>
      <div className="  p-6 bg-gray-200 h-screen w-full">
        <div className="md:grid md:grid-cols-12 space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="md:col-span-2  bg-white rounded-md shadow-xl" >
            <div className="p-2">Захиалга хийх </div>
            <div className=" flex p-2 justify-between space-x-4">
              <TextInput id="search" type="search" placeholder="Хайх" className="w-full"/>
              <Button className="">Хайх</Button>
            </div>
         
          <div className="flex p-2  space-x-4  justify-between">
            <div className="w-full">
              <a href="/zahialga"  >
                <Button size="sm" className="w-full" >Захиалга</Button>
              </a>
            </div>
            <div>
              <a href="/inquiry">
                <Button size="sm">Inquiry</Button>
              </a>
            </div>
          </div>
          &nbsp;
          </div>
          <div className="text-sm p-2 bg-white text-bold rounded-md shadow-xl col-span-10 ">Түүвэр захиалга </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Order;
