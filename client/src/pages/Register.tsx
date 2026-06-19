import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import AuthInput from "@/components/AuthInput";
import Footer from "@/components/Footer";
import { api } from "@/lib/api";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();
  setError("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("กรุณากรอกรูปแบบอีเมลให้ถูกต้อง (เช่น example@mail.com)");
    setError("รูปแบบอีเมลไม่ถูกต้อง");
    return; 
  }

  if (password !== confirm) {
    alert("รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
    setError("รหัสผ่านไม่ตรงกัน");
    return; 
  }

  if (password.length < 6) {
    alert("รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร");
    setError("รหัสผ่านสั้นเกินไป");
    return;
  }

  setLoading(true);

  try {
    const response = await api.post(
      "/auth/register",
      { username, email, password },
      { headers: { 'Content-Type': 'application/json' } } 
    );
    
    alert("สมัครสมาชิกสำเร็จ!");
    console.log("Register success:", response.data);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    navigate("/login");

  } catch (err) {
    console.error(err);
    const errorMessage = err.response?.data?.message || "สมัครสมาชิกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง";
    setError(errorMessage);
    alert(errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card px-4 py-3 shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-base font-bold text-foreground">
            Srbr.com
          </span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-14">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-foreground">
              สมัครสมาชิก
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              สร้างบัญชีใหม่เพื่อเริ่มต้นใช้งาน
            </p>
          </div>

          {/* Card */}
          <form
            onSubmit={handleRegister}
            className="rounded-2xl bg-card p-8 shadow-md border border-border space-y-5"
          >
            <AuthInput
              icon={User}
              placeholder="ชื่อผู้ใช้งาน"
              value={username}
              onChange={setUsername}
            />

            <AuthInput
              icon={Mail}
              placeholder="อีเมล"
              value={email}
              onChange={setEmail}
            />

            <AuthInput
              icon={Lock}
              placeholder="รหัสผ่าน"
              type="password"
              value={password}
              onChange={setPassword}
            />

            <AuthInput
              icon={Lock}
              placeholder="ยืนยันรหัสผ่าน"
              type="password"
              value={confirm}
              onChange={setConfirm}
            />

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            มีบัญชีอยู่แล้ว?{" "}
            <Link
              to="/login"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
