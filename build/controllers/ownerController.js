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
class OwnerController {
    createOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = req.body;
            const query = yield database_1.default.query("INSERT INTO Owners SET ?", owner);
            res.json(query);
        });
    }
    listAllOwners(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query("SELECT id, name, email, last_name, rut, address, substring(birthday, 1, 10) as birthday FROM Owners");
            res.json(query);
        });
    }
    listOneOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const query = yield database_1.default.query(`SELECT * FROM Owners WHERE id = ${id}`);
            res.json(query);
        });
    }
    searchOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = req.query.word;
            const query = yield database_1.default.query(`SELECT * FROM Owners WHERE name LIKE ?`, "%" + word + "%");
            res.json(query);
        });
    }
    updateOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = req.body;
            const { id } = req.body;
            const query = yield database_1.default.query(`UPDATE Owners SET ? WHERE id = ?`, [
                owner,
                id,
            ]);
            res.json(query);
        });
    }
    deleteOwner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const query = yield database_1.default.query("DELETE FROM Owners WHERE id = ?", id);
            res.json(query);
        });
    }
}
exports.ownerController = new OwnerController();
