import React from "react";
import Button from "@/components/atoms/Button";
import InputGroup from "@/components/atoms/input-group";
import Input from "@/components/atoms/Input";

const FormSignup: React.FC = () => {
    return (
        <>
          <form className="xl:min-w-[350px]">
          <InputGroup label="Nama Lengkap">
              <Input placeholder="Enter your name" name="name" />
            </InputGroup>
            <InputGroup label="Email">
              <Input
                placeholder="Enter your email"
                name="email"
                type="email"
              />
            </InputGroup>
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
            <div>
              <Button className="w-full" type="submit">
                Register
              </Button>
            </div>
          </form>
          <div className="m-auto mt-6 w-fit md:mt-8">
            <span className="m-auto dark:text-gray-400">
              Sudah punya akun?
              <a
                className="font-semibold ml-1 text-indigo-600 dark:text-indigo-100"
                href="/signin"
              >
                Masuk di sini
              </a>
            </span>
          </div>
        </>
      );
}

export default FormSignup;