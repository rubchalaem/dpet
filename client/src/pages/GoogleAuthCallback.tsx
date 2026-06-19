import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get("token");
    const oauthError = params.get("error");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState(null, "", window.location.pathname);
      navigate("/", { replace: true });
      return;
    }

    setError(
      oauthError
        ? "ไม่สามารถเข้าสู่ระบบด้วย Google ได้ กรุณาลองใหม่"
        : "ไม่ได้รับข้อมูลเข้าสู่ระบบจาก Google"
    );
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-md">
        {error ? (
          <>
            <h1 className="text-xl font-bold text-foreground">เข้าสู่ระบบไม่สำเร็จ</h1>
            <p className="mt-3 text-sm text-red-600">{error}</p>
            <Link
              to="/login"
              className="mt-6 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              กลับไปหน้าเข้าสู่ระบบ
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-foreground">กำลังเข้าสู่ระบบ</h1>
            <p className="mt-3 text-sm text-muted-foreground">กรุณารอสักครู่...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GoogleAuthCallback;
