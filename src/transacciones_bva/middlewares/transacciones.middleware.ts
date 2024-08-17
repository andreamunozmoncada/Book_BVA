import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

import { HttpResponse } from "../../shared/response/http.response";
import { transacciones_bvaDTO } from "../DTOs/transacciones.dto";


export class transacciones_bvaMiddleware {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }
    transaccionesValidator(req: Request, res: Response, next: NextFunction) {
        const { name, desc } = req.body;

        const valid: transacciones_bvaDTO = new transacciones_bvaDTO();
        valid.name = name;
        valid.desc = desc;

        validate(valid).then((err:any) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err);
            } else {
                next();
            }
        });
    }
}