import React from "react";
import AuthTemplate from "@/components/templates/AuthTemplate";
import FormSignin from "@/components/molecules/FormSignin";

const Signin: React.FC = () => {

    return (
        <AuthTemplate title="Signin" logo="https://gamaloka.com/wp-content/uploads/2023/12/gamaloka-1800x4001-1-200x44.png">
            <FormSignin />
        </AuthTemplate>
    )
}

export default Signin;