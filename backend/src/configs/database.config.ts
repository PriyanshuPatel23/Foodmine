import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://pkp266276:8wqkfqSfPPxpS0hF@cluster0.vk5bkaj.mongodb.net/",
      {}
    )
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error);
    });
};

export default dbConnect;
