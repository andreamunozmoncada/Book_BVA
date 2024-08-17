import { Request, Response } from "express";
import { autores_bvaService } from "../../services/autores.service";


export classautores_bvaController {
    constructor(
        private readonly priorityService: autores_bvaService = newautores_bvaService()
    ) { }
    async getautores(req: Request, res: Response) {
        try {
            const data = await this.priorityService.findAllautores();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async getautoresById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.findautoresById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async createautores(req: Request, res: Response) {
        try {
            const data = await this.priorityService.createautores(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updateautores(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.updateautores(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async deleteautores(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.deleteautores(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}