import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  isLoading = false,
  size = "medium",
  type = "button",
  disabled = false,
  full = false,
  ...rest
}) => {
  const buttonClassName = [
    "rounded-md font-medium transition",
    "focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:opacity-90",
    "flex items-center justify-center gap-2",
    full ? "w-full" : "",
    className,
  ];

  const sizeStyle =
    {
      large: "py-3 px-4 text-lg",
      medium: "py-2 px-3 text-base",
      small: "py-1 px-2 text-xs",
      none: "",
    }[size] || "";

  const variantStyle =
    {
      default: "bg-gray-200 text-black",
      plain: "p-0 h-fit w-fit bg-transparent !text-dark p-0",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-black-1",
    }[variant] || "";

  if (sizeStyle) buttonClassName.push(sizeStyle);
  if (variantStyle) buttonClassName.push(variantStyle);
  if (isLoading) buttonClassName.push("opacity-50 cursor-not-allowed");

  return (
    <button
      className={buttonClassName.join(" ")}
      type={type}
      disabled={disabled || isLoading}
      {...rest}
    >
      <div className="m-auto">{children}</div>
    </button>
  );
};

export default Button;
