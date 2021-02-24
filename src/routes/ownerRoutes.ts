import { Router } from "express";
import { ownerController } from "../controllers/ownerController";

class OwnerRotues {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.post("/createOwner", ownerController.createOwner);
    this.router.get("/listAllOwners", ownerController.listAllOwners);
    this.router.get("/listOneOwner/:id", ownerController.listOneOwner);
    this.router.get("/searchOwner", ownerController.searchOwner);
    this.router.put("/updateOwner/:id", ownerController.updateOwner);
    this.router.delete("/deleteOwner/:id", ownerController.deleteOwner);
  }
}

const ownerRoutes = new OwnerRotues();
export default ownerRoutes.router;
