import express from "express";
import path from "path";
const __dirname = path.resolve();
import db from "./db.js";
import EmployeeRoute from "./routes/employeeRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/employee", EmployeeRoute);
app.use("/imagesomar", express.static(path.join(__dirname, "images")));
app.listen(5000, function () {
    console.log("server started ss");
});
