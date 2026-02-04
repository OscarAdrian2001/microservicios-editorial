import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Article } from "../entities/Article";
import { PublicationStatus } from "../entities/PublicationStatus";
import { PublicationRepository } from "./publication.repository";

export class TypeOrmPublicationRepository implements PublicationRepository {

  private repository: Repository<Article>;

  constructor() {
    this.repository = AppDataSource.getRepository(Article);
  }

  async create(publication: Article): Promise<Article> {
    return await this.repository.save(publication);
  }

  async findById(id: number): Promise<Article | null> {
    return await this.repository.findOneBy({ id });
  }

  async findAll(): Promise<Article[]> {
    return await this.repository.find();
  }

  async updateStatus(
    id: number,
    status: PublicationStatus
  ): Promise<Article | null> {

    const publication = await this.findById(id);
    if (!publication) return null;

    publication.status = status;
    return await this.repository.save(publication);
  }
}
