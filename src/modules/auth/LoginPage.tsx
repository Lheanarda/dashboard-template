import Button from "@src/components/Button";
import InputWithLabel from "@src/components/InputWithLabel";
import { LogoEmos } from "@src/lib/constants/imgSrc";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="lg:rounded-xl  w-full bg-white/70 shadow-sm flex lg:h-[90vh] lg:w-[80%]  min-h-screen lg:min-h-0  dark:bg-slate-900 font-monts">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="py-10 px-12 flex items-center lg:items-start justify-center flex-col">
            <div className="font-bold text-3xl">Login</div>
            <div className="text-center">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="mt-3 flex flex-col space-y-3 w-full">
              <InputWithLabel
                name="Username"
                value={""}
                placeholder="Your Username"
                onChange={() => console.log("")}
              />
              <InputWithLabel
                name="Password"
                className="mt-2"
                type="password"
                placeholder="Ex. *******"
                value={""}
                onChange={() => console.log("")}
              />
            </div>
            <Button className="text-center mt-5" onClick={() => navigate("/")}>
              LOGIN
            </Button>
          </div>
          <div className="hidden lg:flex w-full h-full bg-primary/40  rounded-r-xl  items-center justify-center flex-col">
            <img src={LogoEmos} alt="Emos" className="w-[60%] -ml-5" />
            <div className="text-primary text-xl font-bold -mt-4">
              Fast, Easy, & Reliable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
