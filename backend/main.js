import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/db.js";
import routes from "./routes/routes.js";
import cors from "cors";
dotenv.config({
  path: "./.env",
});
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:8000",
      "http://localhost:8000",
      "*",
    ], // List of allowed origins
    credentials: true, // If you're dealing with cookies, authentication, etc.
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use("/api", routes);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
