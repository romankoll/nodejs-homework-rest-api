import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";

const userSingupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email or password field`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `missing required password or email field`,
  }),
  avatarURL: Joi.string(),
  subscription: Joi.string(),
  verify: Joi.boolean(),
  verificationToken: Joi.string(),
});

const userLogInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email or password field`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `missing required password or email field`,
  }),
});

const emailVerifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required field email`,
  }),
});

export default {
  userSingupSchema,
  userLogInSchema,
  emailVerifySchema,
};
