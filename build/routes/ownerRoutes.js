"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ownerController_1 = require("../controllers/ownerController");
class OwnerRotues {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post("/createOwner", ownerController_1.ownerController.createOwner);
        this.router.get("/listAllOwners", ownerController_1.ownerController.listAllOwners);
        this.router.get("/listOneOwner/:id", ownerController_1.ownerController.listOneOwner);
        this.router.get("/searchOwner", ownerController_1.ownerController.searchOwner);
        this.router.put("/updateOwner/:id", ownerController_1.ownerController.updateOwner);
        this.router.delete("/deleteOwner/:id", ownerController_1.ownerController.deleteOwner);
    }
}
const ownerRoutes = new OwnerRotues();
exports.default = ownerRoutes.router;
