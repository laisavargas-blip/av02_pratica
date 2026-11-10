import express from "express";
const router = express.Router();

import * as controller from "../controllers/jogo.controllers.js";

router.getAll("/:id", controller.getAll);

router.getById("/:id", controller.getById);

router.post("/:id", controller.post);

router.patch("/:id", controller.patch);

router.delete("/:id", controller.delete);

export default router;