import { StatusCodes } from "http-status-codes";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "../services/tasksServices.js";

export const getTasks = (req, res) => {
  res.json(getAllTasks());
};

export const addTask = (req, res) => {
  const { title, description, priority } = req.body;
  if (!title || !description || !priority) return res.status(StatusCodes.BAD_REQUEST).json({ error: 'title, description and priority are required' });
  const task = createTask({ title, description, priority });
  res.status(StatusCodes.CREATED).json(task);
};

export const putTask = (req, res) => {
  const id = Number(req.params.id);
  const task = updateTask(id, req.body);
  if (!task) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Task not found' });
  res.json(task);
};

export const deleteTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = deleteTask(id);
  if (!task) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Task not found' });
  res.json(task);
};

export const toggleTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = toggleTask(id);
  if (!task) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Task not found' });
  res.json(task);
};
