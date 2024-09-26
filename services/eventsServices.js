import { Event } from "../models/eventModel.js";

export const allEvents = () => Event.find({}, "-createdAt -updatedAt");
