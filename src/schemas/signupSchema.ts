import exp from 'constants';
import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 character")
    .max(2, "Username must be no more 20 character")
    .regex(/^[a-ZA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message: "password must be at least 6 characters"})
})