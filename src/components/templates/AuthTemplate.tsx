import React from "react";

interface AuthTemplateProps {
  children: React.ReactNode;
  title: string;
  logo: string;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title,
  logo,
}) => {
  return (
    <>
      <div className="h-screen bg-gray-200 py-10 p-4 md:p-20 lg:p-10">
        <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          <div className="mt-5 px-5">
            <img src={logo} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">{title}</h2>
            {children}
          </div>
         
        </div>
        <small className="text-gray-600 justify-center flex p-3">
          © 2026 JumpaPay
        </small>
      </div>
    </>
  );
};

export default AuthTemplate;
