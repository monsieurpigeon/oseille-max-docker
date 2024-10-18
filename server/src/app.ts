import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import customersRouter from "./routes/customers";
import databaseRouter from "./routes/database";
import productsRouter from "./routes/products";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(clerkMiddleware());
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use("/api", productsRouter);
    this.server.use("/api", customersRouter);
    this.server.use("/webhook", databaseRouter);
  }
}

export default new App().server;
