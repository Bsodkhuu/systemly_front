import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import { useState } from "react";
const Login = () => {
  const [showLogin, setShowlogin] = useState();

  function login(){
    setShowlogin();
  }
  return (
    <div class="flex h-screen justify-center items-center">
      <Card>
        <h5 className="justify-center items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          NEXUS ERP SYSTEM
        </h5>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Имэйл" />
            </div>
            <TextInput id="email" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Нууц үг" />
            </div>
            <TextInput id="password" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Намайг сана</Label>
          </div>
          <Button type="submit" onClick={login}>Нэвтрэх</Button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
