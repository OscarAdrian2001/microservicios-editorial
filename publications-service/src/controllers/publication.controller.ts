import { Request, Response } from "express";
import { PublicationService } from "../services/publication.service";
import { PublicationStatus } from "../entities/PublicationStatus";

const service = new PublicationService();

export class PublicationController {

  async create(req: Request, res: Response) {
    try {
      const publication = await service.createPublication(req.body);
      res.status(201).json(publication);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    const publications = await service.getAllPublications();
    res.json(publications);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const publication = await service.getPublicationById(id);

    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    res.json(publication);
  }

  async changeStatus(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { status } = req.body;

    if (!Object.values(PublicationStatus).includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updated = await service.changeStatus(id, status);

    if (!updated) {
      return res.status(404).json({ message: "Publication not found" });
    }

    res.json(updated);
  }
}
