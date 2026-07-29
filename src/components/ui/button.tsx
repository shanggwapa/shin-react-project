import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    tertiary: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={cn("cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}