import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

import { HttpResponse } from "../../shared/response/http.response";
import { usuarios_bvaDTO } from "../DTOs/usuarios.dto";


export class usuarios_bvaMiddleware {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }
    bookValidator(req: Request, res: Response, next: NextFunction) {
        const { name, desc } = req.body;

        const valid: usuarios_bvaDTO = new usuarios_bvaDTO();
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