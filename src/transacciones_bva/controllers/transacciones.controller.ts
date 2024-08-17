import { Request, Response } from "express";
import { transacciones_bvaService } from "../../services/transacciones.service";


export class transacciones_bvaController {
    constructor(
        private readonly priorityService: transacciones_bvaService = new transacciones_bvaService()
    ) { }
    async gettransacciones(req: Request, res: Response) {
        try {
            const data = await this.priorityService.findAlltransacciones();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async gettransaccionesById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.findtransaccionesById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async createtransacciones(req: Request, res: Response) {
        try {
            const data = await this.priorityService.createtransacciones(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updatetransacciones(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.updatetransacciones(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async deletetransacciones(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.deletetransacciones(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}