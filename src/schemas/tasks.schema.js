import {z} from 'zod'

export const createTasksSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }).min(3),
    description: z.string({
        required_error: 'Description is required',
    }).min(3),
    status: z.string().min(3).optional(),
    dataTarget: z.string().datetime().optional()
})