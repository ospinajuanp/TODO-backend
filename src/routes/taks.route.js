import {Router} from 'express'
import { authMiddleware } from '../middlewares/validateToken.js'
import { getTasks, getTaskId, createTasks, deleteTasks, updateTasks } from '../controllers/tasks.controllers.js'
import { createTasksSchema } from '../schemas/tasks.schema.js'
import { validateSchema } from '../middlewares/validator.middlewares.js'

const router = Router()

router.get('/tasks', authMiddleware, getTasks)
router.get('/tasks/:id', authMiddleware, getTaskId)
router.post('/tasks', authMiddleware, validateSchema(createTasksSchema), createTasks)
router.delete('/tasks/:id', authMiddleware, deleteTasks)
router.put('/tasks/:id', authMiddleware, updateTasks)

export default router