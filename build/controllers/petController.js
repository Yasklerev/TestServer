"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PetController {
    createPet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = req.body;
            const query = yield database_1.default.query("INSERT INTO Pets SET ?", pet);
            res.json(query);
        });
    }
    listAllPets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query("SELECT  Pets.id, Pets.name as namePet, Pets.type_pet, Pets.race, Pets.sex, Pets.birthday, Owners.name, Owners.last_name, Owners.rut FROM Pets INNER JOIN Owners on Pets.owner = Owners.id;");
            res.json(query);
        });
    }
    listOnePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query(`SELECT Pets.id, Pets.name as namePet, Pets.type_pet, Pets.race, Pets.sex, Pets.birthday, Owners.name, Owners.last_name, Owners.rut FROM Pets INNER JOIN Owners on Pets.owner = Owners.id WHERE Owners.id = ${id}`);
            res.json(query);
        });
    }
    searchPet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = req.query.word;
            const query = yield database_1.default.query(`SELECT * FROM Pets WHERE name LIKE ?`, "%" + word + "%");
            res.json(query);
        });
    }
    updatePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pet = req.body;
            const id = req.body.id;
            const query = yield database_1.default.query(`UPDATE Pets SET ? WHERE id = ?`, [pet, id]);
            res.json(query);
        });
    }
    deletePet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query("DELETE FROM Pets WHERE id = ?", id);
            res.json(query);
        });
    }
}
exports.petController = new PetController();
