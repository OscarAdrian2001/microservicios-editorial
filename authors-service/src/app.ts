import express from "express";
import cors from "cors";
import authorRoutes from "./routes/author.routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/authors", authorRoutes);

export default app;
