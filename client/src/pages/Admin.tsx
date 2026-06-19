import { useEffect, useState } from "react";
import {
  Calendar,
  CalendarPlus,
  DollarSign,
  Edit,
  FileImage,
  MapPin,
  PackagePlus,
  Plus,
  Trash2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchableSelect from "@/components/SearchableSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api, FILE_BASE_URL, getImageUrl } from "@/lib/api";
import { thaiAddress } from "@/lib/thai-address";

type Category = { category_id: number; name: string };
type AttractionForm = {
  attraction_name: string;
  category_id: string;
  district: string;
  subdistrict: string;
  location: string;
  address: string;
  opening_time: string;
  map_url: string;
  description: string;
  is_popular: boolean;
};
type Attraction = AttractionForm & {
  attraction_id: number;
  category?: Category;
  images?: { image_id: number; image_url: string; is_cover: boolean }[];
  _count?: { tour_packages?: number };
};
type Package = {
  package_id: number;
  package_name: string;
  description?: string;
  price: string;
  duration?: string;
  attraction_id: number;
  attraction?: { attraction_name?: string };
  _count?: { bookings?: number };
  schedules?: {
    id: number;
    date: string;
    capacity: number;
    booked_seats: number;
    _count?: { bookings?: number };
  }[];
};
type Booking = {
  booking_id: number;
  booking_status: string;
  total_price: string;
  people_count: number;
  current_province?: string;
  current_district?: string;
  booking_date?: string;
  package_id?: number;
  user?: {
    email?: string;
    username?: string;
    name?: string;
    lastname?: string;
  };
  package?: {
    package_name: string;
    attraction?: { attraction_name?: string };
  };
  schedule?: { id?: number; date: string };
  payments?: {
    payment_id: number;
    payment_status: string;
    slip_url?: string;
  }[];
};
type User = {
  user_id: number;
  username?: string;
  name?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  user_type?: number;
  is_active?: boolean;
};
type PackageForm = {
  package_name: string;
  price: string;
  duration: string;
  description: string;
  attraction_id: string;
};
type DeleteBlockedModalState = {
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  cancelLabel?: string;
};

const emptyAttractionForm: AttractionForm = {
  attraction_name: "",
  category_id: "",
  district: "",
  subdistrict: "",
  location: "",
  address: "",
  opening_time: "",
  map_url: "",
  description: "",
  is_popular: false,
};

const Admin = () => {
  const [tab, setTab] = useState("bookings");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [report, setReport] = useState<any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageAttractionId, setImageAttractionId] = useState("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editingAttraction, setEditingAttraction] = useState<Attraction | null>(
    null,
  );

  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingDateSearch, setBookingDateSearch] = useState("");
  const [bookingStatusFilter, setBookingStatusFilter] = useState("all");
  const [packageAttractionFocusId, setPackageAttractionFocusId] = useState<
    number | null
  >(null);
  const [attractionForm, setAttractionForm] =
    useState<AttractionForm>(emptyAttractionForm);
  const [attractionEditForm, setAttractionEditForm] =
    useState<AttractionForm>(emptyAttractionForm);
  const [packageForm, setPackageForm] = useState<PackageForm>({
    package_name: "",
    price: "",
    duration: "",
    description: "",
    attraction_id: "",
  });
  const [packageEditForm, setPackageEditForm] = useState<PackageForm>({
    package_name: "",
    price: "",
    duration: "",
    description: "",
    attraction_id: "",
  });
  const [scheduleForm, setScheduleForm] = useState({
    package_id: "",
    date: "",
    capacity: "",
  });
  const [deleteBlockedModal, setDeleteBlockedModal] =
    useState<DeleteBlockedModalState | null>(null);
  const [selectedReportMonth, setSelectedReportMonth] = useState("all");

  const goToPackagesForAttraction = (
    attractionId: number,
    packageCount: number,
  ) => {
    setPackageAttractionFocusId(attractionId);
    setTab("packages");
    setMessage(
      `สถานที่นี้มี ${packageCount} แพ็กเกจผูกอยู่ กรุณาลบแพ็กเกจที่เกี่ยวข้องก่อน`,
    );
  };

  const goToBookingsForLinkedData = (
    searchTerm: string,
    sourceLabel: string,
    dateSearchTerm: string = "",
  ) => {
    setTab("bookings");
    setBookingStatusFilter("all");
    setBookingSearch(searchTerm);
    setBookingDateSearch(dateSearchTerm);
    setMessage(
      `ข้อมูลที่ต้องลบยังผูกกับ Booking อยู่ (${sourceLabel}) กรุณาจัดการที่แท็บ Booking & Payment ก่อน`,
    );
  };

  const loadAll = async () => {
    const [cat, att, pkg, booking, user, rpt] = await Promise.all([
      api.get("/categories"),
      api.get("/admin/attractions"),
      api.get("/admin/packages"),
      api.get("/admin/bookings"),
      api.get("/admin/users"),
      api.get("/admin/reports"),
    ]);
    setCategories(cat.data);
    setAttractions(att.data);
    setPackages(pkg.data);
    setBookings(booking.data);
    setUsers(user.data);
    setReport(rpt.data);
  };

  useEffect(() => {
    loadAll().catch((err) =>
      setMessage(err.response?.data?.message || "โหลดข้อมูล admin ไม่สำเร็จ"),
    );
  }, []);

  // Auto-dismiss warning/info messages after 5 seconds
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const saveAttraction = async () => {
    await api.post("/admin/attractions", attractionForm);
    setMessage("เพิ่มสถานที่สำเร็จ");
    setAttractionForm(emptyAttractionForm);
    loadAll();
  };

  const updateAttraction = async () => {
    if (editingAttraction) {
      await api.patch(
        `/admin/attractions/${editingAttraction.attraction_id}`,
        attractionEditForm,
      );
      setMessage("แก้ไขสถานที่สำเร็จ");
      setEditingAttraction(null);
      setAttractionEditForm(emptyAttractionForm);
      loadAll();
    }
  };

  const startEditAttraction = (item: Attraction) => {
    setEditingAttraction(item);
    setAttractionEditForm({
      attraction_name: item.attraction_name || "",
      category_id: item.category_id ? String(item.category_id) : "",
      district: item.district || "",
      subdistrict: item.subdistrict || "",
      location: item.location || "",
      address: item.address || "",
      opening_time: item.opening_time || "",
      map_url: item.map_url || "",
      description: item.description || "",
      is_popular: Boolean(item.is_popular),
    });
  };

  const deleteAttraction = async (id: number) => {
    const relatedPackages = packages.filter(
      (item) => item.attraction_id === id,
    );
    if (relatedPackages.length > 0) {
      setDeleteBlockedModal({
        title: "ลบสถานที่ไม่ได้",
        description: `สถานที่นี้ผูกกับ ${relatedPackages.length} แพ็กเกจ ต้องลบแพ็กเกจที่ผูกอยู่ก่อน ต้องการไปหน้า Packages & Schedules ไหม?`,
        confirmLabel: "ไปหน้า Packages",
        onConfirm: () => goToPackagesForAttraction(id, relatedPackages.length),
      });
      return;
    }
    try {
      await api.delete(`/admin/attractions/${id}`);
      setMessage("ลบสถานที่สำเร็จ");
      loadAll();
    } catch (err: any) {
      if (err.response?.status === 409) {
        const fallbackCount = packages.filter(
          (item) => item.attraction_id === id,
        ).length;
        setDeleteBlockedModal({
          title: "ลบสถานที่ไม่ได้",
          description:
            "สถานที่นี้ยังมีแพ็กเกจผูกอยู่ ต้องการไปหน้า Packages & Schedules เพื่อจัดการก่อนหรือไม่?",
          confirmLabel: "ไปหน้า Packages",
          onConfirm: () => goToPackagesForAttraction(id, fallbackCount),
        });
        return;
      }
      setMessage(err.response?.data?.message || "ลบสถานที่ไม่สำเร็จ");
    }
  };

  const uploadImage = async () => {
    if (!imageFile || !imageAttractionId) return;
    await uploadImageForAttraction(Number(imageAttractionId), imageFile, true);
    setImageFile(null);
  };

  const uploadImageForAttraction = async (
    attractionId: number,
    file: File,
    isCover = false,
  ) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("upload_type", "attraction");
    formData.append("is_cover", String(isCover));
    await api.post(`/admin/attractions/${attractionId}/images`, formData);
    setMessage("อัปโหลดรูปสถานที่สำเร็จ");
    loadAll();
  };

  const uploadEditImage = async () => {
    if (!editingAttraction || !editImageFile) return;
    const current =
      attractions.find(
        (item) => item.attraction_id === editingAttraction.attraction_id,
      ) || editingAttraction;
    await uploadImageForAttraction(
      editingAttraction.attraction_id,
      editImageFile,
      !current.images?.length,
    );
    setEditImageFile(null);
  };

  const setCoverImage = async (imageId: number) => {
    await api.patch(`/admin/attraction-images/${imageId}/cover`);
    setMessage("ตั้งรูปปกสำเร็จ");
    loadAll();
  };

  const deleteAttractionImage = async (imageId: number) => {
    await api.delete(`/admin/attraction-images/${imageId}`);
    setMessage("ลบรูปสำเร็จ");
    loadAll();
  };

  const createPackage = async () => {
    const response = await api.post("/admin/packages", packageForm);
    setScheduleForm({
      ...scheduleForm,
      package_id: String(response.data.package_id),
    });
    setPackageForm({
      package_name: "",
      price: "",
      duration: "",
      description: "",
      attraction_id: "",
    });
    setMessage("สร้างแพ็กเกจแล้ว เพิ่มรอบเดินทางต่อได้ทันที");
    loadAll();
  };

  const startEditPackage = (item: Package) => {
    setEditingPackage(item);
    setPackageEditForm({
      package_name: item.package_name || "",
      price: item.price ? String(item.price) : "",
      duration: item.duration || "",
      description: item.description || "",
      attraction_id: item.attraction_id ? String(item.attraction_id) : "",
    });
  };

  const updatePackage = async () => {
    if (!editingPackage) return;
    await api.patch(
      `/admin/packages/${editingPackage.package_id}`,
      packageEditForm,
    );
    setMessage("แก้ไขแพ็กเกจสำเร็จ");
    setEditingPackage(null);
    loadAll();
  };

  const deletePackage = async (item: Package) => {
    const bookingCount = item._count?.bookings || 0;

    // Check if the package is NOT expired (has schedules today or in the future)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const hasActiveSchedules =
      item.schedules &&
      item.schedules.some((schedule) => {
        const sDate = new Date(schedule.date);
        sDate.setHours(0, 0, 0, 0);
        return sDate >= today;
      });

    // If it's NOT expired AND has bookings:
    if (hasActiveSchedules && bookingCount > 0) {
      setDeleteBlockedModal({
        title: "ลบแพ็กเกจไม่ได้",
        description: `แพ็กเกจนี้มีคนจองอยู่ หากต้องการลบ ต้อง clear ผู้จองออกก่อน`,
        confirmLabel: "ตกลง (ไปหน้า Bookings)",
        cancelLabel: "ยกเลิก",
        onConfirm: () =>
          goToBookingsForLinkedData(
            item.package_name,
            `แพ็กเกจ ${item.package_name}`,
          ),
      });
      return;
    }

    // Otherwise, show standard delete confirmation dialog:
    setDeleteBlockedModal({
      title: "ยืนยันการลบแพ็กเกจ",
      description: `คุณต้องการลบแพ็กเกจ "${item.package_name}" ใช่หรือไม่?`,
      confirmLabel: "ตกลง",
      cancelLabel: "ยกเลิก",
      onConfirm: async () => {
        try {
          await api.delete(`/admin/packages/${item.package_id}`);
          setMessage("ลบแพ็กเกจสำเร็จ");
          loadAll();
        } catch (err: any) {
          if (err.response?.status === 409) {
            setDeleteBlockedModal({
              title: "ลบแพ็กเกจไม่ได้",
              description:
                "แพ็กเกจนี้ยังผูกกับ Booking อยู่ ต้องการไปหน้า Booking & Payment เพื่อจัดการก่อนหรือไม่?",
              confirmLabel: "ไปหน้า Bookings",
              cancelLabel: "ยกเลิก",
              onConfirm: () =>
                goToBookingsForLinkedData(
                  item.package_name,
                  `แพ็กเกจ ${item.package_name}`,
                ),
            });
          } else {
            setMessage(err.response?.data?.message || "ลบแพ็กเกจไม่สำเร็จ");
          }
        }
      },
    });
  };

  const createSchedule = async () => {
    await api.post("/admin/schedules", scheduleForm);
    setMessage("เพิ่มรอบเดินทางสำเร็จ");
    setScheduleForm({ ...scheduleForm, date: "", capacity: "" });
    loadAll();
  };

  const deleteSchedule = async (
    scheduleId: number,
    bookingCount = 0,
    packageName = "",
    scheduleDate = "",
  ) => {
    const scheduleDateISO = scheduleDate ? scheduleDate.slice(0, 10) : "";
    const formattedDate = new Date(scheduleDate).toLocaleDateString("th-TH");

    if (bookingCount > 0) {
      setDeleteBlockedModal({
        title: "ลบรอบเดินทางไม่ได้",
        description: `รอบเดินทางนี้ผูกกับ ${bookingCount} Booking ต้องการไปหน้า Booking & Payment เพื่อจัดการก่อนหรือไม่?`,
        confirmLabel: "ไปหน้า Bookings",
        cancelLabel: "ยกเลิก",
        onConfirm: () =>
          goToBookingsForLinkedData(
            packageName,
            `รอบเดินทางวันที่ ${formattedDate} ของแพ็กเกจ ${packageName}`,
            scheduleDateISO,
          ),
      });
      return;
    }

    // Show standard confirmation modal before deleting schedule:
    setDeleteBlockedModal({
      title: "ยืนยันการลบรอบเดินทาง",
      description: `คุณต้องการลบรอบเดินทางวันที่ ${formattedDate} ของแพ็กเกจ "${packageName}" ใช่หรือไม่?`,
      confirmLabel: "ตกลง",
      cancelLabel: "ยกเลิก",
      onConfirm: async () => {
        try {
          await api.delete(`/admin/schedules/${scheduleId}`);
          setMessage("ลบรอบเดินทางสำเร็จ");
          loadAll();
        } catch (err: any) {
          if (err.response?.status === 409) {
            setDeleteBlockedModal({
              title: "ลบรอบเดินทางไม่ได้",
              description:
                "รอบเดินทางนี้ยังผูกกับ Booking อยู่ ต้องการไปหน้า Booking & Payment เพื่อจัดการก่อนหรือไม่?",
              confirmLabel: "ไปหน้า Bookings",
              cancelLabel: "ยกเลิก",
              onConfirm: () =>
                goToBookingsForLinkedData(
                  packageName,
                  `รอบเดินทางวันที่ ${formattedDate} ของแพ็กเกจ ${packageName}`,
                  scheduleDateISO,
                ),
            });
          } else {
            setMessage(err.response?.data?.message || "ลบรอบเดินทางไม่สำเร็จ");
          }
        }
      },
    });
  };

  const deleteBooking = async (bookingId: number) => {
    setDeleteBlockedModal({
      title: "ยืนยันการลบการจอง",
      description: `คุณต้องการลบการจอง ID #${bookingId} ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้`,
      confirmLabel: "ตกลง",
      cancelLabel: "ยกเลิก",
      onConfirm: async () => {
        try {
          await api.delete(`/admin/bookings/${bookingId}`);
          setMessage("ลบ Booking สำเร็จ");
          loadAll();
        } catch (err: any) {
          setMessage(err.response?.data?.message || "ลบ Booking ไม่สำเร็จ");
        }
      },
    });
  };

  const updatePayment = async (
    paymentId: number,
    action: "verify" | "reject",
  ) => {
    await api.patch(`/admin/payments/${paymentId}/${action}`);
    setMessage(
      action === "verify" ? "อนุมัติการชำระเงินแล้ว" : "ปฏิเสธการชำระเงินแล้ว",
    );
    loadAll();
  };

  const updateUser = async (user: User, data: Partial<User>) => {
    await api.patch(`/admin/users/${user.user_id}`, data);
    setMessage("อัปเดตผู้ใช้สำเร็จ");
    loadAll();
  };

  const tabs = [
    ["bookings", "Booking & Payment"],
    ["attractions", "Attractions"],
    ["packages", "Packages & Schedules"],
    ["users", "Users"],
    ["reports", "Reports"],
  ];

  const activeEditingAttraction = editingAttraction
    ? attractions.find(
        (item) => item.attraction_id === editingAttraction.attraction_id,
      ) || editingAttraction
    : null;
  const filteredBookings = bookings.filter((booking) => {
    const term = bookingSearch.trim().toLowerCase();
    const payment = booking.payments?.[0];
    const scheduleDateISO = booking.schedule?.date
      ? booking.schedule.date.slice(0, 10)
      : "";
    const scheduleDateTH = booking.schedule?.date
      ? new Date(booking.schedule.date).toLocaleDateString("th-TH")
      : "";
    const matchesStatus =
      bookingStatusFilter === "all" ||
      booking.booking_status === bookingStatusFilter ||
      payment?.payment_status === bookingStatusFilter;
    const matchesDate =
      !bookingDateSearch || scheduleDateISO === bookingDateSearch;
    const haystack = [
      booking.booking_id,
      booking.user?.email,
      booking.user?.username,
      booking.user?.name,
      booking.user?.lastname,
      booking.package?.package_name,
      booking.current_district,
      booking.schedule?.id,
      scheduleDateISO,
      scheduleDateTH,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return matchesStatus && matchesDate && (!term || haystack.includes(term));
  });
  const visiblePackages = packageAttractionFocusId
    ? packages.filter((item) => item.attraction_id === packageAttractionFocusId)
    : packages;

  // Dynamically calculate statistics for selected report month
  const isFiltered = selectedReportMonth !== "all";
  const displayBookings = isFiltered
    ? bookings.filter((b) => {
        const d = b.schedule?.date
          ? new Date(b.schedule.date)
          : b.booking_date
            ? new Date(b.booking_date)
            : null;
        if (!d) return false;
        const y = d.getFullYear();
        const m = d.getMonth();
        const key = `${y}-${String(m + 1).padStart(2, "0")}`;
        return key === selectedReportMonth;
      })
    : bookings;

  const displayBookingCount = displayBookings.length;
  const displayConfirmedRevenue = displayBookings.reduce((sum, b) => {
    const payment = b.payments?.[0];
    if (
      b.booking_status === "CONFIRMED" ||
      payment?.payment_status === "VERIFIED"
    ) {
      return sum + Number(b.total_price || 0);
    }
    return sum;
  }, 0);

  // Group packages for the selected period
  const packageStats: {
    [key: number]: { name: string; attraction: string; count: number };
  } = {};
  for (const b of displayBookings) {
    if (!b.package) continue;
    const pkgId = b.package_id || 0;
    if (!packageStats[pkgId]) {
      packageStats[pkgId] = {
        name: b.package.package_name,
        attraction: b.package.attraction?.attraction_name || "-",
        count: 0,
      };
    }
    packageStats[pkgId].count += 1;
  }
  const displayTopPackages = isFiltered
    ? Object.entries(packageStats)
        .map(([id, val]) => ({
          package_id: Number(id),
          package_name: val.name,
          attraction_name: val.attraction,
          bookings: val.count,
        }))
        .sort((a, b) => b.bookings - a.bookings)
        .slice(0, 5)
    : report?.topPackages || [];

  const displayUsersCount = isFiltered
    ? new Set(displayBookings.map((b) => b.user?.email).filter(Boolean)).size
    : report?.users || 0;

  const getMonthKey = (dateValue?: string) => {
    if (!dateValue) return "";
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  };

  const formatScheduleDate = (dateValue: string) =>
    new Date(dateValue).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  // Group bookings by package and keep only packages that have schedules in the selected month.
  const allPackagesPopularity = packages
    .filter((pkg) => {
      if (!isFiltered) return true;
      return pkg.schedules?.some(
        (schedule) => getMonthKey(schedule.date) === selectedReportMonth,
      );
    })
    .map((pkg) => {
      const scheduleDates = (pkg.schedules || [])
        .filter(
          (schedule) =>
            !isFiltered || getMonthKey(schedule.date) === selectedReportMonth,
        )
        .map((schedule) => schedule.date)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      const count = displayBookings.filter(
        (b) => b.package_id === pkg.package_id,
      ).length;
      return {
        package_id: pkg.package_id,
        package_name: pkg.package_name,
        attraction_name: pkg.attraction?.attraction_name || "-",
        bookings: count,
        price: pkg.price,
        scheduleDates,
      };
    })
    .sort((a, b) => b.bookings - a.bookings);

  return (
    <div className="flex min-h-screen flex-col bg-custom-green">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-extrabold">Admin Panel</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          จัดการ booking/payment ในที่เดียว แก้ไขสถานที่ผ่าน modal และสร้าง
          schedule ต่อจาก package ได้ทันที
        </p>
        {message && (
          <div className="mt-5 flex items-center justify-between rounded-lg bg-muted p-3 text-sm font-medium animate-in fade-in duration-200">
            <span>{message}</span>
            <button
              onClick={() => setMessage("")}
              className="ml-2 rounded-full p-1 hover:bg-black/5 transition-colors"
              aria-label="Close message"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              onClick={() => {
                setTab(id);
                setMessage("");
              }}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                tab === id ? "bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "bookings" && (
          <section className="mt-8 rounded-lg bg-card p-5 shadow-sm">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Booking & Payment</h2>
                <p className="text-sm text-muted-foreground">
                  ดูสถานะจอง ตรวจสลิป และอนุมัติในรายการเดียว
                </p>
              </div>
              <div className="text-sm font-bold">
                {filteredBookings.length} / {bookings.length} bookings
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_200px_180px_auto]">
              <Input
                value={bookingSearch}
                onChange={(event) => setBookingSearch(event.target.value)}
                placeholder="ค้นหา user, email, package, booking id"
              />
              <Input
                type="date"
                value={bookingDateSearch}
                onChange={(event) => setBookingDateSearch(event.target.value)}
                className="h-10"
              />
              <Select
                value={bookingStatusFilter}
                onValueChange={setBookingStatusFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="สถานะ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกสถานะ</SelectItem>
                  <SelectItem value="PENDING">PENDING</SelectItem>
                  <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                  <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                </SelectContent>
              </Select>
              {(bookingSearch ||
                bookingDateSearch ||
                bookingStatusFilter !== "all") && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setBookingSearch("");
                    setBookingDateSearch("");
                    setBookingStatusFilter("all");
                  }}
                >
                  ล้างตัวกรอง
                </Button>
              )}
            </div>
            <div className="mt-4 divide-y divide-border">
              {filteredBookings.map((booking) => {
                const payment = booking.payments?.[0];
                const userLabel =
                  [booking.user?.name, booking.user?.lastname]
                    .filter(Boolean)
                    .join(" ") ||
                  booking.user?.email ||
                  booking.user?.username ||
                  "-";
                return (
                  <div
                    key={booking.booking_id}
                    className="flex flex-col rounded-xl border border-border p-5 bg-card hover:shadow-md transition-all duration-200"
                  >
                    {/* Upper Section: Booking & User details (Takes full width, no squishing!) */}
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-bold text-muted-foreground">
                          ID #{booking.booking_id}
                        </span>
                        <span className="text-lg font-bold text-foreground">
                          {booking.package?.package_name}
                        </span>
                      </div>

                      <div className="mt-3 grid gap-x-4 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-3">
                        <div>
                          <span className="font-semibold text-foreground">
                            ผู้จอง:
                          </span>{" "}
                          {userLabel}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            อีเมล:
                          </span>{" "}
                          {booking.user?.email || "-"}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            จำนวน:
                          </span>{" "}
                          {booking.people_count} คน
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            วันที่เดินทาง:
                          </span>{" "}
                          {booking.schedule
                            ? new Date(
                                booking.schedule.date,
                              ).toLocaleDateString("th-TH")
                            : "-"}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            อำเภอ:
                          </span>{" "}
                          {booking.current_district || "-"}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">
                            ยอดเงินรวม:
                          </span>{" "}
                          <span className="font-extrabold text-foreground">
                            {Number(booking.total_price).toLocaleString()} บาท
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-xs">
                        <span className="font-semibold text-muted-foreground">
                          สถานะการชำระเงิน:
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-bold ${
                            payment?.payment_status === "VERIFIED"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : payment?.payment_status === "REJECTED"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                          }`}
                        >
                          {payment?.payment_status || "ยังไม่ชำระ"}
                        </span>
                      </div>
                    </div>

                    {/* Lower Section: Action Bar (Full width, placed on its own row at the bottom!) */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                      {/* Left: Booking Status Selector */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground">
                          สถานะการจอง:
                        </span>
                        <div className="w-44">
                          <Select
                            value={booking.booking_status}
                            onValueChange={(value) =>
                              api
                                .patch(
                                  `/admin/bookings/${booking.booking_id}/status`,
                                  { booking_status: value },
                                )
                                .then(loadAll)
                            }
                          >
                            <SelectTrigger className="h-9">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="PENDING">PENDING</SelectItem>
                              <SelectItem value="CONFIRMED">
                                CONFIRMED
                              </SelectItem>
                              <SelectItem value="CANCELLED">
                                CANCELLED
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Right: Administrative Actions Buttons */}
                      <div className="flex flex-wrap items-center gap-2">
                        {payment?.slip_url ? (
                          <a
                            href={`${FILE_BASE_URL}${payment.slip_url}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-bold hover:bg-muted"
                          >
                            ดูสลิป
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1.5 rounded-lg">
                            ไม่มีสลิป
                          </span>
                        )}
                        {payment &&
                          (payment.payment_status === "PENDING" ||
                            (booking.booking_status === "PENDING" &&
                              payment.slip_url)) && (
                            <>
                              <Button
                                size="sm"
                                className="h-9"
                                onClick={() =>
                                  updatePayment(payment.payment_id, "verify")
                                }
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="h-9"
                                onClick={() =>
                                  updatePayment(payment.payment_id, "reject")
                                }
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        <Button
                          size="sm"
                          variant="destructive"
                          className="h-9"
                          onClick={() => deleteBooking(booking.booking_id)}
                        >
                          ลบ
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {tab === "attractions" && (
          <section className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-5 shadow-sm">
                <h3 className="font-bold text-xl mb-4">เพิ่มสถานที่</h3>
                <AttractionFormView
                  categories={categories}
                  form={attractionForm}
                  setForm={setAttractionForm}
                  onSubmit={saveAttraction}
                  submitLabel="บันทึกสถานที่"
                />
              </div>

              <div className="rounded-lg bg-card p-5 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-xl mb-4">
                  <FileImage className="h-5 w-5" />
                  อัปโหลดรูปสถานที่
                </h3>
                <div className="mt-3 grid gap-3">
                  <Select
                    value={imageAttractionId}
                    onValueChange={setImageAttractionId}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกสถานที่" />
                    </SelectTrigger>
                    <SelectContent>
                      {attractions.map((item) => (
                        <SelectItem
                          key={item.attraction_id}
                          value={String(item.attraction_id)}
                        >
                          {item.attraction_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  />
                  <Button
                    onClick={uploadImage}
                    disabled={!imageFile || !imageAttractionId}
                  >
                    อัปโหลดรูป
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="text-xl font-bold border-b border-border pb-3 mb-4">
                สถานที่ทั้งหมด
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {attractions.map((item) => (
                  <div
                    key={item.attraction_id}
                    className="rounded-lg border border-border p-3"
                  >
                    <img
                      src={getImageUrl(item.images?.[0]?.image_url)}
                      alt={item.attraction_name}
                      className="mb-3 h-32 w-full rounded object-cover"
                    />
                    <div className="font-bold">{item.attraction_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.district || "-"} / {item.subdistrict || "-"}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => startEditAttraction(item)}
                      >
                        <Edit className="h-4 w-4" />
                        แก้ไข
                      </Button>
                      <Button
                        variant="destructive"
                        className="gap-2"
                        onClick={() => deleteAttraction(item.attraction_id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        ลบ
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {tab === "packages" && (
          <section className="mt-8 grid gap-6 lg:grid-cols-[380px_1fr]">
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-5 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <PackagePlus className="h-5 w-5 text-primary" />
                  สร้างแพ็กเกจ
                </h2>
                <div className="mt-4 grid gap-3">
                  <Input
                    placeholder="ชื่อแพ็กเกจ"
                    value={packageForm.package_name}
                    onChange={(e) =>
                      setPackageForm({
                        ...packageForm,
                        package_name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="ราคา"
                    value={packageForm.price}
                    onChange={(e) =>
                      setPackageForm({ ...packageForm, price: e.target.value })
                    }
                  />
                  <Input
                    placeholder="ระยะเวลา ... วัน"
                    value={packageForm.duration}
                    onChange={(e) =>
                      setPackageForm({
                        ...packageForm,
                        duration: e.target.value,
                      })
                    }
                  />
                  <Select
                    value={packageForm.attraction_id}
                    onValueChange={(value) =>
                      setPackageForm({ ...packageForm, attraction_id: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกสถานที่" />
                    </SelectTrigger>
                    <SelectContent>
                      {attractions.map((item) => (
                        <SelectItem
                          key={item.attraction_id}
                          value={String(item.attraction_id)}
                        >
                          {item.attraction_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="รายละเอียด"
                    value={packageForm.description}
                    onChange={(e) =>
                      setPackageForm({
                        ...packageForm,
                        description: e.target.value,
                      })
                    }
                  />
                  <Button onClick={createPackage}>สร้างแพ็กเกจ</Button>
                </div>
              </div>
              <div className="rounded-lg bg-card p-5 shadow-sm">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <CalendarPlus className="h-5 w-5 text-primary" />
                  เพิ่มรอบเดินทาง
                </h2>
                <div className="mt-4 grid gap-3">
                  <Select
                    value={scheduleForm.package_id}
                    onValueChange={(value) =>
                      setScheduleForm({ ...scheduleForm, package_id: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกแพ็กเกจ" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((item) => (
                        <SelectItem
                          key={item.package_id}
                          value={String(item.package_id)}
                        >
                          {item.package_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="date"
                    value={scheduleForm.date}
                    onChange={(e) =>
                      setScheduleForm({ ...scheduleForm, date: e.target.value })
                    }
                  />
                  <Input
                    placeholder="จำนวนที่นั่ง"
                    value={scheduleForm.capacity}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        capacity: e.target.value,
                      })
                    }
                  />
                  <Button
                    onClick={createSchedule}
                    disabled={
                      !scheduleForm.package_id ||
                      !scheduleForm.date ||
                      !scheduleForm.capacity
                    }
                  >
                    เพิ่มรอบเดินทาง
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-card p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold">Packages & Schedules</h2>
                {packageAttractionFocusId && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPackageAttractionFocusId(null)}
                  >
                    แสดงทุกแพ็กเกจ
                  </Button>
                )}
              </div>
              <div className="mt-4 divide-y divide-border">
                {visiblePackages.map((item) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  const hasSchedules =
                    item.schedules && item.schedules.length > 0;
                  const allSchedulesPassed =
                    hasSchedules &&
                    item.schedules.every((schedule) => {
                      const sDate = new Date(schedule.date);
                      sDate.setHours(0, 0, 0, 0);
                      return sDate < today;
                    });

                  return (
                    <div key={item.package_id} className="py-4">
                      {/* Upper Details Block */}
                      <div className="flex flex-col gap-1">
                        <div className="font-bold flex flex-wrap items-center gap-2 text-lg text-foreground">
                          #{item.package_id} {item.package_name}
                          {allSchedulesPassed && (
                            <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700 animate-pulse">
                              ❌ แพ็กเกจหมดเวลาแล้ว
                            </span>
                          )}
                          {!hasSchedules && (
                            <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-600">
                              ⚠️ ยังไม่มีรอบเดินทาง
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {Number(item.price).toLocaleString()} บาท ·{" "}
                          {item.attraction?.attraction_name ||
                            `attraction ${item.attraction_id}`}
                        </div>
                        <div className="text-sm font-bold text-muted-foreground">
                          {item._count?.bookings || 0} booking
                        </div>
                      </div>

                      {/* Buttons Row - Placed underneath the details */}
                      <div className="mt-3 flex flex-wrap gap-2 border-b border-border/50 pb-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startEditPackage(item)}
                        >
                          แก้ไขแพ็กเกจ
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setScheduleForm({
                              ...scheduleForm,
                              package_id: String(item.package_id),
                            })
                          }
                        >
                          เพิ่มรอบให้แพ็กเกจนี้
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deletePackage(item)}
                        >
                          ลบแพ็ก
                        </Button>
                      </div>
                      <div className="mt-3 grid gap-2">
                        {item.schedules && item.schedules.length > 0 ? (
                          item.schedules.map((schedule) => {
                            const sDate = new Date(schedule.date);
                            sDate.setHours(0, 0, 0, 0);
                            const isPassed = sDate < today;

                            return (
                              <div
                                key={schedule.id}
                                className={`grid gap-2 rounded p-3 text-sm md:grid-cols-[1fr_auto_auto] md:items-center ${
                                  isPassed
                                    ? "bg-red-50/40 border border-red-100/50"
                                    : "bg-muted"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span>
                                    {new Date(schedule.date).toLocaleDateString(
                                      "th-TH",
                                    )}
                                  </span>
                                  {isPassed && (
                                    <span className="text-xs font-semibold text-red-500 flex items-center gap-1">
                                      ❌ หมดเวลาแล้ว
                                    </span>
                                  )}
                                </span>
                                <span className="font-bold">
                                  {schedule.booked_seats}/{schedule.capacity}{" "}
                                  ที่นั่ง · {schedule._count?.bookings || 0}{" "}
                                  booking
                                </span>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() =>
                                    deleteSchedule(
                                      schedule.id,
                                      schedule._count?.bookings || 0,
                                      item.package_name,
                                      schedule.date,
                                    )
                                  }
                                >
                                  ลบรอบ
                                </Button>
                              </div>
                            );
                          })
                        ) : (
                          <div className="rounded bg-muted p-3 text-sm text-muted-foreground">
                            ยังไม่มีรอบเดินทาง
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {tab === "users" && (
          <section className="mt-8 rounded-lg bg-card p-5 shadow-sm">
            <h2 className="text-xl font-bold">Users</h2>
            <div className="mt-4 divide-y divide-border">
              {users.map((user) => (
                <div
                  key={user.user_id}
                  className="grid gap-3 py-3 md:grid-cols-[1fr_auto_auto] md:items-center"
                >
                  <div>
                    <div className="font-bold">
                      {[user.name, user.lastname].filter(Boolean).join(" ") ||
                        user.email ||
                        user.username}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {user.email || "-"} · {user.phone || "-"} · username:{" "}
                      {user.username || "-"} · role:{" "}
                      {user.user_type === 1 ? "admin" : "user"} ·{" "}
                      {user.is_active ? "active" : "disabled"}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      updateUser(user, {
                        user_type: user.user_type === 1 ? 0 : 1,
                      })
                    }
                  >
                    Toggle Role
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      updateUser(user, { is_active: !user.is_active })
                    }
                  >
                    {user.is_active ? "Disable" : "Enable"}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "reports" && (
          <section className="mt-8 grid gap-6 md:grid-cols-4">
            {/* Month Filter Selector */}
            <div className="md:col-span-4 flex flex-wrap items-center justify-between gap-4 bg-muted/40 p-5 rounded-xl border border-border">
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  ช่วงเวลาที่แสดงข้อมูล
                </h3>
                <p className="text-sm text-muted-foreground">
                  เลือกช่วงเวลาหรือเดือนย้อนหลัง
                  เพื่อตรวจสอบสถิติและผลประกอบการรายเดือน
                </p>
              </div>
              <div className="w-64">
                <Select
                  value={selectedReportMonth}
                  onValueChange={setSelectedReportMonth}
                >
                  <SelectTrigger className="bg-card h-10 font-medium">
                    <SelectValue placeholder="เลือกเดือน" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ทั้งหมด (ทุกช่วงเวลา)</SelectItem>
                    {report?.monthlyReports?.map((m: any) => (
                      <SelectItem key={m.monthKey} value={m.monthKey}>
                        {m.monthLabel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Overall / Monthly Stats Cards */}
            <div className="rounded-lg bg-card p-5 shadow-sm border border-border flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isFiltered ? "ยอดจองประจำเดือน" : "ยอดจองรวมทั้งหมด"}
                </div>
                <div className="mt-2 text-3xl font-extrabold text-foreground">
                  {displayBookingCount}
                </div>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Calendar className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded-lg bg-card p-5 shadow-sm border border-border flex items-center justify-between bg-gradient-to-br from-amber-500/5 to-amber-600/0">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isFiltered
                    ? "รายได้ประจำเป็นเดือน"
                    : "รายได้ยืนยันแล้วทั้งหมด"}
                </div>
                <div className="mt-2 text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                  {Number(displayConfirmedRevenue).toLocaleString()}
                </div>
              </div>
              <div className="rounded-full bg-amber-500/10 p-3 text-amber-500">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded-lg bg-card p-5 shadow-sm border border-border flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isFiltered ? "ผู้จองในเดือนนี้" : "ผู้ใช้ทั้งหมด"}
                </div>
                <div className="mt-2 text-3xl font-extrabold text-foreground">
                  {displayUsersCount}
                </div>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Users className="h-6 w-6" />
              </div>
            </div>

            <div className="rounded-lg bg-card p-5 shadow-sm border border-border flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  สถานที่ท่องเที่ยวทั้งหมด
                </div>
                <div className="mt-2 text-3xl font-extrabold text-foreground">
                  {attractions.length}
                </div>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
            </div>

            {/* Monthly Reports Section */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:col-span-4 border border-border">
              <div className="flex items-center gap-2 border-b border-border pb-4 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">
                  รายงานผลประกอบการรายเดือน (Monthly Reports)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-sm font-semibold">
                      <th className="py-3 px-4">เดือน / ปี</th>
                      <th className="py-3 px-4 text-center">จำนวนการจอง</th>
                      <th className="py-3 px-4 text-right">รายได้ยืนยันแล้ว</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {report?.monthlyReports &&
                    report.monthlyReports.length > 0 ? (
                      report.monthlyReports.map((m: any) => {
                        const isCurrentSelection =
                          selectedReportMonth === m.monthKey;
                        return (
                          <tr
                            key={m.monthKey}
                            onClick={() => setSelectedReportMonth(m.monthKey)}
                            className={`hover:bg-muted/50 transition-colors cursor-pointer ${
                              isCurrentSelection
                                ? "bg-primary/5 font-semibold"
                                : ""
                            }`}
                          >
                            <td className="py-4 px-4 font-bold text-foreground flex items-center gap-2">
                              {isCurrentSelection && (
                                <span className="h-2 w-2 rounded-full bg-primary" />
                              )}
                              {m.monthLabel}
                            </td>
                            <td className="py-4 px-4 text-center font-medium">
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                {m.bookingCount} รายการ
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right font-extrabold text-foreground">
                              {Number(m.confirmedRevenue || 0).toLocaleString()}{" "}
                              บาท
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={3}
                          className="py-8 text-center text-muted-foreground"
                        >
                          ไม่มีข้อมูลการจองรายเดือนในขณะนี้
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Packages Section */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:col-span-4 border border-border mt-2">
              <div className="flex items-center gap-2 border-b border-border pb-4 mb-4">
                <TrendingUp className="h-5 w-5 text-amber-500" />
                <h2 className="text-xl font-bold">
                  {isFiltered
                    ? "แพ็กเกจท่องเที่ยวที่มียอดจองสูงสุดในเดือนนี้"
                    : "แพ็กเกจท่องเที่ยวที่มียอดจองสูงสุดทั้งหมด (Top 5 Packages)"}
                </h2>
              </div>
              {displayTopPackages && displayTopPackages.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {displayTopPackages.map((item: any, idx: number) => {
                    const placeColors = [
                      "from-amber-500/10 to-amber-600/5 border-amber-500/30",
                      "from-blue-500/10 to-blue-600/5 border-blue-500/30",
                      "from-emerald-500/10 to-emerald-600/5 border-emerald-500/30",
                      "from-purple-500/10 to-purple-600/5 border-purple-500/30",
                      "from-pink-500/10 to-pink-600/5 border-pink-500/30",
                    ];
                    return (
                      <div
                        key={item.package_id}
                        className={`relative flex flex-col justify-between rounded-xl border p-4 bg-gradient-to-br ${placeColors[idx % 5]} shadow-sm transition-all hover:scale-[1.02]`}
                      >
                        <div
                          className={`absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shadow-inner ${
                            idx === 0
                              ? "bg-amber-500 text-white"
                              : idx === 1
                                ? "bg-slate-400 text-white"
                                : idx === 2
                                  ? "bg-amber-700 text-white"
                                  : "bg-muted text-muted-foreground"
                          }`}
                        >
                          #{idx + 1}
                        </div>
                        <div>
                          <div className="pr-6 font-bold text-base leading-tight text-foreground line-clamp-2 min-h-[2.5rem]">
                            {item.package_name}
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span className="truncate">
                              {item.attraction_name || "-"}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/50 flex items-baseline justify-between">
                          <span className="text-xs text-muted-foreground font-medium">
                            ยอดจองรวม
                          </span>
                          <span className="text-lg font-extrabold text-foreground">
                            {item.bookings}{" "}
                            <span className="text-xs font-bold text-muted-foreground">
                              ครั้ง
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-8 text-center text-muted-foreground text-sm">
                  ไม่มีแพ็กเกจที่ถูกจองในเดือนนี้
                </div>
              )}
            </div>

            {/* All Packages Table */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:col-span-4 border border-border mt-2">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">
                    รายการแพ็กเกจทั้งหมด (All Packages)
                  </h2>
                </div>
                <span className="text-xs text-muted-foreground font-semibold bg-muted px-2.5 py-1 rounded-md">
                  ทั้งหมด {allPackagesPopularity.length} แพ็กเกจ
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-sm font-semibold">
                      <th className="py-3 px-4 w-12 text-center">อันดับ</th>
                      <th className="py-3 px-4 min-w-[180px]">ชื่อแพ็กเกจ</th>
                      <th className="py-3 px-4 min-w-[140px]">
                        สถานที่ท่องเที่ยว
                      </th>
                      <th className="py-3 px-4 min-w-[190px]">รอบเดินทาง</th>
                      <th className="py-3 px-4 text-right whitespace-nowrap min-w-[110px]">
                        ราคา
                      </th>
                      <th className="py-3 px-4 text-center whitespace-nowrap min-w-[120px]">
                        จำนวนการจอง
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {allPackagesPopularity.map((pkg, idx) => {
                      return (
                        <tr
                          key={pkg.package_id}
                          className="hover:bg-muted/50 transition-colors"
                        >
                          <td className="py-4 px-4 text-center font-bold text-muted-foreground">
                            {idx + 1}
                          </td>
                          <td className="py-4 px-4 font-bold text-foreground max-w-[260px]">
                            {pkg.package_name}
                          </td>
                          <td className="py-4 px-4 text-muted-foreground text-sm">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                              {pkg.attraction_name}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">
                            {pkg.scheduleDates.length > 0 ? (
                              <div className="flex max-w-[220px] flex-col items-start gap-1.5">
                                {pkg.scheduleDates.map((date) => (
                                  <span
                                    key={`${pkg.package_id}-${date}`}
                                    className="whitespace-nowrap rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary"
                                  >
                                    {formatScheduleDate(date)}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-xs">ไม่มีรอบ</span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-right font-semibold text-foreground whitespace-nowrap">
                            {Number(pkg.price).toLocaleString()} บาท
                          </td>
                          <td className="py-4 px-4 text-center whitespace-nowrap">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                pkg.bookings > 0
                                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {pkg.bookings} ครั้ง
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                    {allPackagesPopularity.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className="py-8 text-center text-muted-foreground"
                        >
                          ไม่มีแพ็กเกจที่มีรอบเดินทางในเดือนที่เลือก
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </main>

      <Dialog
        open={Boolean(deleteBlockedModal)}
        onOpenChange={(open) => {
          if (!open) setDeleteBlockedModal(null);
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{deleteBlockedModal?.title}</DialogTitle>
            <DialogDescription>
              {deleteBlockedModal?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setDeleteBlockedModal(null)}
            >
              {deleteBlockedModal?.cancelLabel || "ไม่ไป"}
            </Button>
            <Button
              onClick={() => {
                deleteBlockedModal?.onConfirm();
                setDeleteBlockedModal(null);
              }}
            >
              {deleteBlockedModal?.confirmLabel || "ไปจัดการ"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(editingAttraction)}
        onOpenChange={(open) => {
          if (!open) {
            setEditingAttraction(null);
            setEditImageFile(null);
          }
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>แก้ไขสถานที่</DialogTitle>
            <DialogDescription>
              ปรับข้อมูลสถานที่โดยไม่ต้องออกจากหน้ารายการ
            </DialogDescription>
          </DialogHeader>
          <AttractionFormView
            categories={categories}
            form={attractionEditForm}
            setForm={setAttractionEditForm}
            onSubmit={updateAttraction}
            submitLabel="บันทึกการแก้ไข"
          />
          {activeEditingAttraction && (
            <AttractionImageManager
              attraction={activeEditingAttraction}
              imageFile={editImageFile}
              setImageFile={setEditImageFile}
              onUpload={uploadEditImage}
              onSetCover={setCoverImage}
              onDelete={deleteAttractionImage}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(editingPackage)}
        onOpenChange={(open) => !open && setEditingPackage(null)}
      >
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>แก้ไขแพ็กเกจ</DialogTitle>
            <DialogDescription>
              แก้ชื่อ ราคา ระยะเวลา รายละเอียด และสถานที่ของแพ็กเกจ
            </DialogDescription>
          </DialogHeader>
          <PackageFormView
            attractions={attractions}
            form={packageEditForm}
            setForm={setPackageEditForm}
            onSubmit={updatePackage}
            submitLabel="บันทึกแพ็กเกจ"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

const AttractionFormView = ({
  categories,
  form,
  setForm,
  onSubmit,
  submitLabel,
}: {
  categories: Category[];
  form: AttractionForm;
  setForm: (form: AttractionForm) => void;
  onSubmit: () => void;
  submitLabel: string;
}) => {
  const saraburi = thaiAddress.find((item) => item.name === "สระบุรี");
  const district = saraburi?.districts.find(
    (item) => item.name === form.district,
  );
  const districtOptions =
    saraburi?.districts.map((item) => ({
      value: item.name,
      label: item.name,
    })) || [];
  const subdistrictOptions =
    district?.subdistricts.map((item) => ({
      value: item.name,
      label: item.name,
    })) || [];

  return (
    <div className="mt-4 grid gap-3">
      <Input
        placeholder="ชื่อสถานที่"
        value={form.attraction_name}
        onChange={(e) => setForm({ ...form, attraction_name: e.target.value })}
      />
      <Select
        value={form.category_id}
        onValueChange={(value) => setForm({ ...form, category_id: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="ประเภท" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => (
            <SelectItem key={item.category_id} value={String(item.category_id)}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="grid gap-3 md:grid-cols-2">
        <SearchableSelect
          value={form.district}
          onChange={(value) =>
            setForm({ ...form, district: value, subdistrict: "" })
          }
          placeholder="อำเภอ"
          searchPlaceholder="พิมพ์ค้นหาอำเภอ"
          options={districtOptions}
        />
        <SearchableSelect
          value={form.subdistrict}
          onChange={(value) => setForm({ ...form, subdistrict: value })}
          placeholder="ตำบล"
          searchPlaceholder="พิมพ์ค้นหาตำบล"
          disabled={!form.district}
          options={subdistrictOptions}
        />
      </div>

      <Input
        placeholder="เวลาเปิด-ปิด"
        value={form.opening_time}
        onChange={(e) => setForm({ ...form, opening_time: e.target.value })}
      />
      <Input
        placeholder="Google Maps URL"
        value={form.map_url}
        onChange={(e) => setForm({ ...form, map_url: e.target.value })}
      />
      <Textarea
        placeholder="ที่อยู่"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <Textarea
        placeholder="รายละเอียด"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={form.is_popular}
          onChange={(e) => setForm({ ...form, is_popular: e.target.checked })}
        />
        ยอดนิยม
      </label>
      <Button onClick={onSubmit}>{submitLabel}</Button>
    </div>
  );
};

const AttractionImageManager = ({
  attraction,
  imageFile,
  setImageFile,
  onUpload,
  onSetCover,
  onDelete,
}: {
  attraction: Attraction;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  onUpload: () => void;
  onSetCover: (imageId: number) => void;
  onDelete: (imageId: number) => void;
}) => (
  <section className="mt-6 border-t border-border pt-5">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold">
          <FileImage className="h-5 w-5 text-primary" />
          รูปภาพสถานที่
        </h3>
        <p className="text-sm text-muted-foreground">
          เพิ่มรูปใหม่ ตั้งรูปปก หรือลบรูปที่ไม่ต้องการ
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={(event) => setImageFile(event.target.files?.[0] || null)}
        />
        <Button onClick={onUpload} disabled={!imageFile}>
          อัปโหลดเพิ่ม
        </Button>
      </div>
    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {attraction.images && attraction.images.length > 0 ? (
        attraction.images.map((image) => (
          <div
            key={image.image_id}
            className="overflow-hidden rounded-lg border border-border"
          >
            <div className="relative">
              <img
                src={getImageUrl(image.image_url)}
                alt={attraction.attraction_name}
                className="h-40 w-full object-cover"
              />
              {image.is_cover && (
                <span className="absolute left-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  รูปปก
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 p-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSetCover(image.image_id)}
                disabled={image.is_cover}
              >
                ตั้งเป็นปก
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(image.image_id)}
              >
                ลบรูป
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground sm:col-span-2">
          ยังไม่มีรูปภาพสำหรับสถานที่นี้
        </div>
      )}
    </div>
  </section>
);

const PackageFormView = ({
  attractions,
  form,
  setForm,
  onSubmit,
  submitLabel,
}: {
  attractions: Attraction[];
  form: PackageForm;
  setForm: (form: PackageForm) => void;
  onSubmit: () => void;
  submitLabel: string;
}) => (
  <div className="mt-4 grid gap-3">
    <Input
      placeholder="ชื่อแพ็กเกจ"
      value={form.package_name}
      onChange={(e) => setForm({ ...form, package_name: e.target.value })}
    />
    <Input
      placeholder="ราคา"
      value={form.price}
      onChange={(e) => setForm({ ...form, price: e.target.value })}
    />
    <Input
      placeholder="ระยะเวลา ... วัน"
      value={form.duration}
      onChange={(e) => setForm({ ...form, duration: e.target.value })}
    />
    <Select
      value={form.attraction_id}
      onValueChange={(value) => setForm({ ...form, attraction_id: value })}
    >
      <SelectTrigger>
        <SelectValue placeholder="เลือกสถานที่" />
      </SelectTrigger>
      <SelectContent>
        {attractions.map((item) => (
          <SelectItem
            key={item.attraction_id}
            value={String(item.attraction_id)}
          >
            {item.attraction_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Textarea
      placeholder="รายละเอียด"
      value={form.description}
      onChange={(e) => setForm({ ...form, description: e.target.value })}
    />
    <Button onClick={onSubmit}>{submitLabel}</Button>
  </div>
);

export default Admin;
