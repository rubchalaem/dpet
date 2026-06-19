import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Heart, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { api, getImageUrl } from "@/lib/api";

type Attraction = {
  attraction_id: number;
  attraction_name: string;
  description?: string;
  opening_time?: string;
  district?: string;
  subdistrict?: string;
  location?: string;
  address?: string;
  map_url?: string;
  average_rating?: number;
  review_count?: number;
  favorite_count?: number;
  category?: { name: string };
  images?: { image_url: string; caption?: string }[];
  reviews?: {
    review_id: number;
    rating?: number;
    comment?: string;
    review_date: string;
    user?: { username?: string; name?: string; email?: string };
  }[];
  favorites?: { id: number }[];
  tour_packages?: {
    package_id: number;
    package_name: string;
    price: string | number;
    duration?: string;
    schedules?: { available?: number; capacity: number; booked_seats: number; date: string }[];
  }[];
};

const AttractionDetail = () => {
  const { id } = useParams();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);

  const loadAttraction = async () => {
    const response = await api.get(`/attractions/${id}`);
    setAttraction(response.data);
  };

  useEffect(() => {
    loadAttraction().catch((err) => setMessage(err.response?.data?.message || "โหลดรายละเอียดสถานที่ไม่สำเร็จ"));
    if (localStorage.getItem("token")) {
      api
        .get("/attractions/favorites/me")
        .then((response) =>
          setIsFavorited(response.data.some((item: any) => String(item.attraction?.attraction_id) === String(id))),
        )
        .catch(() => setIsFavorited(false));
    }
  }, [id]);

  const toggleFavorite = async () => {
    if (!attraction) return;
    if (!localStorage.getItem("token")) {
      setMessage("กรุณาเข้าสู่ระบบก่อนบันทึก Favorite");
      return;
    }
    const response = await api.post(`/attractions/${attraction.attraction_id}/favorite`);
    setIsFavorited(response.data.favorited);
    setMessage(response.data.favorited ? "เพิ่มเข้ารายการโปรดแล้ว" : "นำออกจากรายการโปรดแล้ว");
    loadAttraction();
  };

  const submitReview = async () => {
    if (!attraction) return;
    if (!localStorage.getItem("token")) {
      setMessage("กรุณาเข้าสู่ระบบก่อนเขียนรีวิว");
      return;
    }
    await api.post(`/attractions/${attraction.attraction_id}/reviews`, { rating, comment });
    setComment("");
    setRating(5);
    setMessage("บันทึกรีวิวแล้ว");
    loadAttraction();
  };

  if (!attraction) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ArrowLeft className="h-4 w-4" />
            กลับไปหน้าสถานที่
          </Link>
          <div className="mt-6 rounded-lg bg-card p-6 shadow-sm">{message || "กำลังโหลด..."}</div>
        </main>
        <Footer />
      </div>
    );
  }

  const cover = attraction.images?.[0]?.image_url;
  const favoriteCount = attraction.favorite_count ?? attraction.favorites?.length ?? 0;
  const reviewCount = attraction.review_count ?? attraction.reviews?.length ?? 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const packageAvailability =
    attraction.tour_packages?.map((pkg) => ({
      ...pkg,
      available:
        pkg.schedules?.reduce((sum, schedule) => {
          const scheduleDate = new Date(schedule.date);
          scheduleDate.setHours(0, 0, 0, 0);
          if (scheduleDate >= today) {
            return sum + Math.max(0, schedule.available ?? schedule.capacity - schedule.booked_seats);
          }
          return sum;
        }, 0) || 0,
    })) || [];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-brown-dark px-4 py-8 text-brown-dark-foreground">
          <div className="mx-auto max-w-6xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              <ArrowLeft className="h-4 w-4" />
              กลับไปหน้าสถานที่
            </Link>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                    {attraction.category?.name || "สถานที่ท่องเที่ยว"}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{attraction.district || "สระบุรี"}</span>
                </div>
                <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">{attraction.attraction_name}</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-brown-dark-foreground/75">
                  {attraction.description || "สถานที่ท่องเที่ยวจังหวัดสระบุรี"}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/10 p-3 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-xl font-extrabold">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    {(attraction.average_rating || 0).toFixed(1)}
                  </div>
                  <div className="text-xs text-brown-dark-foreground/70">คะแนนเฉลี่ย</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold">{reviewCount}</div>
                  <div className="text-xs text-brown-dark-foreground/70">รีวิว</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold">{favoriteCount}</div>
                  <div className="text-xs text-brown-dark-foreground/70">Favorite</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg bg-card shadow-sm">
              <img src={getImageUrl(cover)} alt={attraction.attraction_name} className="h-[420px] w-full object-cover" />
            </div>
            {attraction.images && attraction.images.length > 1 && (
              <div className="grid gap-3 sm:grid-cols-3">
                {attraction.images.slice(1, 4).map((image) => (
                  <img
                    key={image.image_url}
                    src={getImageUrl(image.image_url)}
                    alt={image.caption || attraction.attraction_name}
                    className="h-36 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            <section className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="text-xl font-extrabold">รีวิวจากผู้เดินทาง</h2>
              <div className="mt-4 grid gap-3">
                {attraction.reviews && attraction.reviews.length > 0 ? (
                  attraction.reviews.map((review) => (
                    <div key={review.review_id} className="rounded-lg border border-border p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold">
                          {review.user?.name || review.user?.username || review.user?.email || "ผู้ใช้งาน"}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-bold text-primary">
                          <Star className="h-4 w-4 fill-primary" />
                          {review.rating || 0}
                        </div>
                      </div>
                      {review.comment && <p className="mt-2 text-sm leading-6 text-muted-foreground">{review.comment}</p>}
                      <div className="mt-2 text-xs text-muted-foreground">
                        {new Date(review.review_date).toLocaleDateString("th-TH")}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">ยังไม่มีรีวิวสำหรับสถานที่นี้</div>
                )}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="text-xl font-extrabold">ข้อมูลสถานที่</h2>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{attraction.address || attraction.location || `${attraction.subdistrict || ""} ${attraction.district || ""}`}</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">เวลาเปิด-ปิด</div>
                  <div className="font-bold">{attraction.opening_time || "ตรวจสอบก่อนเดินทาง"}</div>
                </div>
              </div>
              <div className="mt-5 grid gap-2">
                <Button onClick={toggleFavorite} variant="outline" className={`gap-2 ${isFavorited ? "text-red-500" : ""}`}>
                  <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500" : ""}`} />
                  Favorite
                </Button>
                {attraction.map_url && (
                  <a
                    href={attraction.map_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    เปิดแผนที่
                  </a>
                )}
              </div>
              {message && <div className="mt-4 rounded-lg bg-muted p-3 text-sm font-medium">{message}</div>}
            </section>

            <section className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="text-xl font-extrabold">แพ็กเกจที่จองได้</h2>
              <div className="mt-4 grid gap-3">
                {packageAvailability.length > 0 ? (
                  packageAvailability.map((pkg) => (
                    <div key={pkg.package_id} className="rounded-lg border border-border p-4">
                      <div className="font-bold">{pkg.package_name}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {Number(pkg.price).toLocaleString()} บาท {pkg.duration ? `· ${pkg.duration}` : ""}
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        {pkg.available > 0 ? (
                          <>
                            <span className="text-sm font-bold text-foreground">เหลือ {pkg.available} ที่</span>
                            <Link
                              to={`/booking?packageId=${pkg.package_id}`}
                              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                              <CalendarDays className="h-4 w-4" />
                              จอง
                            </Link>
                          </>
                        ) : (
                          <>
                            <span className="text-sm font-bold text-red-500">❌ ไม่มีรอบในขณะนี้</span>
                            <Button
                              disabled
                              className="gap-2 bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed"
                            >
                              <CalendarDays className="h-4 w-4" />
                              จอง
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">ยังไม่มีแพ็กเกจสำหรับสถานที่นี้</div>
                )}
              </div>
            </section>

            <section className="rounded-lg bg-card p-5 shadow-sm">
              <h2 className="text-xl font-extrabold">เขียนรีวิว</h2>
              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button key={value} type="button" onClick={() => setRating(value)} className="rounded p-1 hover:bg-muted">
                    <Star className={`h-6 w-6 ${value <= rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
              <Textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="เล่าประสบการณ์ของคุณ"
                className="mt-3"
              />
              <Button onClick={submitReview} className="mt-3 w-full">
                ส่งรีวิว
              </Button>
            </section>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AttractionDetail;
