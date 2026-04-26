import express from 'express';
import todoRoutes from './routes/todo.routes.js';

const app = express();

app.use(express.json());

// mount routes
app.use('/todos', todoRoutes);

export default app;