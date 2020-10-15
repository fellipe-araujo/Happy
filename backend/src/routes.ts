import { Router } from "express";
import OrphanagesController from './controllers/OrphanagesControllers';

const routes = Router();

routes.get("/orphanages/all", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages/create", OrphanagesController.create);

export default routes;
