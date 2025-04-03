import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

// para crear el token para la autenticación del usuario 
const createAccesToken = (payload) => {
    
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            TOKEN_SECRET,
            { 
            expiresIn: '1d' 
            },
            (err, token) => {
                if (err) {
                    reject(err)
                }
                resolve(token)
            }
        )
    })
}

export  { createAccesToken } 