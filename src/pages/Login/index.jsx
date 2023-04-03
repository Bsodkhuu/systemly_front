import { Label, TextInput, Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../config/axios";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useMutation("login", loginUser);

  async function loginUser(values) {
    const data = await axiosClient.post("/login", values);

    return data;
  }

  async function onSubmit(values) {
    const data = await mutateAsync(values);

    if (data) {
      navigate("/");
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <h5 className="justify-center items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          NEXUS ERP SYSTEM
        </h5>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Имэйл" />
            </div>
            <TextInput id="email" type="text" {...register("email")} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Нууц үг" />
            </div>
            <TextInput
              id="password"
              type="password"
              {...register("password")}
            />
          </div>
          <div className="flex items-center gap-2">
            <a href="/forgot">
              <Label htmlFor="remember">Нууц үгээ сэргээх</Label>
            </a>
          </div>
          <Button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit(onSubmit)}
          >
            Нэвтрэх
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
