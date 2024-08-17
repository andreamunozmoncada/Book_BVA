
import { BaseRoutres } from "../shared/routes/router";
import { transacciones_bvaController } from "./controllers/transacciones.controller";
import { transacciones_bvaMiddleware } from "./middlewares/transacciones.middleware";

export class transacciones_bvaRouter extends BaseRoutres<transacciones_bvaController, transacciones_bvaMiddleware> {
    constructor() {
        super(transacciones_bvaController, transacciones_bvaMiddleware);
    }

    routes(): void {
        this.router.get("/transacciones", (req:any, res:any) => this.controller.gettransacciones(req, res));
        this.router.get("/transacciones/:id", (req:any, res:any) =>  
            this.controller.gettransaccionesById(req, res)
        );
        this.router.post("/createtransacciones", (req:any, res:any, next:any) => [this.middelware.transaccionesValidator(req, res, next)], (req:any, res:any) =>
            this.controller.createtransacciones(req, res)
        );
        this.router.put("/updatePriority/:id", (req:any, res:any) =>
            this.controller.updatetransacciones(req, res)
        );
        this.router.delete("/deletetransacciones/:id", (req:any, res:any) =>
            this.controller.deletetransacciones(req, res)
        );
    }
}