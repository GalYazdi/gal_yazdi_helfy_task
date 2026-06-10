let tasks = [];
let nextId = 1;

export const getAllTasks = () => tasks;

export const createTask = ({ title, description, priority = 'medium' }) => {
  const task = {
    id: nextId++,
    title,
    description,
    completed: false,
    createdAt: new Date(),
    priority,
  };
  tasks.push(task);
  return task;
};

export const updateTask = (id, data) => {
  const task = tasks.find((task) => task.id === id);
  if (!task) return null;
  Object.assign(task, data);
  return task;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;
  const [removed] = tasks.splice(index, 1);
  if (tasks.length === 0) nextId = 1;
  return removed;
};

export const toggleTask = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (!task) return null;
  task.completed = !task.completed;
  return task;
};
