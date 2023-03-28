import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function onSubmit(values) {
    const result = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*"
      },
    
      body: JSON.stringify(values),
      
    });

    const data = await result.json();
   
    if (data) {
      navigate("/");
    }
  }

  return (
    <div class="flex h-screen justify-center items-center">
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
            <Checkbox id="remember" />
            <Label htmlFor="remember">Намайг сана</Label>
          </div>
          <Button type="submit" className="btn btn-success">
            Нэвтрэх
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
