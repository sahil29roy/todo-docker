import Todo from '../models/todo.models.js';


export const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const todo = await Todo.create({
            title,
            completed
        });

        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};