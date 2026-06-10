import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasksRoutes.js';
import { StatusCodes } from 'http-status-codes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
});

app.listen(4000, () => console.log('Server running on port 4000'));