import express from "express";

const eventsRouter = express.Router();

eventsRouter.get("/verify/:verificationToken");

export default eventsRouter;
