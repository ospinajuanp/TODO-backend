import {z} from 'zod'

export const createTasksSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }).min(3),
    description: z.string({
        required_error: 'Description is required',
    }).min(3),
    status: z.string({
        required_error: 'Status is required',
    }).min(3),
    dataTarget: z.string().datetime().optional()
})