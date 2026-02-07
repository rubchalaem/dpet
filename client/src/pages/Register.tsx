import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "@/components/AuthInput";
import { AuthCard } from "@/components/AuthCard";
import { AuthButton } from "@/components/AuthButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <AuthCard title="Create Account">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <AuthInput
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={setName}
                icon="user"
                name="name"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <AuthInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={setEmail}
                icon="mail"
                name="email"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <AuthInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
                icon="lock"
                name="password"
              />
              {errors.password && (
                <p className="text-destructive text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <AuthInput
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                icon="lock"
                name="confirmPassword"
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="pt-4">
              <AuthButton type="submit">Create Account</AuthButton>
            </div>
          </form>

          <div className="text-center mt-8">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link
              to="/login"
              className="text-foreground font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </AuthCard>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
