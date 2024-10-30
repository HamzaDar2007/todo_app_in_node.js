import express from 'express'
import { createSubTodo, deleteSubTodo, getAllSubTodos, updateSubTodo } from './../controllers/subTodoController.js'


const router = express.Router();

router.post('/todo', createSubTodo);
router.get('/todo', getAllSubTodos);
router.put('/:id', updateSubTodo);
router.delete('/:id', deleteSubTodo);

export default router;