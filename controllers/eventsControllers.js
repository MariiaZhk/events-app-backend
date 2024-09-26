import { Event } from "../models/eventModel.js";
import { ctrlTryCatchWrapper } from "../helpers/ctrlTryCatchWrapper.js";

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  const total = await Event.countDocuments();

  res.status(200).json({ total, events });
};

export const getEventParticipants = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id, "participants");
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.status(200).json(event.participants);
};

export const addParticipant = async (req, res) => {
  const { id } = req.params;
  const participantData = req.body;

  if (!participantData || !participantData.fullName || !participantData.email) {
    return res.status(400).json({ message: "Invalid participant data" });
  }

  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  event.participants.push(participantData);
  await event.save();

  res.status(201).json({
    message: "Participant added successfully",
    participant: participantData,
  });
};

export default {
  getAllEvents: ctrlTryCatchWrapper(getAllEvents),
  getEventParticipants: ctrlTryCatchWrapper(getEventParticipants),
  addParticipant: ctrlTryCatchWrapper(addParticipant),
};
