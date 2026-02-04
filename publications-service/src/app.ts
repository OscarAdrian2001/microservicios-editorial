import express from "express";
import cors from "cors";
import publicationRoutes from "./routes/publication.routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use("/publications", publicationRoutes);

export default app;
