import mongoose from "mongoose";

// para crear el esquema de los usuarios
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true}
}, {
    timestamps: true // para que se agregue la fecha de creación y actualización
})

export default mongoose.model('User', userSchema)