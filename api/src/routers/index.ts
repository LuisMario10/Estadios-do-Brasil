import { Router } from "express";
import { StadiunsController } from "../controllers/stadiuns";

export const _ROUTER: Router = Router();

_ROUTER.get("/", (_, response) => response.send("Estadios do Brasil "));

_ROUTER.post("/estadios", StadiunsController.createValidation, StadiunsController.create);

_ROUTER.get("/estadios", StadiunsController.getAllValidation, StadiunsController.getAll);

_ROUTER.get("/estadios/:id", StadiunsController.getByIDValidation, StadiunsController.getByID);

_ROUTER.put("/estadios/:id", StadiunsController.updateValidation, StadiunsController.update);

_ROUTER.delete("/estadios/:id", StadiunsController.deleteValidation, StadiunsController.deleteStadium);