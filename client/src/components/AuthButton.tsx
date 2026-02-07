import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
}

export const AuthButton = ({
  children,
  variant = "primary",
  fullWidth = true,
  className,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      className={cn(
        "py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
        variant === "outline" &&
          "bg-transparent border-2 border-border text-foreground hover:bg-accent",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
