import { NextFunction, Request, Response } from "express";
import { AttractionService } from "../services/attraction.service";

const serializeAttraction = (item: any) => ({
  ...item,
  latitude: item.latitude === null ? null : Number(item.latitude),
  longitude: item.longitude === null ? null : Number(item.longitude),
  average_rating: item.reviews?.length
    ? item.reviews.reduce((sum: number, review: any) => sum + Number(review.rating || 0), 0) / item.reviews.length
    : 0,
  review_count: item.reviews?.length || 0,
  favorite_count: item.favorites?.length || 0,
});

export class AttractionController {
  private attractionService = new AttractionService();

  public list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await this.attractionService.list(req.query);
      return res.json(items.map(serializeAttraction));
    } catch (error) {
      next(error);
    }
  };

  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await this.attractionService.get(Number(req.params.id));
      if (!item) return res.status(404).json({ message: "Attraction not found" });
      return res.json(serializeAttraction(item));
    } catch (error) {
      next(error);
    }
  };

  public categories = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json(await this.attractionService.listCategories());
    } catch (error) {
      next(error);
    }
  };

  public toggleFavorite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });
      return res.json(await this.attractionService.toggleFavorite(user_id, Number(req.params.id)));
    } catch (error) {
      next(error);
    }
  };

  public myFavorites = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });
      return res.json(await this.attractionService.myFavorites(user_id));
    } catch (error) {
      next(error);
    }
  };

  public createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user_id = (req as any).user?.id;
      if (!user_id) return res.status(401).json({ message: "Unauthorized" });
      const rating = Number(req.body.rating);
      if (!rating || rating < 1 || rating > 5) return res.status(400).json({ message: "Rating must be 1-5" });
      const review = await this.attractionService.createReview({
        user_id,
        attraction_id: Number(req.params.id),
        rating,
        comment: req.body.comment,
      });
      return res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  };
}
