import Posts from '../models/posts.model.js'
import User from '../models/user.model.js'
import {connectDB} from '../db.js'

export const getPosts = async (req, res) => {
    const posts = await Posts.find().populate('user')
    res.json(posts)
}

export const getPostId = async (req, res) => {
    const post = await Posts.findById(req.params.id).populate('user')
    
    if (!post) {
        return res.status(404).json({ status: 404, message: 'Post not found' })
    }
    res.json(post)
}   

export const createPost = async (req, res) => {
    const {title, content, image_url, status} = req.body
    const userFound = await User.findById(req.user.id)
    const newPost = new Posts({
        title,
        content,
        image_url,
        status,
        user: userFound._id
    })
    const savePost = await newPost.save()
    res.json(savePost)
}   

export const deletePost = async (req, res) => {
    const post = await Posts.findByIdAndDelete(req.params.id)
    if (!post) {
        return res.status(404).json({ status: 404, message: 'Post not found' })
    }
    res.json({ status: 204, message: 'Post deleted successfully' })
}

export const updatePost = async (req, res) => {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!post) {
        return res.status(404).json({ status: 404, message: 'Post not found' })
    }  
    res.json({ status: 200, message: 'Post updated successfully' })
}

