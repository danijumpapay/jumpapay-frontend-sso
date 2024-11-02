import React from "react";
import Button from "@/components/atoms/Button";
import InputGroup from "@/components/atoms/input-group";
import Input from "@/components/atoms/Input";

const FormSignin: React.FC = () => {
  return (
    <>
      <form className="xl:min-w-[350px]">
        <InputGroup label="Username">
          <Input placeholder="Enter your username" name="user" />
        </InputGroup>
        <InputGroup label="Password">
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
          />
        </InputGroup>
        <div className="text-sm flex items-center justify-between mb-3">
          <a className="font-medium text-black-400 hover:text-black-500 ml-auto text-left" href="">
            Forgot your password?
          </a>
        </div>
        <div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
      <div className="m-auto mt-6 w-fit md:mt-8">
        <span className="m-auto dark:text-gray-400">
          Belum punya akun?
          <a
            className="font-semibold ml-1 text-indigo-600 dark:text-indigo-100"
            href="/signup"
          >
            Buat akun
          </a>
        </span>
      </div>
    </>
  );
};

export default FormSignin;
