import { eq } from "drizzle-orm";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { db } from "../db/db";
import { productTable } from "../db/schema";
import { CustomError } from "../lib/custom-error";

export async function addProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new CustomError(JSON.stringify(result.array()), 400));
  }
  try {
    const product = await db.insert(productTable).values(req.body).returning();
    res.status(201).json({ product });
  } catch (error) {
    next(new CustomError("Failed to add product", 500));
  }
}

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await db.select().from(productTable);
    res.status(200).json({ products });
  } catch (error) {
    next(new CustomError("Failed to fetch products", 500));
  }
}

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new CustomError(JSON.stringify(result.array()), 400));
  }
  try {
    const product = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(req.params.id)));
    res.status(200).json({ product });
  } catch (error) {
    next(new CustomError("Failed to fetch product", 500));
  }
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new CustomError(JSON.stringify(result.array()), 400));
  }
  try {
    const product = await db
      .delete(productTable)
      .where(eq(productTable.id, Number(req.params.id)))
      .returning({
        deletedProductId: productTable.id,
      });
    res.status(200).json({ product });
  } catch (error) {
    next(new CustomError("Failed to delete product", 500));
  }
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(new CustomError(JSON.stringify(result.array()), 400));
  }
  try {
    const product = await db
      .update(productTable)
      .set(req.body)
      .where(eq(productTable.id, Number(req.params.id)))
      .returning();

    res.status(201).json({ product });
  } catch (error) {
    next(new CustomError("Failed to update product", 500));
  }
}
