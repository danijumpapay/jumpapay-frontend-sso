import React, {ChangeEvent} from "react";

const Input: React.FC<BaseInputProps> = (props) => {
    const {
        value,
        type,
        placeholder,
        name,
        required,
        readonly,
        disabled,
        pattern,
        onKeyDown,
        onPaste,
        id,
        dataTestid,
      } = props;
      const className = [
        "disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent",
        "rounded-md py-3 px-4",
        "[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent",
        "transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90",
        "focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40",
        "dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"
      ];
  
      if (Array.isArray(props.className)) {
        className.push(...props.className);
      } else if (props.className) {
        className.push(props.className);
      }
    
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(event);
      };
    
      const handleOnFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        if (props.onFocus) props.onFocus(event);
      };
    
      return (
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={className.join(" ")}
          value={value === null ? "" : value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          readOnly={readonly}
          disabled={disabled}
          onFocus={handleOnFocus}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          id={id}
          data-testid={dataTestid}
        />
      );
}


export default Input