import Joi from "joi";

export const addParticipantSchema = Joi.object({
  fullName: Joi.string().required().messages({
    "string.empty": "Full name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  dateOfBirth: Joi.date().required().messages({
    "date.base": "Date of birth is required",
    "any.required": "Date of birth is required",
  }),
  heardFrom: Joi.string()
    .valid("social media", "friends", "myself")
    .required()
    .messages({
      "string.empty": "Please specify where you heard about this event",
      "any.required": "Please specify where you heard about this event",
    }),
});
