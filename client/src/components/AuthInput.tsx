import { useState } from "react";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";

interface AuthInputProps {
  type: "email" | "password" | "text";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: "user" | "lock" | "mail";
  name?: string;
}

const iconMap = {
  user: User,
  lock: Lock,
  mail: Mail,
};

export const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
  icon = "user",
  name,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = iconMap[icon];

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="auth-input-wrapper">
      <Icon className="w-5 h-5 text-muted-foreground" />
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        className="auth-input"
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};
