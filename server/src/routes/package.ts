import { Router } from "express";
import { PackageController } from "../controllers/package";

export class PackageRoutes {
  public path = "/packages";
  public router = Router();
  private packageController = new PackageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.packageController.listPackages);
    this.router.get(`${this.path}/:id`, this.packageController.getPackage);
    this.router.get(`${this.path}/:id/schedules`, this.packageController.getSchedules);
  }
}

export default new PackageRoutes().router;
