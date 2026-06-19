import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { CalendarDays, CreditCard, Loader2, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddressFields, {
  AddressData,
  emptyAddress,
} from "@/components/AddressFields";
import SearchableSelect from "@/components/SearchableSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api, getImageUrl } from "@/lib/api";

type Schedule = {
  id: number;
  date: string;
  capacity: number;
  booked_seats: number;
  available: number;
};

type TravelPackage = {
  package_id: number;
  package_name: string;
  description?: string;
  price: number;
  attraction?: {
    attraction_name: string;
    location?: string;
    description?: string;
    opening_time?: string;
    map_url?: string;
    images?: { image_url: string }[];
  };
  schedules: Schedule[];
};

type BookingDefaults = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  id_card?: string;
  current_province?: string;
  current_district?: string;
  current_subdistrict?: string;
  current_zipcode?: string;
  current_address_detail?: string;
};

type BookingDraft = {
  formData: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    id_card: string;
  };
  currentAddress: AddressData;
};

type BookingFieldErrors = Partial<
  Record<"first_name" | "last_name" | "email" | "phone" | "id_card", string>
>;

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("th-TH", { dateStyle: "long" }).format(
    new Date(value),
  );
const bookingDraftStorageKey = "booking_draft_v1";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isAddressEmpty = (address: AddressData) =>
  !address.province &&
  !address.district &&
  !address.subdistrict &&
  !address.zipcode &&
  !address.detail;

const Booking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageIdParam = searchParams.get("packageId");
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState("");
  const [selectedScheduleId, setSelectedScheduleId] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<BookingFieldErrors>({});
  const [currentAddress, setCurrentAddress] =
    useState<AddressData>(emptyAddress);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    id_card: "",
  });
  const packageSectionRef = useRef<HTMLDivElement>(null);
  const addressSectionRef = useRef<HTMLDivElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const idCardInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const draftRaw = localStorage.getItem(bookingDraftStorageKey);
    if (!draftRaw) return;

    try {
      const draft = JSON.parse(draftRaw) as Partial<BookingDraft>;
      if (draft.formData) {
        setFormData((prev) => ({
          first_name: prev.first_name || draft.formData?.first_name || "",
          last_name: prev.last_name || draft.formData?.last_name || "",
          email: prev.email || draft.formData?.email || "",
          phone: prev.phone || draft.formData?.phone || "",
          id_card: prev.id_card || draft.formData?.id_card || "",
        }));
      }
      if (draft.currentAddress) {
        setCurrentAddress((prev) =>
          isAddressEmpty(prev)
            ? { ...emptyAddress, ...draft.currentAddress }
            : prev,
        );
      }
    } catch {
      localStorage.removeItem(bookingDraftStorageKey);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    Promise.all([
      api.get("/packages"),
      token
        ? api
            .get("/bookings/defaults/me")
            .catch(() => ({ data: null as BookingDefaults | null }))
        : Promise.resolve({ data: null as BookingDefaults | null }),
    ])
      .then(([packageResponse, bookingDefaultsResponse]) => {
        setPackages(packageResponse.data);

        // Find if target package exists in packageResponse.data
        const defaultPackageId =
          packageIdParam ||
          (packageResponse.data[0]
            ? String(packageResponse.data[0].package_id)
            : "");
        const selectedPkg =
          packageResponse.data.find(
            (pkg: TravelPackage) => String(pkg.package_id) === defaultPackageId,
          ) || packageResponse.data[0];

        const targetPackageId = selectedPkg
          ? String(selectedPkg.package_id)
          : "";
        setSelectedPackageId(targetPackageId);

        const firstAvailableSchedule =
          selectedPkg?.schedules?.find((s: Schedule) => s.available > 0) ||
          selectedPkg?.schedules?.[0];

        if (firstAvailableSchedule) {
          setSelectedScheduleId(String(firstAvailableSchedule.id));
        }

        const bookingDefaults = bookingDefaultsResponse.data;
        if (!bookingDefaults) return;

        setFormData((prev) => ({
          first_name: prev.first_name || bookingDefaults.first_name || "",
          last_name: prev.last_name || bookingDefaults.last_name || "",
          email: prev.email || bookingDefaults.email || "",
          phone: prev.phone || bookingDefaults.phone || "",
          id_card: prev.id_card || bookingDefaults.id_card || "",
        }));

        const nextCurrentAddress: AddressData = {
          province: bookingDefaults.current_province || "",
          district: bookingDefaults.current_district || "",
          subdistrict: bookingDefaults.current_subdistrict || "",
          zipcode: bookingDefaults.current_zipcode || "",
          detail: bookingDefaults.current_address_detail || "",
        };

        setCurrentAddress((prev) =>
          isAddressEmpty(prev) ? nextCurrentAddress : prev,
        );
      })
      .catch((err) =>
        setError(err.response?.data?.message || "โหลดแพ็กเกจไม่สำเร็จ"),
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const draft: BookingDraft = {
      formData,
      currentAddress,
    };
    localStorage.setItem(bookingDraftStorageKey, JSON.stringify(draft));
  }, [formData, currentAddress]);

  const selectedPackage = useMemo(
    () =>
      packages.find((item) => String(item.package_id) === selectedPackageId),
    [packages, selectedPackageId],
  );
  const selectedSchedule = useMemo(
    () =>
      selectedPackage?.schedules.find(
        (item) => String(item.id) === selectedScheduleId,
      ),
    [selectedPackage, selectedScheduleId],
  );
  const totalPrice = selectedPackage ? selectedPackage.price * peopleCount : 0;
  const remainingSeats = selectedSchedule?.available ?? 0;

  const pickPackage = (value: string) => {
    const nextPackage = packages.find(
      (item) => String(item.package_id) === value,
    );
    const firstAvailableSchedule =
      nextPackage?.schedules?.find((s) => s.available > 0) ||
      nextPackage?.schedules?.[0];

    setSelectedPackageId(value);
    setSelectedScheduleId(
      firstAvailableSchedule ? String(firstAvailableSchedule.id) : "",
    );
  };

  const pickSchedule = (value: string) => {
    setSelectedScheduleId(value);
  };

  const clearFieldError = (field: keyof BookingFieldErrors) => {
    if (!fieldErrors[field]) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const scrollToElement = (element: HTMLElement | null) => {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const focusField = (field: keyof BookingFieldErrors) => {
    const input =
      field === "first_name"
        ? firstNameInputRef.current
        : field === "last_name"
          ? lastNameInputRef.current
          : field === "email"
            ? emailInputRef.current
            : field === "phone"
              ? phoneInputRef.current
              : idCardInputRef.current;

    if (!input) return;
    scrollToElement(input);
    window.setTimeout(() => input.focus({ preventScroll: true }), 250);
  };

  const submit = async () => {
    if (!localStorage.getItem("token")) return navigate("/login");
    setFieldErrors({});
    if (!selectedPackage || !selectedSchedule) {
      scrollToElement(packageSectionRef.current);
      return setError("กรุณาเลือกแพ็กเกจและวันที่เดินทาง");
    }
    if (peopleCount > remainingSeats)
      return setError("จำนวนคนมากกว่าที่นั่งคงเหลือ");

    const nextFieldErrors: BookingFieldErrors = {};
    if (!formData.first_name.trim()) nextFieldErrors.first_name = "กรุณากรอกชื่อ";
    if (!formData.last_name.trim()) nextFieldErrors.last_name = "กรุณากรอกนามสกุล";
    if (!formData.email.trim()) {
      nextFieldErrors.email = "กรุณากรอกอีเมล";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextFieldErrors.email = "อีเมลไม่ถูกต้อง เช่น name@example.com";
    }
    if (!formData.phone) {
      nextFieldErrors.phone = "กรุณากรอกเบอร์โทร";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      nextFieldErrors.phone = "เบอร์โทรต้องเป็นตัวเลข 10 หลัก";
    }
    if (!formData.id_card) {
      nextFieldErrors.id_card = "กรุณากรอกเลขบัตรประชาชน";
    } else if (!/^\d{13}$/.test(formData.id_card)) {
      nextFieldErrors.id_card = "เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก";
    }
    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      focusField(Object.keys(nextFieldErrors)[0] as keyof BookingFieldErrors);
      return setError("กรุณาตรวจสอบข้อมูลผู้จองที่แจ้งเตือนใต้ช่องกรอก");
    }

    if (
      !currentAddress.province ||
      !currentAddress.district ||
      !currentAddress.subdistrict
    ) {
      scrollToElement(addressSectionRef.current);
      return setError("กรุณาเลือกที่อยู่ปัจจุบันให้ครบ");
    }

    const finalIdentity = currentAddress;
    setSubmitting(true);
    setError("");
    try {
      const response = await api.post("/bookings", {
        package_id: selectedPackage.package_id,
        schedule_id: selectedSchedule.id,
        people_count: peopleCount,
        ...formData,
        current_address: [
          currentAddress.detail,
          currentAddress.subdistrict,
          currentAddress.district,
          currentAddress.province,
          currentAddress.zipcode,
        ]
          .filter(Boolean)
          .join(" "),
        identity_address: [
          finalIdentity.detail,
          finalIdentity.subdistrict,
          finalIdentity.district,
          finalIdentity.province,
          finalIdentity.zipcode,
        ]
          .filter(Boolean)
          .join(" "),
        current_province: currentAddress.province,
        current_district: currentAddress.district,
        current_subdistrict: currentAddress.subdistrict,
        current_zipcode: currentAddress.zipcode,
        current_address_detail: currentAddress.detail,
        identity_province: finalIdentity.province,
        identity_district: finalIdentity.district,
        identity_subdistrict: finalIdentity.subdistrict,
        identity_zipcode: finalIdentity.zipcode,
        identity_address_detail: finalIdentity.detail,
      });
      localStorage.removeItem(bookingDraftStorageKey);
      navigate(`/payment/${response.data.data.booking_id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || "จองไม่สำเร็จ");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-custom-green">
      <Navbar />
      <main className="flex-1">
        <section className="bg-brown-dark px-4 py-10 text-brown-dark-foreground">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brown-dark-foreground/60">
              Booking
            </p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
              จองทริปท่องเที่ยวสระบุรี
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-brown-dark-foreground/75">
              เลือกแพ็กเกจ เลือกรอบวันเดินทาง กรอกข้อมูลผู้จอง
              และระบบจะตรวจที่นั่งคงเหลือก่อนยืนยัน
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {/* ── เลือกแพ็กเกจ ── */}
            <div ref={packageSectionRef} className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-primary" />
                เลือกแพ็กเกจ
              </h2>
              <SearchableSelect
                value={selectedPackageId}
                onChange={pickPackage}
                placeholder="เลือกแพ็กเกจ"
                searchPlaceholder="พิมพ์ชื่อแพ็กเกจ"
                className="h-12"
                options={packages.map((item) => ({
                  value: String(item.package_id),
                  label: item.package_name,
                }))}
              />
            </div>

            {/* ── รายละเอียดแพ็กเกจ ── */}
            {selectedPackage && (
              <div className="overflow-hidden rounded-lg bg-card shadow-sm">
                <div className="aspect-[16/8] bg-muted">
                  <img
                    src={getImageUrl(
                      selectedPackage.attraction?.images?.[0]?.image_url,
                    )}
                    alt={selectedPackage.package_name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h2 className="text-2xl font-extrabold">
                    {selectedPackage.package_name}
                  </h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {selectedPackage.description ||
                      selectedPackage.attraction?.description ||
                      "แพ็กเกจท่องเที่ยวสระบุรี"}
                  </p>
                  <div className="grid gap-3 text-sm md:grid-cols-3">
                    <div className="rounded-lg bg-muted p-3">
                      <div className="font-bold">ราคา</div>
                      <div>{selectedPackage.price.toLocaleString()} บาท/คน</div>
                    </div>
                    <div className="rounded-lg bg-muted p-3">
                      <div className="font-bold">เวลาเปิด</div>
                      <div>
                        {selectedPackage.attraction?.opening_time ||
                          "ตามรอบทัวร์"}
                      </div>
                    </div>
                    <a
                      href={selectedPackage.attraction?.map_url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-muted p-3 hover:bg-secondary"
                    >
                      <div className="font-bold">Google Maps</div>
                      <div>
                        {selectedPackage.attraction?.location || "ดูแผนที่"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* ── วันที่และจำนวนคน ── */}
            <div className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <CalendarDays className="h-5 w-5 text-primary" />
                วันที่และจำนวนคน
              </h2>

              {/* เลือกรอบ */}
              {!selectedPackage && (
                <p className="mb-4 text-sm text-muted-foreground">
                  กรุณาเลือกแพ็กเกจก่อน
                </p>
              )}
              {selectedPackage && selectedPackage.schedules.length === 0 && (
                <p className="mb-4 text-sm text-muted-foreground">
                  ยังไม่มีรอบจองสำหรับแพ็กเกจนี้
                </p>
              )}
              {selectedPackage && selectedPackage.schedules.length > 0 && (
                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    เลือกรอบวันเดินทาง
                  </p>
                  <Select
                    value={selectedScheduleId}
                    onValueChange={pickSchedule}
                  >
                    <SelectTrigger className="h-12 w-full">
                      <SelectValue placeholder="เลือกรอบวันที่" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedPackage.schedules.map((schedule) => {
                        const isFull = schedule.available <= 0;
                        return (
                          <SelectItem
                            key={schedule.id}
                            value={String(schedule.id)}
                            disabled={isFull}
                          >
                            <span className="flex items-center gap-3">
                              <span className="font-semibold">
                                {formatDate(schedule.date)}
                              </span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                                  isFull
                                    ? "bg-red-100 text-red-600"
                                    : schedule.available <= 5
                                      ? "bg-orange-100 text-orange-600"
                                      : "bg-green-100 text-green-700"
                                }`}
                              >
                                {isFull
                                  ? "เต็ม"
                                  : `เหลือ ${schedule.available} ที่`}
                              </span>
                            </span>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* จำนวนคน */}
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  จำนวนคน
                </p>
                <Input
                  type="number"
                  min={1}
                  max={Math.max(1, remainingSeats)}
                  value={peopleCount}
                  onChange={(event) =>
                    setPeopleCount(Math.max(1, Number(event.target.value)))
                  }
                />
              </div>

              {/* ที่นั่งคงเหลือ */}
              {selectedSchedule && (
                <div
                  className={`mt-4 rounded-lg p-4 text-sm font-semibold ${
                    remainingSeats <= 0
                      ? "bg-red-50 text-red-600"
                      : remainingSeats <= 5
                        ? "bg-orange-50 text-orange-600"
                        : "bg-green-accent/10 text-green-accent"
                  }`}
                >
                  {remainingSeats <= 0
                    ? "❌ รอบนี้เต็มแล้ว"
                    : `ที่นั่งคงเหลือ: ${remainingSeats} / ${selectedSchedule.capacity} ที่`}
                </div>
              )}
            </div>

            {/* ── ข้อมูลผู้จอง ── */}
            <div className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Users className="h-5 w-5 text-primary" />
                ข้อมูลผู้จอง
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Input
                    ref={firstNameInputRef}
                    placeholder="ชื่อ"
                    className={fieldErrors.first_name ? "border-red-500 focus-visible:ring-red-500" : ""}
                    value={formData.first_name}
                    onChange={(e) => {
                      clearFieldError("first_name");
                      setFormData({ ...formData, first_name: e.target.value });
                    }}
                  />
                  {fieldErrors.first_name && (
                    <div className="mt-1 text-xs font-medium text-red-600">
                      {fieldErrors.first_name}
                    </div>
                  )}
                </div>
                <div>
                  <Input
                    ref={lastNameInputRef}
                    placeholder="นามสกุล"
                    className={fieldErrors.last_name ? "border-red-500 focus-visible:ring-red-500" : ""}
                    value={formData.last_name}
                    onChange={(e) => {
                      clearFieldError("last_name");
                      setFormData({ ...formData, last_name: e.target.value });
                    }}
                  />
                  {fieldErrors.last_name && (
                    <div className="mt-1 text-xs font-medium text-red-600">
                      {fieldErrors.last_name}
                    </div>
                  )}
                </div>
                <div>
                  <Input
                    ref={emailInputRef}
                    placeholder="อีเมล"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={fieldErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    value={formData.email}
                    onChange={(e) => {
                      clearFieldError("email");
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                  <div className={`mt-1 text-xs ${fieldErrors.email ? "font-medium text-red-600" : "text-muted-foreground"}`}>
                    {fieldErrors.email || "ต้องเป็นรูปแบบอีเมล เช่น name@example.com"}
                  </div>
                </div>
                <div>
                  <Input
                    ref={phoneInputRef}
                    placeholder="เบอร์โทร"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className={fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                    value={formData.phone}
                    onChange={(e) => {
                      clearFieldError("phone");
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      });
                    }}
                  />
                  <div className={`mt-1 text-xs ${fieldErrors.phone ? "font-medium text-red-600" : "text-muted-foreground"}`}>
                    {fieldErrors.phone || `ต้องเป็นตัวเลข 10 หลัก (${formData.phone.length}/10)`}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Input
                    ref={idCardInputRef}
                    placeholder="เลขบัตรประชาชน"
                    type="text"
                    inputMode="numeric"
                    maxLength={13}
                    pattern="[0-9]{13}"
                    className={fieldErrors.id_card ? "border-red-500 focus-visible:ring-red-500" : ""}
                    value={formData.id_card}
                    onChange={(e) => {
                      clearFieldError("id_card");
                      setFormData({
                        ...formData,
                        id_card: e.target.value.replace(/\D/g, "").slice(0, 13),
                      });
                    }}
                  />
                  <div className={`mt-1 text-xs ${fieldErrors.id_card ? "font-medium text-red-600" : "text-muted-foreground"}`}>
                    {fieldErrors.id_card || `ต้องเป็นตัวเลข 13 หลัก (${formData.id_card.length}/13)`}
                  </div>
                </div>
              </div>
              <div ref={addressSectionRef} className="mt-5 space-y-4">
                <AddressFields
                  title="ที่อยู่ปัจจุบัน"
                  value={currentAddress}
                  onChange={setCurrentAddress}
                />
              </div>
            </div>
          </div>

          {/* ── สรุปการจอง ── */}
          <aside className="h-fit rounded-lg bg-brown-dark p-6 text-brown-dark-foreground shadow-lg lg:sticky lg:top-24">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-extrabold">
              <CreditCard className="h-5 w-5" />
              สรุปการจอง
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-brown-dark-foreground/60">แพ็กเกจ</span>
                <span className="text-right font-bold">
                  {selectedPackage?.package_name || "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brown-dark-foreground/60">รอบวันที่</span>
                <span>
                  {selectedSchedule ? formatDate(selectedSchedule.date) : "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brown-dark-foreground/60">จำนวนคน</span>
                <span>{peopleCount}</span>
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="flex items-end justify-between">
                  <span className="text-brown-dark-foreground/60">
                    รวมทั้งหมด
                  </span>
                  <span className="text-3xl font-extrabold">
                    {totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-right text-xs text-brown-dark-foreground/50">
                  บาท
                </div>
              </div>
            </div>
            <Button
              onClick={submit}
              disabled={
                submitting ||
                !selectedPackage ||
                !selectedSchedule ||
                remainingSeats < 1
              }
              className="mt-6 h-12 w-full bg-primary font-bold text-primary-foreground hover:bg-primary/90"
            >
              {submitting ? "กำลังจอง..." : "ยืนยันการจอง"}
            </Button>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
