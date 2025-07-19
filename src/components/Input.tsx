import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  className = "",
}: InputProps) => {
  const baseStyle =
    "w-full p-3 bg-[#F0F2F5] text-[#9D9D9D] rounded-lg placeholder-gray-500";
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${baseStyle} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};
