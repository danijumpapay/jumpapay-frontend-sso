import React from "react";
import AuthTemplate from "@/components/templates/AuthTemplate";
import FormSignup from "@/components/molecules/FormSignup";

const Signup: React.FC = () => {
    return (
        <AuthTemplate title="Signup" logo="https://gamaloka.com/wp-content/uploads/2023/12/gamaloka-1800x4001-1-200x44.png">
            <FormSignup/>
        </AuthTemplate>
    )
}

export default Signup;