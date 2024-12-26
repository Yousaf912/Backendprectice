const { z } = require("zod");

const SignupZodValidation = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: 'Name should be minimum 3 characters' })
    .max(10, { message: 'Maximum length of the name should be 10 characters' }),

  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email format' })
    .trim(),

  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(3, { message: 'password should be minimum 3 characters' })
    .max(10, { message: 'max length of the name should be 10 characters' }),
});

module.exports = SignupZodValidation;
