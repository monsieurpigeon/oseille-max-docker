import cors from "cors";
import express from "express";
import productsRouter from "./routes/products";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use("/api", productsRouter);
  }
}

export default new App().server;
