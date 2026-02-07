import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/AuthInput";
import { AuthCard } from "@/components/AuthCard";
import { AuthButton } from "@/components/AuthButton";
import { SocialLogin } from "@/components/SocialLogin";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard on submit
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <AuthCard title="Login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={setEmail}
              icon="user"
              name="email"
            />

            <AuthInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              icon="lock"
              name="password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>

              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <div className="pt-4">
              <AuthButton type="submit">Login</AuthButton>
            </div>
          </form>

          <SocialLogin />

          <div className="text-center mt-8">
            <Link
              to="/register"
              className="text-foreground font-medium hover:underline"
            >
              Create an account
            </Link>
          </div>
        </AuthCard>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
