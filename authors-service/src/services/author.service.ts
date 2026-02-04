import { AuthorRepository } from "../repositories/author.repository";
import { CreateAuthorDTO } from "../dtos/CreateAuthorDTO";
import { Author } from "../entities/Author";

export class AuthorService {

  async createAuthor(data: CreateAuthorDTO): Promise<Author> {
    if (!data.name || data.name.trim() === "") {
      throw new Error("Name is required");
    }

    if (!data.email || data.email.trim() === "") {
      throw new Error("Email is required");
    }

    const existingAuthor = await AuthorRepository.findOne({
      where: { email: data.email }
    });

    if (existingAuthor) {
      throw new Error("Author with this email already exists");
    }

    const author = AuthorRepository.create(data);
    return await AuthorRepository.save(author);
  }

  async getAuthorById(id: number) {
    return await AuthorRepository.findOne({
      where: { id }
    });
  }

  async getAllAuthors() {
    return await AuthorRepository.find();
  }
}

