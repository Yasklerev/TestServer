"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// Rutas
const ownerRoutes_1 = __importDefault(require("./routes/ownerRoutes"));
const petRoutes_1 = __importDefault(require("./routes/petRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default("dev"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("", ownerRoutes_1.default);
        this.app.use("", petRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Servidor puerto: ", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
