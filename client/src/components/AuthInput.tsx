import { useState } from "react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

interface AuthInputProps {
  icon: LucideIcon;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}

const AuthInput = ({ icon: Icon, placeholder, type = "text", value, onChange }: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-ring/30">
      <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="shrink-0 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      )}
    </div>
  );
};

export default AuthInput;
