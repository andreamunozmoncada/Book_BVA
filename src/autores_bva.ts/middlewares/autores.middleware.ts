import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

import { HttpResponse } from "../../shared/response/http.response";
import { book_bvaDTO } from "../DTOs/autores.dto";


export class autores_bvaMiddleware {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }
    autoresValidator(req: Request, res: Response, next: NextFunction) {
        const { name, desc } = req.body;

        const valid: autores_bvaDTO = new autores_bvaDTO();
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