import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

// para validar el token antes de mostrar la ruta
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // para recibir el token

    if (!token) { // si no hay token
        return res.status(401).json({ status: 401, message: 'No Token, Unauthorized' });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => { // para verificar el token 
        if (err) {
            return res.status(401).json({ status: 401, message: 'Token is not valid ' });
        }
        req.user = user
    });
    
    next();
};

export {authMiddleware}