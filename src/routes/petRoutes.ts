import { Router } from "express";
import { petController } from "../controllers/petController";

class PetsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.post("/createPet", petController.createPet);
    this.router.get("/listAllPets", petController.listAllPets);
    this.router.get("/listOnePet/:id", petController.listOnePet);
    this.router.get("/searchPet", petController.searchPet);
    this.router.put("/updatePet", petController.updatePet);
    this.router.delete("/deletePet/:id", petController.deletePet);
  }
}

const petsRoutes = new PetsRoutes();
export default petsRoutes.router;
