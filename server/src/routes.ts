import { Router } from "express";

const routes: Router = Router();

routes.get("/", function (req, res) {
  return res.json({ message: "Oseille Max" });
});

export default routes;
