import { Request, Response } from "express";
import { categorias_bvaService } from "../../services/categorias.service";


export class categoria_bvaController {
    constructor(
        private readonly priorityService: categorias_bvaService = new categorias_bvaService()
    ) { }
    async get(reqcategorias: Request, res: Response) {
        try {
            const data = await this.priorityService.findAllbooks();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async getcategoriasById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.findcategoriasById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async createcategorias(req: Request, res: Response) {
        try {
            const data = await this.priorityService.createcategorias(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updatecategorias(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.updatecategorias(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async deletecategorias(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.deletecategorias(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}