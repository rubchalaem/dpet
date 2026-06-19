import { useEffect, useState } from "react";

const dictionary = {
  th: {
    home: "หน้าแรก",
    attractions: "สถานที่",
    booking: "จอง",
    contact: "ติดต่อ",
    profile: "โปรไฟล์",
    admin: "แอดมิน",
    login: "เข้าสู่ระบบ",
    logout: "ออกจากระบบ",
    register: "สมัครสมาชิก",
  },
  en: {
    home: "Home",
    attractions: "Attractions",
    booking: "Booking",
    contact: "Contact",
    profile: "Profile",
    admin: "Admin",
    login: "Login",
    logout: "Logout",
    register: "Register",
  },
};

export type Language = keyof typeof dictionary;

export const useI18n = () => {
  const [lang, setLangState] = useState<Language>((localStorage.getItem("lang") as Language) || "th");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const setLang = (next: Language) => setLangState(next);
  const t = (key: keyof typeof dictionary.th) => dictionary[lang][key] || dictionary.th[key];

  return { lang, setLang, t };
};
