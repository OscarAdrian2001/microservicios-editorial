import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/data-source";

const PORT = 3002;

AppDataSource.initialize()
  .then(() => {
    console.log("Publications DB connected");

    app.listen(PORT, () => {
      console.log(`Publications Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
