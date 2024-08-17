
import { BaseRoutres } from "../shared/routes/router";
import { usuarios } from "./controllers/usuarios.controller";
import { usuarios_bvaMiddleware } from "./middlewares/usuarios.middleware";

export class usuarios_bvaRouter extends BaseRoutres<usuarios_bvaController, usuarios_bvaMiddleware> {
    constructor() {
        super(usuarios_bvaController,usuarios_bvaMiddleware);
    }

    routes(): void {
        this.router.get("/usuarios", (req:any, res:any) => this.controller.getusuarios(req, res));
        this.router.get("/usuarios/:id", (req:any, res:any) =>  
            this.controller.getusuariosById(req, res)
        );
        this.router.post("/createusuarios", (req:any, res:any, next:any) => [this.middelware.usuariosValidator(req, res, next)], (req:any, res:any) =>
            this.controller.createusuarios(req, res)
        );
        this.router.put("/updatePriority/:id", (req:any, res:any) =>
            this.controller.updateusuarios(req, res)
        );
        this.router.delete("/deleteusuarios/:id", (req:any, res:any) =>
            this.controller.deleteusuarios(req, res)
        );
    }
}