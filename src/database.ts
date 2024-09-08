import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// MongoDB connection string
const MONGO_URI = process.env.MONGODB_URI; // Local MongoDB

const connectDB = async () => {
    if (!MONGO_URI) {
        throw new Error('MONGODB_URI must be set in the environment variables');
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;