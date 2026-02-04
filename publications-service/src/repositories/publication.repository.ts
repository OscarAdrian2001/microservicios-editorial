import { Article } from "../entities/Article";
import { PublicationStatus } from "../entities/PublicationStatus";

export interface PublicationRepository {
  create(publication: Article): Promise<Article>;
  findById(id: number): Promise<Article | null>;
  findAll(): Promise<Article[]>;
  updateStatus(id: number, status: PublicationStatus): Promise<Article | null>;
}
