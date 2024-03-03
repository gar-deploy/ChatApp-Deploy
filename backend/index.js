import express from "express";
import env from "dotenv/config";
import authRoutes from "./routes/auth.js";
import dbConnection from "./db/dbConnection.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
