import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

// Rutas
import ownerRoutes from "./routes/ownerRoutes";
import petRoutes from "./routes/petRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("", ownerRoutes);
    this.app.use("", petRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Servidor puerto: ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
