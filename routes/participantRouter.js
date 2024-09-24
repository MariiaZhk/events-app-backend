import express from "express";

const participantRouter = express.Router();

participantRouter.get("/verify/:verificationToken");

export default participantRouter;
