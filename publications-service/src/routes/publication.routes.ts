import { Router } from "express";
import { PublicationController } from "../controllers/publication.controller";

const router = Router();
const controller = new PublicationController();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.patch("/:id/status", controller.changeStatus);

export default router;
