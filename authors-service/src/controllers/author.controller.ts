import { Request, Response } from "express";
import { AuthorService } from "../services/author.service";

const authorService = new AuthorService();

export class AuthorController {

  // Crear autor
  async create(req: Request, res: Response) {
    try {
      const author = await authorService.createAuthor(req.body);
      return res.status(201).json(author);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || "Error creating author"
      });
    }
  }

  // Obtener autor por ID
  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    try {
      const author = await authorService.getAuthorById(id);

      if (!author) {
        return res.status(404).json({
          message: "Author not found"
        });
      }

      return res.json(author);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  }

  // Obtener todos los autores
  async getAll(req: Request, res: Response) {
    try {
      const authors = await authorService.getAllAuthors();
      return res.json(authors);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  }
}
