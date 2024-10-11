import { NextFunction, Request } from "express";

export const logRequestMethod = (req: Request, next: NextFunction) => {
  console.log(req.method);
  next();
};
export const logHostname = (req: Request, next: NextFunction) => {
  console.log(req.hostname);
  next();
};
