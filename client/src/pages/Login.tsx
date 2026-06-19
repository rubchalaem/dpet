import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { User, Lock } from "lucide-react";
import AuthInput from "@/components/AuthInput";
import Footer from "@/components/Footer";
import { api, API_BASE_URL } from "@/lib/api";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      const msg = "กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน";
      setError(msg);
      alert(msg);
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email: email, 
        password: password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/"); 
      }
    } catch (err) {
      console.error(err);
      
      const serverMessage = err.response?.data?.message;
      let finalMessage = "เกิดข้อผิดพลาดในการเข้าสู่ระบบ";

      if (serverMessage) {
        finalMessage = serverMessage;
      } else if (err.response?.status === 404) {
        finalMessage = "ไม่พบอีเมลนี้ในระบบ กรุณาสมัครสมาชิก";
      } else if (err.response?.status === 401) {
        finalMessage = "รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่";
      }

      setError(finalMessage);
      alert(finalMessage); 

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
          <span className="text-base font-bold text-foreground">Srbr.com</span>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-14">
        <div className="w-full max-w-md space-y-6">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-foreground">เข้าสู่ระบบ</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              ยินดีต้อนรับกลับมา! กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
            </p>
          </div>

      <form 
            onSubmit={handleLogin} 
            className="rounded-2xl bg-card p-8 shadow-md border border-border space-y-5"
          >
            <AuthInput
              icon={User}
              placeholder="อีเมลหรือชื่อผู้ใช้งาน"
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

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* 6. เปลี่ยนเป็น type="submit" และใส่ Loading state */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-brown-dark py-3.5 text-sm font-bold text-brown-dark-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">หรือเข้าสู่ระบบด้วย</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Social */}
            <div className="flex justify-center">
              <button
                type="button"
                aria-label="Google"
                onClick={handleGoogleLogin}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-300 bg-card shadow-sm transition-all hover:border-red-400 hover:shadow-md"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                  />
                </svg>
              </button>
            </div>

          
          </form>
          

          <p className="text-center text-sm text-muted-foreground">
            ยังไม่มีบัญชี?{" "}
            <Link
              to="/register"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              สมัครสมาชิก
            </Link>
          </p>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Login;
