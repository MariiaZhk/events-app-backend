import express from "express";
import {
  addParticipant,
  getAllEvents,
  getEventParticipants,
} from "../controllers/eventsControllers.js";
import { addParticipantSchema } from "../schemas/participantShema.js";
import validateBody from "../helpers/validateBody.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id/participants", getEventParticipants);
eventsRouter.post(
  "/:id/registration",
  validateBody(addParticipantSchema),
  addParticipant
);

export default eventsRouter;
