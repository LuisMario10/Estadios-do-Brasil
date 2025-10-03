import { Router } from "express";
import { StadiunsController } from "../controllers/stadiuns";

export const _ROUTER: Router = Router();

_ROUTER.get("/", (_, response) => response.send("Hello Estadios Brasil"));

_ROUTER.post("/estadios", StadiunsController.createValidation, StadiunsController.create);

_ROUTER.get("/estadios", StadiunsController.getAllValidation, StadiunsController.getAll);

_ROUTER.get("/estadios", StadiunsController.getByIDValidation, StadiunsController.getByID);

_ROUTER.put("/estadios", StadiunsController.updateValidation, StadiunsController.update);

_ROUTER.delete("/estadios", StadiunsController.deleteStadium, StadiunsController.deleteStadium);