import app from './app.js';
import connectDB from './config/db.js';
import 'dotenv/config';
const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database', error);
    });