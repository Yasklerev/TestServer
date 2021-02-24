"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petController_1 = require("../controllers/petController");
class PetsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post("/createPet", petController_1.petController.createPet);
        this.router.get("/listAllPets", petController_1.petController.listAllPets);
        this.router.get("/listOnePet/:id", petController_1.petController.listOnePet);
        this.router.get("/searchPet", petController_1.petController.searchPet);
        this.router.put("/updatePet", petController_1.petController.updatePet);
        this.router.delete("/deletePet/:id", petController_1.petController.deletePet);
    }
}
const petsRoutes = new PetsRoutes();
exports.default = petsRoutes.router;
