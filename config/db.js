import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://host.docker.internal:27017/tododb';
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;