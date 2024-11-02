import React from "react";

const InputGroup: React.FC<BaseInputGroupProps> = ({
  children,
  errorMessage,
  label,
}) => {
  return (
    <div className="text-sm [&:not(:last-child)]:mb-4">
      <label className="block font-medium text-gray-700">
        <div className="mb-2">{label}</div>
        {children}
        {errorMessage && (
          <div className="mt-1 text-red-400 text-xs">{errorMessage}</div>
        )}
      </label>
    </div>
  );
};

export default InputGroup;
