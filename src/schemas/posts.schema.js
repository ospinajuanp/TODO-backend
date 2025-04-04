import {z} from 'zod'

export const createPostsSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }).min(3),
    content: z.string({
        required_error: 'Content is required',
    }).min(3),
    image_url: z.string().optional(),
    status: z.string().optional(),
    published_at: z.string().datetime().optional()
})