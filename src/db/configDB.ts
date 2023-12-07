import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
