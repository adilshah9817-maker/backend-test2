const { z } = require("zod");

const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 chars"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 chars"),

    gender:z
    .string()
    .trim()
    .min(7,"must be at least 7chars"),

    mobile:z
    .string()
    .trim()
    .min(10,"number must be at least 10 chars"),

    Address:z
    .string()
    .trim()
    .min(10,"must be at least 10 chars "),

    pincode:z
    .string()
    .trim()
    .min(6,"must be at least 6 chars")

});

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 chars"),
});

module.exports = {
  signupSchema,
  loginSchema,
};