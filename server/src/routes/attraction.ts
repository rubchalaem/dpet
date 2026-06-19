import { Router } from "express";
import { AttractionController } from "../controllers/attraction";
import { authenticateToken } from "../middlewares/auth";

export class AttractionRoutes {
  public path = "/attractions";
  public router = Router();
  private attractionController = new AttractionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/categories", this.attractionController.categories);
    this.router.get(this.path, this.attractionController.list);
    this.router.get(`${this.path}/favorites/me`, authenticateToken, this.attractionController.myFavorites);
    this.router.get(`${this.path}/:id`, this.attractionController.get);
    this.router.post(`${this.path}/:id/favorite`, authenticateToken, this.attractionController.toggleFavorite);
    this.router.post(`${this.path}/:id/reviews`, authenticateToken, this.attractionController.createReview);
  }
}

export default new AttractionRoutes().router;
