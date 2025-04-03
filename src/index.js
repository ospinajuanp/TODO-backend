import app from './app.js'
import { connectDB } from './db.js'

connectDB() // Conectar a la base de datos
// app.listen(3000) // Escuchar en el puerto 3000
// console.log('Server running on port 3000') // Mostrar mensaje en la consola

export default app