import app from './app.js';
import connectDB from './config/db.js';
import 'dotenv/config';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at port ${PORT}`);
});