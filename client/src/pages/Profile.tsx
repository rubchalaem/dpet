import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddressFields, {
  AddressData,
  emptyAddress,
} from "@/components/AddressFields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api, getImageUrl } from "@/lib/api";

type Booking = {
  booking_id: number;
  booking_status: string;
  total_price: string;
  people_count: number;
  current_province?: string;
  current_district?: string;
  current_subdistrict?: string;
  current_zipcode?: string;
  schedule?: { date: string };
  package?: { package_name: string; attraction?: { attraction_name: string } };
  payments?: { payment_status: string }[];
};

type Favorite = {
  id: number;
  attraction: {
    attraction_id: number;
    attraction_name: string;
    district?: string;
    images?: { image_url: string }[];
  };
};

type UserProfile = {
  user_id: number;
  username?: string;
  email?: string;
  name?: string;
  lastname?: string;
  phone?: string;
  id_card?: string;
  image_profile?: string;
  current_province?: string;
  current_district?: string;
  current_subdistrict?: string;
  current_zipcode?: string;
  current_address_detail?: string;
};

type ProfileFieldErrors = Partial<Record<"phone" | "id_card", string>>;

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileForm, setProfileForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    id_card: "",
  });
  const [currentAddress, setCurrentAddress] =
    useState<AddressData>(emptyAddress);
  const [savingProfile, setSavingProfile] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ProfileFieldErrors>({});
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const idCardInputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const [profileResponse, bookingResponse, favoriteResponse] =
      await Promise.all([
        api.get("/auth/me"),
        api.get("/bookings/me"),
        api.get("/attractions/favorites/me"),
      ]);
    setProfile(profileResponse.data);
    setProfileForm({
      name: profileResponse.data?.name || "",
      lastname: profileResponse.data?.lastname || "",
      phone: profileResponse.data?.phone || "",
      id_card: profileResponse.data?.id_card || "",
    });
    setCurrentAddress({
      province: profileResponse.data?.current_province || "",
      district: profileResponse.data?.current_district || "",
      subdistrict: profileResponse.data?.current_subdistrict || "",
      zipcode: profileResponse.data?.current_zipcode || "",
      detail: profileResponse.data?.current_address_detail || "",
    });
    setBookings(bookingResponse.data);
    setFavorites(favoriteResponse.data);
  };

  const clearFieldError = (field: keyof ProfileFieldErrors) => {
    if (!fieldErrors[field]) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const focusField = (field: keyof ProfileFieldErrors) => {
    const input =
      field === "phone" ? phoneInputRef.current : idCardInputRef.current;

    if (!input) return;
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => input.focus({ preventScroll: true }), 250);
  };

  const saveProfile = async () => {
    setMessage("");
    setFieldErrors({});

    const nextFieldErrors: ProfileFieldErrors = {};
    if (!profileForm.phone) {
      nextFieldErrors.phone = "กรุณากรอกเบอร์โทร";
    } else if (!/^\d{10}$/.test(profileForm.phone)) {
      nextFieldErrors.phone = "เบอร์โทรต้องเป็นตัวเลข 10 หลัก";
    }

    if (!profileForm.id_card) {
      nextFieldErrors.id_card = "กรุณากรอกเลขบัตรประชาชน";
    } else if (!/^\d{13}$/.test(profileForm.id_card)) {
      nextFieldErrors.id_card = "เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก";
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      focusField(Object.keys(nextFieldErrors)[0] as keyof ProfileFieldErrors);
      setMessage("กรุณาตรวจสอบข้อมูลโปรไฟล์ที่แจ้งเตือนใต้ช่องกรอก");
      return;
    }

    setSavingProfile(true);

    try {
      const response = await api.patch("/auth/me", {
        name: profileForm.name,
        lastname: profileForm.lastname,
        phone: profileForm.phone,
        id_card: profileForm.id_card,
        current_province: currentAddress.province,
        current_district: currentAddress.district,
        current_subdistrict: currentAddress.subdistrict,
        current_zipcode: currentAddress.zipcode,
        current_address_detail: currentAddress.detail,
      });
      setProfile(response.data);
      window.dispatchEvent(new Event("profile-updated"));
      setMessage("บันทึกโปรไฟล์สำเร็จ");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "บันทึกโปรไฟล์ไม่สำเร็จ");
    } finally {
      setSavingProfile(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    load().finally(() => setLoading(false));
  }, [navigate]);

  const cancelBooking = async (bookingId: number) => {
    setMessage("");
    try {
      await api.patch(`/bookings/${bookingId}/cancel`);
      await load();
      setMessage("ยกเลิกการจองสำเร็จ");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "ยกเลิกไม่สำเร็จ");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-custom-green">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-extrabold">โปรไฟล์และประวัติการจอง</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          ดู booking, payment, favorite และข้อมูลที่อยู่ที่ใช้จอง
        </p>
        {message && (
          <div className="mt-5 rounded-lg bg-muted p-3 text-sm font-medium">
            {message}
          </div>
        )}

        <section className="mt-8 rounded-lg bg-card p-5 shadow-sm">
          <h2 className="text-xl font-bold">ข้อมูลโปรไฟล์</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Input
              placeholder="ชื่อ"
              value={profileForm.name}
              onChange={(event) =>
                setProfileForm((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
            />
            <Input
              placeholder="นามสกุล"
              value={profileForm.lastname}
              onChange={(event) =>
                setProfileForm((prev) => ({
                  ...prev,
                  lastname: event.target.value,
                }))
              }
            />
            <Input
              ref={phoneInputRef}
              placeholder="เบอร์โทร"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]{10}"
              aria-label="เบอร์โทร 10 หลัก"
              value={profileForm.phone}
              onChange={(event) => {
                clearFieldError("phone");
                setProfileForm((prev) => ({
                  ...prev,
                  phone: event.target.value.replace(/\D/g, "").slice(0, 10),
                }));
              }}
              className={`md:col-span-2 ${
                fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            <div
              className={`-mt-2 text-xs md:col-span-2 ${
                fieldErrors.phone ? "font-medium text-red-600" : "text-muted-foreground"
              }`}
            >
              {fieldErrors.phone ||
                `กรอกตัวเลขให้ครบ 10 หลัก (${profileForm.phone.length}/10)`}
            </div>
            <Input
              ref={idCardInputRef}
              placeholder="เลขบัตรประชาชน"
              type="text"
              inputMode="numeric"
              maxLength={13}
              pattern="[0-9]{13}"
              aria-label="เลขบัตรประชาชน 13 หลัก"
              value={profileForm.id_card}
              onChange={(event) => {
                clearFieldError("id_card");
                setProfileForm((prev) => ({
                  ...prev,
                  id_card: event.target.value.replace(/\D/g, "").slice(0, 13),
                }));
              }}
              className={`md:col-span-2 ${
                fieldErrors.id_card ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />
            <div
              className={`-mt-2 text-xs md:col-span-2 ${
                fieldErrors.id_card ? "font-medium text-red-600" : "text-muted-foreground"
              }`}
            >
              {fieldErrors.id_card ||
                `กรอกตัวเลขให้ครบ 13 หลัก (${profileForm.id_card.length}/13)`}
            </div>
          </div>

          <div className="mt-5">
            <AddressFields
              title="ที่อยู่ปัจจุบัน"
              value={currentAddress}
              onChange={setCurrentAddress}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button onClick={saveProfile} disabled={savingProfile}>
              {savingProfile ? "กำลังบันทึก..." : "บันทึกโปรไฟล์"}
            </Button>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <div>บัญชี: {profile?.username || "-"}</div>
            <div>อีเมล: {profile?.email || "-"}</div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <h2 className="text-xl font-bold">ประวัติการจอง</h2>
          </div>
          {loading ? (
            <div className="p-6">กำลังโหลด...</div>
          ) : bookings.length === 0 ? (
            <div className="p-6">
              ยังไม่มีประวัติการจอง{" "}
              <Link
                to="/booking"
                className="font-bold text-primary hover:underline"
              >
                เริ่มจองเลย
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {bookings.map((booking) => {
                const paymentStatus =
                  booking.payments?.[0]?.payment_status || "ยังไม่ชำระ";
                const address = [
                  booking.current_subdistrict,
                  booking.current_district,
                  booking.current_province,
                  booking.current_zipcode,
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <div
                    key={booking.booking_id}
                    className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <div className="text-lg font-bold">
                        {booking.package?.package_name}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {booking.package?.attraction?.attraction_name} ·{" "}
                        {booking.people_count} คน ·{" "}
                        {booking.schedule
                          ? new Date(booking.schedule.date).toLocaleDateString(
                              "th-TH",
                            )
                          : "-"}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        ที่อยู่: {address || "-"}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                          Booking: {booking.booking_status}
                        </span>
                        <span className="rounded-full bg-green-accent/10 px-3 py-1 text-green-accent">
                          Payment: {paymentStatus}
                        </span>
                        <span className="rounded-full bg-muted px-3 py-1">
                          {Number(booking.total_price).toLocaleString()} บาท
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {paymentStatus !== "VERIFIED" &&
                        booking.booking_status !== "CANCELLED" && (
                          <Button
                            variant="outline"
                            onClick={() =>
                              navigate(`/payment/${booking.booking_id}`)
                            }
                          >
                            ชำระเงิน
                          </Button>
                        )}
                      {booking.booking_status === "PENDING" && (
                        <Button
                          variant="destructive"
                          onClick={() => cancelBooking(booking.booking_id)}
                        >
                          ยกเลิก
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="mt-8 rounded-lg bg-card p-5 shadow-sm">
          <h2 className="text-xl font-bold">Favorite สถานที่ที่บันทึกไว้</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {favorites.length === 0 ? (
              <div className="text-sm text-muted-foreground md:col-span-3">
                ยังไม่มี Favorite
              </div>
            ) : (
              favorites.map((favorite) => (
                <Link
                  key={favorite.id}
                  to={`/attractions/${favorite.attraction.attraction_id}`}
                  className="overflow-hidden rounded-lg border border-border transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-[4/3] bg-muted">
                    <img
                      src={getImageUrl(
                        favorite.attraction.images?.[0]?.image_url,
                      )}
                      alt={favorite.attraction.attraction_name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-bold">
                      {favorite.attraction.attraction_name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {favorite.attraction.district || "สระบุรี"}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
