import { Router } from "express";

const routes: Router = Router();

routes.get("/", function (req, res) {
  return res.json({ message: "Hello World" });
});

export default routes;
