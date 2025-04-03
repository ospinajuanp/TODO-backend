import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/taks.route.js'

const app = express()

app.use(morgan('dev')) // para ver las peticiones
app.use(express.json()) // para poder recibir y leer json
app.use(cookieParser()) // para poder recibir y leer cookies
app.use('/api', authRoutes) // para usar las rutas
app.use('/api', taskRoutes) // para usar las rutas

export default app

