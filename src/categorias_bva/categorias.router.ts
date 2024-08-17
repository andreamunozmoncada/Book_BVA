import { BaseRoutres } from "../shared/routes/router";
import { categorias_bvaController } from "./controllers/categoria.controller";
import { categorias.bvaMiddleware } from "./middlewares/categoria.middleware";

export class categoria_bvaRouter extends BaseRoutres<book_bvaController, book_bvaMiddleware> {
    constructor() categoria_bva
        super(book_bvaController, book_bvaMiddleware);
    }

    routes(): void {
        this.router.get("/book", (req:any, res:any) => this.controller.getbook(req, res));
        this.router.get("/book/:id", (req:any, res:any) =>  
            this.controller.getbookById(req, res)
        );
        this.router.post("/createbook", (req:any, res:any, next:any) => [this.middelware.bookValidator(req, res, next)], (req:any, res:any) =>
            this.controller.createbook(req, res)
        );
        this.router.put("/updatePriority/:id", (req:any, res:any) =>
            this.controller.updatebook(req, res)
        );
        this.router.delete("/deletebook/:id", (req:any, res:any) =>
            this.controller.deletebook(req, res)
        );
    }
}