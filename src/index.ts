import express, { Express, Request, Response } from "express";
import router from "./Routes";
import mongoose from "mongoose";

const app: Express = express();

app.use(express.json());

//midelware
app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://jhon437699:6OdssDZRny9qbD6v@cluster0.t8ccsfn.mongodb.net/prueba"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to DB", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.redirect("/api");
});

export default app;
