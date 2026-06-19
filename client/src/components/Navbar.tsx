import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, Shield, User, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { api, getImageUrl } from "@/lib/api";

const decodeToken = (token: string) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(
    decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join(""),
    ),
  );
};

const Navbar = () => {
  const location = useLocation();
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("ผู้ใช้");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const navLinks = [
    { label: t("home"), path: "/" },
    { label: t("attractions"), path: "/services" },
    { label: t("booking"), path: "/booking" },
    { label: t("contact"), path: "/contact" },
  ];

  useEffect(() => {
    const syncProfile = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (!token) {
        setIsAdmin(false);
        setProfileImage(null);
        return;
      }

      api
        .get("/auth/me")
        .then((response) => {
          const profile = response.data;
          setUserName(
            profile.username || profile.email || "ผู้ใช้",
          );
          setIsAdmin(profile.user_type === 1);
          setProfileImage(
            profile.image_profile ? getImageUrl(profile.image_profile) : null,
          );
        })
        .catch(() => {
          try {
            const payload = decodeToken(token);
            setUserName(payload.username || payload.email || "ผู้ใช้");
            setIsAdmin(payload.user_type === 1);
            setProfileImage(null);
          } catch {
            setIsAdmin(false);
            setProfileImage(null);
          }
        });
    };

    syncProfile();
    window.addEventListener("profile-updated", syncProfile);

    return () => {
      window.removeEventListener("profile-updated", syncProfile);
    };
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="hidden text-sm font-bold text-foreground sm:block">
              Srbr.com
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-bold hover:bg-secondary"
                >
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt={userName}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  <span className="max-w-[120px] truncate">{userName}</span>
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
                  >
                    <Shield className="h-4 w-4" />
                    {t("admin")}
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                >
                  <LogOut className="h-4 w-4" />
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="text-sm font-medium hover:text-primary"
                >
                  {t("register")}
                </Link>
                <Link
                  to="/login"
                  className="rounded-full bg-green-accent px-4 py-2 text-sm font-semibold text-green-accent-foreground"
                >
                  {t("login")}
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex custom-navbar-mobile">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-72 flex-col bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-bold">Srbr.com</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-1.5"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              {isLoggedIn && (
                <Link
                  to="/profile"
                  className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {t("profile")}
                </Link>
              )}
              {isAdmin && (
                <Link
                  to="/admin"
                  className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {t("admin")}
                </Link>
              )}
            </nav>
            <div className="mt-auto flex flex-col gap-3 border-t border-border px-4 py-6">
              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="rounded-xl bg-red-600 py-3 text-sm font-bold text-white"
                >
                  {t("logout")}
                </button>
              ) : (
                <>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-border py-3 text-center text-sm font-medium"
                  >
                    {t("register")}
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl bg-green-accent py-3 text-center text-sm font-semibold text-green-accent-foreground"
                  >
                    {t("login")}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
