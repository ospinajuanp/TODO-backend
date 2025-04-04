import {Router} from 'express'
import { authMiddleware } from '../middlewares/validateToken.js'
import { getPosts, getPostId, createPost, deletePost, updatePost } from '../controllers/posts.controllers.js'
import { createPostsSchema } from '../schemas/posts.schema.js'
import { validateSchema } from '../middlewares/validator.middlewares.js'

const router = Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPostId)
router.post('/posts', authMiddleware, validateSchema(createPostsSchema), createPost)
router.delete('/posts/:id', authMiddleware, deletePost)
router.put('/posts/:id', authMiddleware, updatePost)

export default router
