import { AppDataSource } from "../config/data-source";
import { Author } from "../entities/Author";

export const AuthorRepository = AppDataSource.getRepository(Author);
