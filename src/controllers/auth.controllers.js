import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js'

// para crear un usuario
export const register = async (req, res) => { // para crear un usuario
    const { name, email, password } = req.body // para recibir los datos

    // para guardar el usuario
    try {
        const passwordHash = await  bcrypt.hash(password, 10) // Espera la encriptaron
        const user = new User({ name, email, password: passwordHash });
        const userSaved = await user.save(); // Guarda en la BD
        const token = await createAccesToken({ id: userSaved._id }); // Crea el token
        
        res.cookie('token', token, { httpOnly: true }) // para enviar el token como cookie 
        res.json({ // para enviar la respuesta 
            status: 200, // para indicar que la operación fue exitosa
            message: 'User created successfully', // para indicar el mensaje de éxito
            data: { // para enviar los datos del usuario registrado
                id: userSaved._id,
                name: userSaved.name,
                email: userSaved.email,
                password: userSaved.password
            }
        })
        
    } catch (error) {
        const emailFound = await User.findOne({ email })
        
        if (emailFound) {
            return res.status(400).json({ status: 400, message: 'Email already exists' })
        }
        
        res.status(500).json({ status: 500, message: error.message }) 
    }
}

// para iniciar sesión
export const login = async (req, res) => { 
    const { email, password } = req.body // para recibir los datos

    // para guardar el usuario
    try {
        const userFound = await User.findOne({ email })

        if (!userFound) {
            return res.status(404).json({ status: 404, message: 'User not found' })
        }
        const isMatchPassword = await  bcrypt.compare(password, userFound.password) // Espera la encriptaron

        if (!isMatchPassword) {
            return res.status(404).json({ status: 404, message: 'Password incorrect' })
        }

        const token = await createAccesToken({ id: userFound._id }); // Crea el token
        
        res.cookie('token', token, { httpOnly: true }) // para enviar el token como cookie 
        res.json({ // para enviar la respuesta 
            status: 200, // para indicar que la operación fue exitosa
            message: 'User login successfully', // para indicar el mensaje de éxito
            data: { // para enviar los datos del usuario registrado
                id: userFound._id,
                name: userFound.name,
                email: userFound.email,
                password: userFound.password
            }
        })

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message }) 
    }
}

// para cerrar sesión
export const logout = (req, res) => {
    // res.clearCookie('token') // para borrar la cookie
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) }) // para borrar la cookie
    return res.send({ status: 200, message: 'User logout successfully' })
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id) // para buscar el usuario

    if (!userFound) { // si no se encuentra el usuario
        return res.status(404).json({ status: 404, message: 'User not found' })
    }

    // para enviar la respuesta
    return res.send({ status: 200, message: 'User profile', data: {
        id: userFound._id,
        name: userFound.name,
        email: userFound.email
    } })

}