import dotenv from "dotenv";
import express from "express";
import { helloWorld } from "../../shared";
dotenv.config();
var app = express();
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.send(helloWorld());
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
