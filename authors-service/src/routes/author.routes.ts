import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";

const router = Router();
const controller = new AuthorController();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

export default router;
