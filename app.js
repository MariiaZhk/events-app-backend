import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import eventsRouter from "./routes/eventsRouter.js";
import participantRouter from "./routes/participantRouter.js";

const app = express();
app.use(express.json());
app.use("/events", eventsRouter);
app.use("/participants", participantRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const PORT = 3000;
const DB_HOST =
  "mongodb+srv://MariiaZhk:24121979Zbu@cluster0.qgfgm.mongodb.net/events-registration-app?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
