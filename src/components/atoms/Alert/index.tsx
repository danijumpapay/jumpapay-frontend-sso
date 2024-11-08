import React from "react";

const Alert: React.FC<AlertProps> = ({ variant, children }) => {

    const alertClassName = [
        "p-4 mb-4 text-sm"
    ];

    const variantStyle = {
        warning: "text-amber-500 rounded-xl bg-amber-50",
        danger: "text-red-500 rounded-xl bg-red-50",
        success: "text-emerald-500 rounded-xl bg-emerald-50"
    }[variant || ""];

    if(variant) alertClassName.push(variantStyle)

  return (
    <div
      className={alertClassName.join(" ")}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
