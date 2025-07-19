import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export const Button = ({
  onClick,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const baseStyle = "text-white font-bold rounded-full";
  const variantStyle = {
    primary: "bg-[#9B1839] py-3 px-4",
    secondary: "bg-[#9B1839] px-4 py-2 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
