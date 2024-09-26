import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";
import { participantSchema } from "./participantModel.js";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set a title for the event"],
    },
    description: {
      type: String,
      required: [true, "Set a description for the event"],
    },
    eventDate: {
      type: Date,
      required: [true, "Set a date for the event"],
    },
    organizer: {
      type: String,
      required: [true, "Set an organizer for the event"],
    },
    participants: [participantSchema],
  },
  { versionKey: false, timestamps: true }
);

eventSchema.post("save", handleSaveError);

export const Event = model("event", eventSchema);
