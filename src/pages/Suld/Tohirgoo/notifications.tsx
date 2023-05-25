import React from "react";
import Layout from "../../../components/layout";
import { Label, Textarea, Button, TextInput, Table } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { axiosClient } from "../../../config/axios";

const NotificationsAdd = () => {
    return (
        <Layout>
            <div className="p-2 bg-gray-200 h-screen w-full">
                <div className="bg-white p-2 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Мэдэгдэл</h4>
                    </div>
                </div>
                
            </div>
        </Layout>
    );
}

export default NotificationsAdd;