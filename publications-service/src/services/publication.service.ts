import { Article } from "../entities/Article";
import { PublicationStatus } from "../entities/PublicationStatus";
import { PublicationRepository } from "../repositories/publication.repository";
import { TypeOrmPublicationRepository } from "../repositories/typeorm-publication.repository";
import { AuthorsClient } from "./authors-client";


export class PublicationService {

  private repository: PublicationRepository;
  private authorsClient: AuthorsClient;

  constructor() {
    this.repository = new TypeOrmPublicationRepository();
    this.authorsClient = new AuthorsClient();
  }

async createPublication(data: {
  title: string;
  content: string;
  authorId: number;
  category?: string;
}): Promise<Article> {

  const exists = await this.authorsClient.authorExists(data.authorId);
  if (!exists) {
    throw new Error("Author does not exist");
  }

  const article = new Article();
  article.title = data.title;
  article.content = data.content;
  article.authorId = data.authorId;
  article.category = data.category || "GENERAL";
  article.status = PublicationStatus.DRAFT;

  return await this.repository.create(article);
}


  async getPublicationById(id: number): Promise<Article | null> {
    return await this.repository.findById(id);
  }

  async getAllPublications(): Promise<Article[]> {
    return await this.repository.findAll();
  }

  async changeStatus(
    id: number,
    status: PublicationStatus
  ): Promise<Article | null> {
    return await this.repository.updateStatus(id, status);
  }

}
