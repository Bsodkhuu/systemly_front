import React from "react";
import Layout from "../../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";

const Nemelt = () => {
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Нэмэлт мэдээлэл</h4>
                        <div className="flex gap-4">
                         <TextInput id="search" type="search" placeholder="Хайлт" />
                         <Button className="bg-blue-500">Хайх</Button>
                        </div>
                    </div>
                    <form>
                        <Label htmlFor="" value="Тээвэрлэгч"/>
                        <TextInput type="text"/>&nbsp;
                        <Label htmlFor="" value="Тээврийн захиалгийн дугаар"/>
                        <TextInput type="text"/>&nbsp;
                        <Label htmlFor="" value="Тээврийн төрөл"/>
                        <TextInput type="text"/>&nbsp;
                        <Button className="bg-blue-500">Хадгалах</Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
export default Nemelt;