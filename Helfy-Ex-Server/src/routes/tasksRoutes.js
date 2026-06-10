import express from 'express';
import {
  getTasks,
  addTask,
  putTask,
  deleteTaskById,
  toggleTaskById,
} from '../controllers/tasksControllers.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', putTask);
router.delete('/:id', deleteTaskById);
router.patch('/:id/toggle', toggleTaskById);

export default router;
