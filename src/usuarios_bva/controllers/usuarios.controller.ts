import { Request, Response } from "express";
import { usuarios_bvaService } from "../../services/usuarios.service";


export class usuarios_bvaController {
    constructor(
        private readonly priorityService: usuarios_bvaService = new usuarios_bvaService()
    ) { }
    async getusuarios(req: Request, res: Response) {
        try {
            const data = await this.priorityService.findAllusuarios();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async getbusuariosById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.findusuariossById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async createusuarios(req: Request, res: Response) {
        try {
            const data = await this.priorityService.createusuarios(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updateusuarios(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.updateusuarios(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async deleteusuarios(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.deleteusuarios(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}