import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Heart,
  MapPin,
  RotateCcw,
  Search,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchableSelect from "@/components/SearchableSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api, getImageUrl } from "@/lib/api";
import { thaiAddress } from "@/lib/thai-address";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Category = { category_id: number; name: string };
type Attraction = {
  attraction_id: number;
  attraction_name: string;
  description?: string;
  opening_time?: string;
  district?: string;
  subdistrict?: string;
  location?: string;
  map_url?: string;
  is_popular?: boolean;
  average_rating?: number;
  review_count?: number;
  favorite_count?: number;
  category?: Category;
  images?: { image_url: string }[];
  reviews?: { review_id: number }[];
  favorites?: { id: number }[];
  tour_packages?: {
    package_id: number;
    package_name: string;
    price: number | string;
    duration?: string;
    schedules?: {
      id: number;
      date: string;
      available?: number;
      capacity: number;
      booked_seats: number;
    }[];
  }[];
};

const Services = () => {
  const navigate = useNavigate();
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBookingModal = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    setIsModalOpen(true);
  };

  const isPackageAvailable = (pkg: Attraction["tour_packages"][0]) => {
    if (!pkg.schedules || pkg.schedules.length === 0) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return pkg.schedules.some((schedule) => {
      const scheduleDate = new Date(schedule.date);
      scheduleDate.setHours(0, 0, 0, 0);

      const isAvailable = (schedule.available ?? (schedule.capacity - schedule.booked_seats)) > 0;
      const isUpcoming = scheduleDate >= today;

      return isAvailable && isUpcoming;
    });
  };

  const [categories, setCategories] = useState<Category[]>([]);
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState("all");
  const [district, setDistrict] = useState("all");
  const [subdistrict, setSubdistrict] = useState("all");
  const [onlyTours, setOnlyTours] = useState(false);
  const [message, setMessage] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const loadAttractions = async () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category !== "all") params.set("category_id", category);
    if (district !== "all") params.set("district", district);
    if (subdistrict !== "all") params.set("subdistrict", subdistrict);
    if (onlyTours) params.set("has_tours", "true");
    const response = await api.get(`/attractions?${params.toString()}`);
    setAttractions(response.data);
  };

  useEffect(() => {
    api.get("/categories").then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    api
      .get("/attractions/favorites/me")
      .then((response) => setFavoriteIds(response.data.map((item: any) => item.attraction?.attraction_id).filter(Boolean)))
      .catch(() => setFavoriteIds([]));
  }, []);

  useEffect(() => {
    loadAttractions().catch((err) =>
      setMessage(err.response?.data?.message || "โหลดสถานที่ไม่สำเร็จ"),
    );
  }, [search, category, district, subdistrict, onlyTours]);

  const saraburi = useMemo(() => thaiAddress.find((item) => item.name === "สระบุรี"), []);
  const districts = useMemo(() => saraburi?.districts.map((item) => item.name) || [], [saraburi]);
  const subdistricts = useMemo(
    () => saraburi?.districts.find((item) => item.name === district)?.subdistricts.map((item) => item.name) || [],
    [saraburi, district],
  );

  const toggleFavorite = async (id: number) => {
    if (!localStorage.getItem("token")) {
      setMessage("กรุณาเข้าสู่ระบบก่อนบันทึก Favorite");
      return;
    }
    const response = await api.post(`/attractions/${id}/favorite`);
    setFavoriteIds((current) =>
      response.data.favorited ? Array.from(new Set([...current, id])) : current.filter((item) => item !== id),
    );
    setMessage(
      response.data.favorited
        ? "เพิ่มเข้ารายการโปรดแล้ว"
        : "นำออกจากรายการโปรดแล้ว",
    );
    loadAttractions();
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setDistrict("all");
    setSubdistrict("all");
    setOnlyTours(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-custom-green">
      <Navbar />
      <main className="flex-1">
        <section className="bg-brown-dark px-4 py-12 text-brown-dark-foreground">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold md:text-4xl">ค้นหาสถานที่ท่องเที่ยวสระบุรี
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-brown-dark-foreground/70">เลือกดูตามประเภท อำเภอ ตำบล คะแนนรีวิว
              และสถานที่ที่มีแพ็กเกจพร้อมจอง
            </p>

            <div className="mt-6 rounded-lg bg-white p-3 text-foreground shadow-xl opacity-90">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="ค้นหา เช่น วัด น้ำตก ตลาด คาเฟ่"
                  className="border-0 focus-visible:ring-0"
                />
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto_auto]">
                <SearchableSelect
                  value={category}
                  onChange={setCategory}
                  placeholder="ประเภท"
                  searchPlaceholder="พิมพ์ค้นหาประเภท"
                  options={[
                    { value: "all", label: "ทุกประเภท" },
                    ...categories.map((item) => ({
                      value: String(item.category_id),
                      label: item.name,
                    })),
                  ]}
                />
                <SearchableSelect
                  value={district}
                  onChange={(value) => {
                    setDistrict(value);
                    setSubdistrict("all");
                  }}
                  placeholder="อำเภอ"
                  searchPlaceholder="พิมพ์ค้นหาอำเภอ"
                  options={[
                    { value: "all", label: "ทุกอำเภอ" },
                    ...districts.map((item) => ({ value: item, label: item })),
                  ]}
                />
                <SearchableSelect
                  value={subdistrict}
                  onChange={setSubdistrict}
                  placeholder="ตำบล"
                  searchPlaceholder="พิมพ์ค้นหาตำบล"
                  options={[
                    { value: "all", label: "ทุกตำบล" },
                    ...subdistricts.map((item) => ({
                      value: item,
                      label: item,
                    })),
                  ]}
                />
                <label className="flex h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={onlyTours}
                    onChange={(event) => setOnlyTours(event.target.checked)}
                  />
                  มีแพ็กเกจ
                </label>
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" />ล้าง
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold">สถานที่ทั้งหมด</h2>
              <p className="text-sm text-muted-foreground">
                พบ {attractions.length} สถานที่ จากเงื่อนไขที่เลือก
              </p>
            </div>
            {message && (
              <div className="rounded-lg bg-muted px-4 py-2 text-sm font-medium">
                {message}
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const available =
                item.tour_packages?.reduce((sum, pkg) => {
                  return (
                    sum +
                    (pkg.schedules?.reduce((s, schedule) => {
                      const scheduleDate = new Date(schedule.date);
                      scheduleDate.setHours(0, 0, 0, 0);

                      if (scheduleDate >= today) {
                        return (
                          s +
                          Math.max(
                            0,
                            schedule.available ??
                              schedule.capacity - schedule.booked_seats,
                          )
                        );
                      }
                      return s;
                    }, 0) || 0)
                  );
                }, 0) || 0;

              const favoriteCount =
                item.favorite_count ?? item.favorites?.length ?? 0;
              const reviewCount =
                item.review_count ?? item.reviews?.length ?? 0;
              const isFavorited = favoriteIds.includes(item.attraction_id);
              const canBook = available > 0;

              return (
                <article
                  key={item.attraction_id}
                  className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <Link
                    to={`/attractions/${item.attraction_id}`}
                    className="block"
                  >
                    <div className="aspect-[4/3] bg-muted">
                      <img
                        src={getImageUrl(item.images?.[0]?.image_url)}
                        alt={item.attraction_name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="space-y-3 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        to={`/attractions/${item.attraction_id}`}
                        className="min-w-0"
                      >
                        <h3 className="text-lg font-extrabold hover:text-primary">
                          {item.attraction_name}
                        </h3>
                      </Link>
                      <button
                        onClick={() => toggleFavorite(item.attraction_id)}
                        className={`rounded-full p-2 hover:bg-muted ${isFavorited ? "text-red-500" : "text-muted-foreground"}`}
                        aria-label="favorite"
                      >
                        <Heart className={`h-5 w-5 ${isFavorited ? "fill-red-500" : ""}`} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                        {item.category?.name || "สถานที่"}
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1">
                        {item.district || "สระบุรี"}
                      </span>
                    </div>
                    <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {item.description || "สถานที่ท่องเที่ยวจังหวัดสระบุรี"}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {item.subdistrict || item.location || "สระบุรี"}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-xs text-muted-foreground">คะแนน
                        </div>
                        <div className="flex items-center gap-1 font-bold">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          {(item.average_rating || 0).toFixed(1)}
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-xs text-muted-foreground">รีวิว
                        </div>
                        <div className="font-bold">{reviewCount}</div>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <div className="text-xs text-muted-foreground">
                          Favorite
                        </div>
                        <div className="font-bold">{favoriteCount}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/attractions/${item.attraction_id}`}
                        className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm font-bold hover:bg-muted"
                      >ดูรายละเอียด
                      </Link>
                      {canBook ? (
                        <button
                          type="button"
                          onClick={() => handleOpenBookingModal(item)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          <CalendarDays className="h-4 w-4" />
                          จอง ({available})
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-bold text-muted-foreground"
                        >
                          <CalendarDays className="h-4 w-4" />ไม่มีรอบ
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />

      {/* ── Modal เลือกแพ็กเกจ ── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md rounded-lg bg-card p-6 shadow-xl border border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-foreground">
              เลือกแพ็กเกจสำหรับจอง
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedAttraction?.attraction_name}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 max-h-[380px] overflow-y-auto pr-1">
            {selectedAttraction?.tour_packages?.map((pkg) => {
              const available = isPackageAvailable(pkg);
              const priceNum = Number(pkg.price);
              return (
                <div
                  key={pkg.package_id}
                  className={`flex flex-col gap-2 rounded-lg border p-4 transition-all duration-200 ${
                    available
                      ? "border-border hover:border-primary hover:bg-accent/5 cursor-pointer"
                      : "border-border/40 bg-muted/20 opacity-70"
                  }`}
                  onClick={() => {
                    if (available) {
                      setIsModalOpen(false);
                      navigate(`/booking?packageId=${pkg.package_id}`);
                    }
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`font-bold ${available ? "text-foreground" : "text-muted-foreground"}`}>
                        {pkg.package_name}
                      </div>
                      {pkg.duration && (
                        <div className="text-xs text-muted-foreground/75 mt-0.5">
                          ระยะเวลา: {pkg.duration}
                        </div>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`font-extrabold ${available ? "text-primary text-base" : "text-muted-foreground text-sm"}`}>
                        {priceNum.toLocaleString()} บาท
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 border-t border-border/40 pt-2">
                    {available ? (
                      <>
                        <span className="text-xs font-semibold text-green-accent flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-green-accent animate-pulse" />
                          พร้อมรอบเดินทางในระบบ
                        </span>
                        <span className="text-xs font-bold text-primary hover:underline">
                          เลือกและไปหน้ารายละเอียดการจอง →
                        </span>
                      </>
                    ) : (
                      <span className="text-xs font-semibold text-red-500/80">
                        ❌ ไม่มีรอบในแพ็คเกจขณะนี้
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
