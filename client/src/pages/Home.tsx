import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CalendarCheck, Heart, MapPin, Search, ShieldCheck, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { api, getImageUrl } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Attraction = {
  attraction_id: number;
  attraction_name: string;
  description?: string;
  district?: string;
  average_rating?: number;
  review_count?: number;
  favorite_count?: number;
  images?: { image_url: string }[];
  favorites?: { id: number }[];
  reviews?: { review_id: number }[];
};
type TravelPackage = {
  package_id: number;
  package_name: string;
  description?: string;
  price: number;
  booking_count?: number;
  attraction?: {
    attraction_name?: string;
    location?: string;
    images?: { image_url: string }[];
  };
  schedules?: { id: number; date: string; available?: number; capacity: number; booked_seats: number }[];
};

const bannerImages = ["/p0.jpg", "/p1.jpg", "/p2.jpg", "/p3.jpg"];

const Home = () => {
  const navigate = useNavigate();
  const [noScheduleModalOpen, setNoScheduleModalOpen] = useState(false);
  const [selectedNoSchedulePackage, setSelectedNoSchedulePackage] = useState<TravelPackage | null>(null);

  const handlePopularPackageClick = (e: React.MouseEvent, pkg: TravelPackage, availableSeatsCount: number) => {
    e.preventDefault();
    if (availableSeatsCount > 0) {
      navigate(`/booking?packageId=${pkg.package_id}`);
    } else {
      setSelectedNoSchedulePackage(pkg);
      setNoScheduleModalOpen(true);
    }
  };

  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [search, setSearch] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);
  const [lastHomeRefresh, setLastHomeRefresh] = useState(0);

  const loadHomeData = useCallback(async () => {
    const [packageResponse, attractionResponse] = await Promise.all([
      api.get(`/packages?_=${Date.now()}`),
      api.get(`/attractions?_=${Date.now()}`),
    ]);
    setPackages(
      [...packageResponse.data]
        .sort((a, b) => (b.booking_count || 0) - (a.booking_count || 0) || a.package_id - b.package_id)
        .slice(0, 3),
    );
    setAttractions(attractionResponse.data);
    setLastHomeRefresh(Date.now());
  }, []);

  useEffect(() => {
    loadHomeData().catch(() => {
      setPackages([]);
      setAttractions([]);
    });

    const intervalId = window.setInterval(() => {
      loadHomeData().catch(() => undefined);
    }, 5000);

    const refreshWhenVisible = () => {
      if (!document.hidden) loadHomeData().catch(() => undefined);
    };

    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [loadHomeData]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setBannerIndex((current) => (current + 1) % bannerImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const featuredAttractions = useMemo(
    () =>
      [...attractions]
        .sort((a, b) => {
          const bScore = (b.average_rating || 0) * 10 + (b.favorite_count ?? b.favorites?.length ?? 0) + (b.review_count ?? b.reviews?.length ?? 0);
          const aScore = (a.average_rating || 0) * 10 + (a.favorite_count ?? a.favorites?.length ?? 0) + (a.review_count ?? a.reviews?.length ?? 0);
          return bScore - aScore;
        })
        .slice(0, 3),
    [attractions],
  );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-brown-dark px-4 py-14 text-brown-dark-foreground md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Saraburi Travel Guides</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">จองทริปสระบุรีแบบครบในที่เดียว</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-brown-dark-foreground/75 md:text-base">
                ค้นหาสถานที่ อ่านรีวิวจริง เก็บ favorite ดูรอบเดินทางที่ยังว่าง และติดตามสถานะ booking/payment ได้ทันที
              </p>
              <div className="mt-8 rounded-lg bg-white p-2 text-foreground shadow-xl">
                <div className="flex items-center gap-2 px-2">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="ค้นหาสถานที่หรือแพ็กเกจ"
                    className="h-11 flex-1 bg-transparent text-sm outline-none"
                  />
                  <Link
                    to={`/services${search ? `?search=${encodeURIComponent(search)}` : ""}`}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
                  >
                    ค้นหา
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/booking" className="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90">
                  เริ่มจองทริป
                </Link>
                <Link to="/services" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-brown-dark-foreground hover:bg-white/10">
                  ดูสถานที่
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {bannerImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Saraburi"
                  className={`h-[360px] w-full object-cover transition-opacity duration-700 ${
                    index === bannerIndex
                      ? "relative opacity-100"
                      : "absolute inset-0 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {bannerImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setBannerIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === bannerIndex ? "bg-white" : "bg-white/45"
                    }`}
                    aria-label={`Banner ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-custom-green py-8">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3">
            {[
              { icon: MapPin, title: "รายละเอียดสถานที่", text: "รูปภาพ เวลาเปิดปิด แผนที่ รีวิว และจำนวน Favorite อยู่ในหน้ารายละเอียดเดียว" },
              { icon: CalendarCheck, title: "จองจากรอบว่างจริง", text: "แพ็กเกจผูกกับ schedule เพื่อดูจำนวนที่นั่งคงเหลือก่อนจอง" },
              { icon: ShieldCheck, title: "Admin ตรวจชำระ", text: "Booking และ Payment อยู่ด้วยกัน ทำให้ตรวจสลิปและยืนยันสถานะได้เร็วขึ้น" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-card p-5 shadow-sm">
                <item.icon className="h-6 w-6 text-primary" />
                <h2 className="mt-4 font-extrabold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-section px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-section-foreground/60">Recommended</p>
                <h2 className="text-2xl font-extrabold text-amber-section-foreground">สถานที่แนะนำ</h2>
                <p className="mt-1 text-sm text-amber-section-foreground/70">เรียงจากคะแนนรีวิว + จำนวน Favorite + จำนวนรีวิว</p>
              </div>
              <Link to="/services" className="flex items-center gap-2 text-sm font-bold text-amber-section-foreground hover:underline">
                ดูทั้งหมด <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredAttractions.map((item) => {
                const favoriteCount = item.favorite_count ?? item.favorites?.length ?? 0;
                const reviewCount = item.review_count ?? item.reviews?.length ?? 0;
                return (
                  <Link
                    key={item.attraction_id}
                    to={`/attractions/${item.attraction_id}`}
                    className="overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] bg-muted">
                      <img src={getImageUrl(item.images?.[0]?.image_url)} alt={item.attraction_name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold">{item.attraction_name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description || item.district}</p>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                        <span className="rounded bg-muted p-2 font-bold">
                          <Star className="mx-auto mb-1 h-4 w-4 fill-primary text-primary" />
                          {(item.average_rating || 0).toFixed(1)}
                        </span>
                        <span className="flex items-center justify-center rounded bg-muted p-2 text-center font-bold">
                          {reviewCount} รีวิว
                        </span>
                        <span className="rounded bg-muted p-2 font-bold">
                          <Heart className="mx-auto mb-1 h-4 w-4 text-primary" />
                          {favoriteCount}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-custom-green px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Popular Packages</p>
                <h2 className="text-2xl font-extrabold">แพ็กเกจยอดนิยม</h2>
                <p className="mt-1 text-sm text-muted-foreground">เรียงจากจำนวน booking มากสุดในระบบ</p>
              </div>
              <Link to="/booking" className="flex items-center gap-2 text-sm font-bold text-white hover:underline">
                ไปจอง <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {packages.length === 0 ? (
                <div className="rounded-lg bg-card p-6 shadow-sm md:col-span-3">ยังไม่มีแพ็กเกจในระบบ ให้ admin เพิ่มแพ็กเกจและรอบเดินทางก่อน demo</div>
              ) : (
                packages.map((item) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);

                  const available =
                    item.schedules?.reduce((sum, schedule) => {
                      const scheduleDate = new Date(schedule.date);
                      scheduleDate.setHours(0, 0, 0, 0);
                      if (scheduleDate >= today) {
                        return sum + Math.max(0, schedule.available ?? schedule.capacity - schedule.booked_seats);
                      }
                      return sum;
                    }, 0) ?? 0;
                  return (
                    <Link
                      to="#"
                      onClick={(e) => handlePopularPackageClick(e, item, available)}
                      key={`${item.package_id}-${item.package_name}-${item.attraction?.attraction_name}-${item.booking_count}-${lastHomeRefresh}`}
                      className="overflow-hidden rounded-lg bg-card shadow-md transition-transform hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-muted">
                        <img
                          src={`${getImageUrl(item.attraction?.images?.[0]?.image_url)}?v=${lastHomeRefresh}`}
                          alt={item.attraction?.attraction_name || item.package_name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-extrabold">{item.package_name}</h3>
                        <p className="mt-1 text-sm font-bold text-primary">{item.attraction?.attraction_name || "ไม่ระบุสถานที่"}</p>
                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                          {item.description || item.attraction?.location}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="font-bold">{Number(item.price).toLocaleString()} บาท</span>
                          <span className="text-muted-foreground">เหลือ {available} ที่</span>
                        </div>
                        <div className="mt-3 rounded bg-muted px-3 py-2 text-sm font-bold">
                          {item.booking_count || 0} booking
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* ── Modal แจ้งเตือนไม่มีรอบบริการ ── */}
      <Dialog open={noScheduleModalOpen} onOpenChange={setNoScheduleModalOpen}>
        <DialogContent className="max-w-md rounded-lg bg-card p-6 shadow-xl border border-border">
          <DialogHeader className="text-center">
            <DialogTitle className="text-xl font-extrabold text-foreground flex items-center justify-center gap-2">
              ⚠️ ขออภัยในความไม่สะดวก
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-2">
              ขณะนี้แพ็กเกจ <span className="font-bold text-foreground">"{selectedNoSchedulePackage?.package_name}"</span> ยังไม่มีรอบการเดินทางเปิดให้บริการในระบบ
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground leading-6">
              ทางเราต้องขออภัยอย่างสูงด้วยนะคะ ท่านสามารถเลือกชมและจองทริปแพ็กเกจแนะนำอื่นๆ หรือติดต่อเราได้ทางหน้าบริการแนะนำสถานที่ค่ะ
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setNoScheduleModalOpen(false)}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              ตกลง
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
