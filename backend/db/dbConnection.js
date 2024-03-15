
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const URI = process.env.MONGO_DB_URI
    await mongoose.connect(URI);
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Error to connect Mongo DB", error.message);
  }
};

export default dbConnection; 
