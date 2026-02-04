import "reflect-metadata";
import { DataSource } from "typeorm";
import { Article } from "../entities/Article";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "oscar",
  database: process.env.DB_NAME || "publications_db",
  synchronize: true,
  logging: false,
  entities: [Article],
});

