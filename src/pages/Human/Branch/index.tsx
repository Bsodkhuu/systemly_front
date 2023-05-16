import React from "react";
import Layout from "../../../components/layout";
import { Branch } from "../../API";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { axiosClient } from "../../../config/axios";
import { useNavigate } from "react-router-dom";
import { Label, TextInput, Button} from "flowbite-react";

const BranchAdd = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<Branch>();
    const { mutateAsync } = useMutation("createBranch", createBranch);

    async function createBranch(values: Branch) {
        const response = await axiosClient.post("/branch", values);
        return response.data;
    }
    async function onSubmit(values: Branch) {
        await mutateAsync(values);
        navigate("/human");
    }
    return (
        <Layout>
            <div className="p-4 bg-gray-200 h-screen w-full">
                <div className="bg-white p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h4 className="text-1xl">Байгууллага бүртгэх</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                    <Label htmlFor="branchName" value="Байгууллагын нэр"/>
                                </div>
                                <TextInput id="branchName" placeholder="Байгууллагын нэр" {...register("branchName")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                   <Label htmlFor="parentId" value="Гишүүд доторх салбар байгууллага"/>
                                </div>
                                <TextInput id="parentId" placeholder="Гишүүдийн салбар байгууллага" {...register("parentId")}/>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label htmlFor="activeFlag" value="Идэвхтэй эсэх"/>
                                </div>
                                <TextInput id="activeFlag" placeholder="Идэвхтэй эсэх" {...register("activeFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label
                                    htmlFor="deleteFlag"
                                    value="Засвар хийсэн утга"/>
                                </div>
                                <TextInput
                                id="deleteFlag" placeholder="Засвар хийсэн утга" {...register("deleteFlag")}/>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-2 block">
                                <Label
                                    htmlFor="deleteDate"
                                    value="Засвар хийсэн он сар"/>
                                </div>
                                <TextInput id="deleteDate" type="date" {...register("deleteDate")}/>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="/human"><Button className="bg-gray-400">Буцах</Button></a>
                            <Button className="bg-orange-500" onClick={handleSubmit(onSubmit)}>Хадгалах</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default BranchAdd;