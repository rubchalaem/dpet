import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Building2, CheckCircle2, Clock, QrCode, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { api, FILE_BASE_URL, getImageUrl } from "@/lib/api";

type Booking = {
  booking_id: number;
  total_price: string;
  booking_status: string;
  package?: { package_name: string };
  payments?: { payment_status: string; payment_method?: string; slip_url?: string }[];
};

const Payment = () => {
  const { bookingId } = useParams();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [method, setMethod] = useState<"PROMPTPAY" | "BANK_TRANSFER">("PROMPTPAY");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const booking = bookings.find((item) => String(item.booking_id) === bookingId);
  const payment = booking?.payments?.[0];

  const loadBookings = async () => {
    const response = await api.get("/bookings/me");
    setBookings(response.data);
  };

  useEffect(() => {
    loadBookings().finally(() => setLoading(false));
  }, []);

  const uploadSlip = async () => {
    if (!file || !bookingId) return;
    setUploading(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("booking_id", bookingId);
      formData.append("payment_method", method);
      formData.append("slip", file);
      await api.post("/payments/upload-slip", formData);
      await loadBookings();
      setMessage("อัปโหลดสลิปสำเร็จ รอแอดมินตรวจสอบ");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "อัปโหลดไม่สำเร็จ");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-extrabold">ชำระเงิน</h1>
        <p className="mt-2 text-sm text-muted-foreground">เลือก PromptPay หรือโอนธนาคาร แล้วอัปโหลดสลิปเพื่อให้แอดมินตรวจสอบ</p>

        {loading ? (
          <div className="mt-8 rounded-lg bg-card p-8">กำลังโหลดข้อมูล...</div>
        ) : !booking ? (
          <div className="mt-8 rounded-lg bg-card p-8">ไม่พบรายการจองนี้</div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
            <section className="rounded-lg bg-card p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setMethod("PROMPTPAY")} className={`rounded-lg border p-4 text-left ${method === "PROMPTPAY" ? "border-primary bg-primary/10" : "border-border"}`}>
                  <QrCode className="mb-2 h-5 w-5" />
                  <div className="font-bold">สแกน QR</div>
                  <div className="text-xs text-muted-foreground">สแกนเพื่อชำระเงิน</div>
                </button>
                <button onClick={() => setMethod("BANK_TRANSFER")} className={`rounded-lg border p-4 text-left ${method === "BANK_TRANSFER" ? "border-primary bg-primary/10" : "border-border"}`}>
                  <Building2 className="mb-2 h-5 w-5" />
                  <div className="font-bold">โอนธนาคาร</div>
                  <div className="text-xs text-muted-foreground">ธนาคารกสิกรไทย</div>
                </button>
              </div>

              {method === "PROMPTPAY" ? (
                <div className="mt-5">
                  <div className="mx-auto w-full max-w-72 overflow-hidden rounded-lg border-8 border-white bg-white shadow">
                    <img
                      src="/qr.jpg"
                      alt="QR code สำหรับชำระเงิน"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center text-sm font-bold">
                    ธนาคารกสิกรไทย · 158-3-11934-1
                  </div>
                  <div className="mt-1 text-center text-sm text-muted-foreground">
                    นาย อนรรฆวี รูปแฉล้ม
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-lg bg-muted p-4 text-sm">
                  <div className="font-bold">ธนาคารกสิกรไทย</div>
                  <div>เลขบัญชี: 158-3-11934-1</div>
                  <div>ชื่อบัญชี: นาย อนรรฆวี รูปแฉล้ม</div>
                </div>
              )}

              <div className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">ยอดชำระ</span><span className="font-bold">{Number(booking.total_price).toLocaleString()} บาท</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">สถานะ</span><span className="font-bold">{payment?.payment_status || "ยังไม่อัปโหลด"}</span></div>
              </div>
            </section>

            <section className="rounded-lg bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold">{booking.package?.package_name}</h2>
              <div className="mt-4 rounded-lg bg-muted p-4 text-sm">Booking #{booking.booking_id} · {booking.booking_status}</div>

              {payment?.payment_status === "VERIFIED" ? (
                <div className="mt-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
                  <CheckCircle2 className="h-5 w-5" /> ชำระเงินสำเร็จแล้ว การจองได้รับการยืนยัน
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">อัปโหลดสลิป</span>
                    <input type="file" accept="image/png,image/jpeg" onChange={(event) => setFile(event.target.files?.[0] || null)} className="block w-full rounded-lg border border-border bg-background p-3 text-sm" />
                  </label>
                  <Button onClick={uploadSlip} disabled={!file || uploading} className="gap-2"><Upload className="h-4 w-4" />{uploading ? "กำลังอัปโหลด..." : "อัปโหลดสลิป"}</Button>
                </div>
              )}

              {payment?.slip_url && (
                <div className="mt-6">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold"><Clock className="h-4 w-4" />สลิปที่อัปโหลด</div>
                  <img src={getImageUrl(payment.slip_url)} alt="Payment slip" className="max-h-80 rounded-lg border object-contain" />
                </div>
              )}

              {message && <div className="mt-4 rounded-lg bg-muted p-3 text-sm font-medium">{message}</div>}
              <Link to="/profile" className="mt-6 inline-block text-sm font-bold text-primary hover:underline">ดูประวัติการจอง</Link>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
