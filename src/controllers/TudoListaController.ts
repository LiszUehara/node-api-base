import { Request, Response } from "express";
import { TudoListService } from "../../services/TudoListService";


class TudoListController{
    async handle(request: Request, response: Response){
        const status = request.query.status as string;
        

        const listTudo = new TudoListService();

        const tudo = await listTudo.execute({
            status,
        })

        return response.json(tudo);
    }
}
export { TudoListController}