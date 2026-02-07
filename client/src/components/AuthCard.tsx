import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
}

export const AuthCard = ({ children, title }: AuthCardProps) => {
  return (
    <div className="auth-card animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
        {title}
      </h1>
      {children}
    </div>
  );
};
