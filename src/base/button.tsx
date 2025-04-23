import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-white text-primary font-medium py-2 px-4 rounded cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
