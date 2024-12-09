import {z} from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(2, "Need ,Min. 3 character"),
    email: z.string(),
    password: z.string().min(8, "Password length must be min. 8"),
});

export const LoginSchema = z.object({
    email: z.string(),
    password: z.string().min(8, "Password length must be min. 8"),
});

export const ContactSchema = z.object({
    name: z.string().min(2, "Need Min. 3 character"),
    email: z.string().email(),
    number: z.string().min(10, "Phone number length must be min. 10"),
    message: z.string().min(10, "Need Min. 10 Character"),
});

export const AccountSchema = z.object({
    firstname: z.string().min(2, "Need Min. 3 character"),
    lastname: z.string().min(2, "Need Min. 3 character"),
    email: z.string().email(),
    address: z.string().min(10, "length must be min. 5"),
    currentpassword: z.string().min(6, "Password length must be min. 6"),
    newpassword: z.string().min(6, "Password length must be min. 6"),
    confirmpassword: z.string().min(6, "Password length must be min. 6"),
}).refine((data) => data.newpassword === data.confirmpassword, {
    message : "password doesn't match",
    path : ["confirmPassword"],
});

export const BillingDetailsSchema = z.object({
    firstname: z.string().min(2, "Need Min. 3 character"),
    companyname: z.string().min(2, "Need Min. 3 character"),
    streetaddress: z.string().min(10, "length must be min. 5"),
    newpassword: z.string().min(6, "Password length must be min. 6"),
    confirmpassword: z.string().min(6, "Password length must be min. 6"),
    number: z.string().min(10, "Phone number length must be min. 10"),
    email: z.string().email(),
});