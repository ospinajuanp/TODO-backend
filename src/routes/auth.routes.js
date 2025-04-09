import { Router } from 'express'
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controllers.js'
import { authMiddleware } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middlewares.js'

import { registerSchema, loginSchema } from '../schemas/auth.schema.js'



const router = Router()

router.post('/register', validateSchema(registerSchema), register) // para crear un usuario
router.post('/login', validateSchema(loginSchema), login) // para iniciar sesión
router.get('/verify', verifyToken) // 
router.post('/logout', logout) // para cerrar sesión
router.get('/profile', authMiddleware, profile)

export default router