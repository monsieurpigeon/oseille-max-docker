import { body, param } from "express-validator";
export function validateProductName() {
  return body("name").notEmpty().isString().trim().escape();
}

export function validateIdParam() {
  return param("id").toInt().isInt();
}
