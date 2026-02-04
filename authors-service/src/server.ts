import app from "./app";
import { AppDataSource } from "./config/data-source";

const PORT = 3001;

AppDataSource.initialize()
  .then(() => {
    console.log(" Authors DB connected");
    app.listen(PORT, () => {
      console.log(` Authors Service running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("DB connection error:", error));
