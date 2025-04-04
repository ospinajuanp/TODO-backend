import {z} from 'zod'

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
    }).min(3),
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: 'Password must be at least 6 characters' }).max(16, { message: 'Password must be at most 16 characters' })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, { message: 'Password must be at least 6 characters' }).max(16, { message: 'Password must be at most 16 characters' })
})

