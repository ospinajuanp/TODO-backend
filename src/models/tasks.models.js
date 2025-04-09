import mongoose from "mongoose";

// para crear el esquema de las tareas
const taskSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    status: {type: String, default: 'pending', required: true, trim: true},
    dateTarget: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true // para que se agregue la fecha de creación y actualización
})

export default mongoose.model('Task', taskSchema)