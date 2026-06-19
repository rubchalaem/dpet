import prisma from "../utils/prisma";

const attractionInclude = {
  category: true,
  images: { orderBy: [{ is_cover: "desc" as const }, { sort_order: "asc" as const }] },
  favorites: { select: { id: true } },
  reviews: { include: { user: true }, orderBy: { review_date: "desc" as const } },
  tour_packages: { include: { schedules: true } },
};

export class AttractionService {
  public async list(query: any) {
    const search = query.search?.toString().trim();
    const categoryId = Number(query.category_id || 0);
    const district = query.district?.toString();
    const subdistrict = query.subdistrict?.toString();
    const popular = query.popular === "true";
    const hasTours = query.has_tours === "true";

    return prisma.tourist_attractions.findMany({
      where: {
        ...(search
          ? {
              OR: [
                { attraction_name: { contains: search } },
                { description: { contains: search } },
                { location: { contains: search } },
              ],
            }
          : {}),
        ...(categoryId ? { category_id: categoryId } : {}),
        ...(district ? { district } : {}),
        ...(subdistrict ? { subdistrict } : {}),
        ...(popular ? { is_popular: true } : {}),
        ...(hasTours ? { tour_packages: { some: {} } } : {}),
      },
      include: attractionInclude,
      orderBy: [{ is_popular: "desc" }, { attraction_id: "asc" }],
    });
  }

  public async get(id: number) {
    return prisma.tourist_attractions.findUnique({
      where: { attraction_id: id },
      include: attractionInclude,
    });
  }

  public async listCategories() {
    return prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  }

  public async toggleFavorite(user_id: number, attraction_id: number) {
    const existing = await prisma.favorites.findUnique({
      where: { user_id_attraction_id: { user_id, attraction_id } },
    });

    if (existing) {
      await prisma.favorites.delete({ where: { id: existing.id } });
      return { favorited: false };
    }

    await prisma.favorites.create({ data: { user_id, attraction_id } });
    return { favorited: true };
  }

  public async myFavorites(user_id: number) {
    return prisma.favorites.findMany({
      where: { user_id },
      include: { attraction: { include: attractionInclude } },
      orderBy: { created_at: "desc" },
    });
  }

  public async createReview(data: { user_id: number; attraction_id: number; rating: number; comment?: string }) {
    return prisma.reviews.create({
      data,
      include: { user: true, attraction: true },
    });
  }
}
