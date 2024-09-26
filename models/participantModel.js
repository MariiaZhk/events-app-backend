import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    heardFrom: {
      type: String,
      enum: ["social media", "friends", "myself"],
      required: [true, "Please specify where you heard about this event"],
    },
  },
  { versionKey: false, timestamps: true }
);

participantSchema.post("save", handleSaveError);
participantSchema.post("findOneAndUpdate", handleSaveError);

export const Participant = model("participant", participantSchema);
export { participantSchema };
