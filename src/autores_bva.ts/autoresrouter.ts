
import { BaseRoutres } from "../shared/routes/router";
import { autores_bvaController } from "./controllers/autores.controller";
import { autores_bvaMiddleware } from "./middlewares/autores.middleware";

export class autores_bvaRouter extends BaseRoutres<autores_bvaController, autores_bvaMiddleware> {
    constructor() {
        super(autores_bvaController, autores_bvaMiddleware);
    }

    routes(): void {
        this.router.get("/autores", (req:any, res:any) => this.controller.getautores(req, res));
        this.router.get("/book/:id", (req:any, res:any) =>  
            this.controller.getautoresById(req, res)
        );
        this.router.post("/createautores", (req:any, res:any, next:any) => [this.middelware.autoresValidator(req, res, next)], (req:any, res:any) =>
            this.controller.createautores(req, res)
        );
        this.router.put("/updatePriority/:id", (req:any, res:any) =>
            this.controller.updateautores(req, res)
        );
        this.router.delete("/deleteautores/:id", (req:any, res:any) =>
            this.controller.deleteautores(req, res)
        );
    }
}