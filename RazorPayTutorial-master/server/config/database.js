import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  mongoose.set('strictQuery', true); // or false, based on your preference
  console.log(`Mongodb is connected with ${connection.host}`);
};
