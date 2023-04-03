import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const [login, setLogin] = useState({
    email: '', 
    password: '',
    firstName: '',
    lastName: ''
  });
  const [loginList, setLoginList] = useState([]);
  
    function newtreh(){
      console.log("Нэвтрэх");
      console.log(login);

      fetch("localhost:3000/users", {
        
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify(login)
      }).then(res => res.json()).then(data => {
        console.log(data);
        if(data){
          navigate('layout.jsx');
        }
      });
    }
  function onChangeEmail(event){
    login.email = event.target.value;
  }
  function onChangePassword(event){
    login.password = event.target.value;
  }

  // async function onSubmit(values) {
  //   const result = await fetch("http://localhost:8000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type":"application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     },
    
  //     body: JSON.stringify(values),
      
  //   });

  //   const data = await result.json();
   
  //   if (data) {
  //     navigate("/");
  //   }
  // }

  return (
    <div class="flex h-screen justify-center items-center">
      <Card>
        <h5 className="justify-center items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          NEXUS ERP SYSTEM
        </h5>

        <form onSubmit={()=>{}} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Имэйл" />
            </div>
            <TextInput id="email" type="text" onChange={onChangeEmail}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Нууц үг" />
            </div>
            <TextInput
              id="password"
              type="password"
              onChange={onChangePassword}
            />
          </div>
          <div className="flex items-center gap-2">
           <a href="/forgot">
           <Label htmlFor="remember">Нууц үгээ сэргээх</Label>
           </a>
          </div>
          <Button type="submit" className="btn btn-success" onClick={newtreh}>
            Нэвтрэх
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
