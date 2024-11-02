import React from "react";

interface AuthTemplateProps {
    children: React.ReactNode,
    title: string,
    logo: string
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({children, title, logo}) => {
    return (
        <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
        <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
            <div className="mt-5 px-5">
                <img src={logo} alt=""/>
            </div>
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">{title}</h2>
                {children}
            </div>
        </div>
    </div>
    )
}

export default AuthTemplate;