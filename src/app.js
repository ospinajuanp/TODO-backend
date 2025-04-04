import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.route.js'
import postsRoutes from './routes/posts.routes.js'

const app = express()

// app.use(cors({
//     origin: '*', // 'http://localhost:5174', // o '*' para permitir todos (solo en pruebas)
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));

app.use(cors());


app.use(morgan('dev')) // para ver las peticiones
app.use(express.json()) // para poder recibir y leer json
app.use(cookieParser()) // para poder recibir y leer cookies
app.use('/api', authRoutes) // para usar las rutas
app.use('/api', taskRoutes) // para usar las rutas
app.use('/api', postsRoutes) // para usar las rutas

export default app

