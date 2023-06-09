import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../../../components/layout";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { axiosClient } from "../../../../config/axios";
import { TeevriinZahialga } from "../../../API";

const Nemelt = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<TeevriinZahialga>();
    const { mutateAsync } = useMutation("createTeever", createTeever);

    async function createTeever(values: TeevriinZahialga) {
        const response = await axiosClient.post("/teevriin_zahialgas", values);
        return response.data;
    }

    async function onSubmit(values: TeevriinZahialga) {
        await mutateAsync(values);
        navigate("/orders");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Нэмэлт мэдээлэл</h4>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}
export default Nemelt;