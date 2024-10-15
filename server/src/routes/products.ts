import { requireAuth } from "@clerk/express";
import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../handlers/products";
import {
  validateIdParam,
  validateProductName,
} from "../lib/validator-functions";

const productsRouter = Router();

// Use a custom sign-in URL instead of the environment variable
productsRouter.get("/", requireAuth({ signInUrl: "/sign-in" }), (req, res) => {
  res.send("This is a protected route");
});

productsRouter.get("/product/:id", validateIdParam(), getProduct);
productsRouter.get("/product", getAllProducts);
productsRouter.post("/product", validateProductName(), addProduct);
productsRouter.put(
  "/product/:id",
  validateIdParam(),
  validateProductName(),
  updateProduct
);
productsRouter.delete("/product/:id", validateIdParam(), deleteProduct);

export default productsRouter;
