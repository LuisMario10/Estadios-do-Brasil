import { Router } from "express";
import { StadiunsController } from "../controllers/stadiuns";

export const _ROUTER: Router = Router();

_ROUTER.get("/", () => console.log("Hello Project - Estadios BR"));

_ROUTER.post("/estadios", StadiunsController.createValidation, StadiunsController.create);

_ROUTER.get("/estadios", StadiunsController.getAllValidation, StadiunsController.getAll);