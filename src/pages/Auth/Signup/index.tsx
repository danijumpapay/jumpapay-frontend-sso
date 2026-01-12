import React from "react";
import AuthTemplate from "@/components/templates/AuthTemplate";
import FormSignup from "@/components/molecules/FormSignup";

const Signup: React.FC = () => {
  return (
    <AuthTemplate title="Signup" logo="https://jumpapay.com/assets/images/logo.png">
      <FormSignup/>
    </AuthTemplate>
  );
};

export default Signup;