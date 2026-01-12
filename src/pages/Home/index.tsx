import React from "react";
import AuthTemplate from "@/components/templates/AuthTemplate";
import FormSignin from "@/components/molecules/FormSignin";

const Home: React.FC = () => (
  <>
    <AuthTemplate title="Signin" logo="https://jumpapay.com/assets/images/logo.png">
      <FormSignin />
    </AuthTemplate>
  </>
);

export default Home;