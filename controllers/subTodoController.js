// controllers/subTodoController.js

import { SubTodo } from '../models/todos/sub_todos_models.js';

// Create a SubTodo
export const createSubTodo = async (req, res) => {
    console.log('this is the request body', req.body)
    try {
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const subTodo = new SubTodo({
            content,
        });

        await subTodo.save();
        res.status(201).json(subTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all SubTodos
export const getAllSubTodos = async (req, res) => {
    try {
        const subTodos = await SubTodo.find();
        res.status(200).json(subTodos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a SubTodo
export const updateSubTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const subTodo = await SubTodo.findByIdAndUpdate(id, req.body, { new: true });
        if (!subTodo) return res.status(404).json({ error: 'SubTodo not found' });
        res.status(200).json(subTodo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a SubTodo
export const deleteSubTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const subTodo = await SubTodo.findByIdAndDelete(id);
        if (!subTodo) return res.status(404).json({ error: 'SubTodo not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
