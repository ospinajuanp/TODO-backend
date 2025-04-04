import mongoose from "mongoose";

// para crear el esquema de las tareas
const postSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
    image_url: {type: String, default: '', required: false, trim: true},
    status: {type: String, default: 'draft', required: true, trim: true}, // 'draft', 'published', 'archived'
    published_at: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, {
    timestamps: true // para que se agregue la fecha de creación y actualización
})

export default mongoose.model('Post', postSchema)