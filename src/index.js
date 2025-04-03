import app from './app.js'
import { connectDB } from './db.js'

connectDB() // Conectar a la base de datos
// app.listen(3000) // Escuchar en el puerto 3000
// console.log('Server running on port 3000') // Mostrar mensaje en la consola

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app