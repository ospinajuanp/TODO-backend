import Tasks from '../models/tasks.models.js'
import User from '../models/user.model.js'

// para obtener las tareas de la base de datos
export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find({
            user: req.user.id // para buscar las tareas de un usuario
        }).populate('user') // para popular el usuario 
        res.json(tasks)
    } catch (error) {   
        return res.status(500).json({ status: 500, message: 'Server error' })
    }
}

// para obtener una tarea de la base de datos
export const getTaskId = async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id).populate('user')
        if (!task) {
            return res.status(404).json({ status: 404, message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Server error' })
    }
}

// para crear una tarea en la base de datos de un usuario
export const createTasks = async (req, res) => {
    try {
        const {title, description, dateTarget, status } = req.body
        const userFound = await User.findById(req.user.id) // para buscar el usuario

        const newTask = new Tasks({
            title,
            description,
            dateTarget,
            status,
            user: userFound._id
        })

        const saveTask = await newTask.save()
        res.json(saveTask)
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Server error' })
    }
    
}

// para actualizar una tarea
export const updateTasks = async (req, res) => {
    try {
        console.log(req.body)
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!task) {
            return res.status(404).json({ status: 404, message: 'Task not found' })
        }
        res.json(task)
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Server error' })
    }
}

// para eliminar una tarea
export const deleteTasks = async (req, res) => {
    try {
        const task = await Tasks.findByIdAndDelete(req.params.id)
    
        if (!task) {
            return res.status(404).json({ status: 404, message: 'Task not found' })
        }
        return res.json({ status: 204, message: 'Task deleted successfully' })
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Server error' })
    }
}
