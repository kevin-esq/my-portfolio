import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: ReactNode;
}

const buttonVariants = {
  default: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
  outline: "border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", isLoading, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    return (
      <button ref={ref} className={baseClasses} disabled={isLoading} {...props}>
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
