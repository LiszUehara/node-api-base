import { Request, Response } from "express";
import { DetailListService } from "../../services/DetailsListService";


class DetailListController{
    async handle(request: Request, response: Response) {
        const list_id = request.query.id as string;
         
        const detailTask = new DetailListService();

        const list = await detailTask.execute({
            list_id
        })

        return response.json(list);
    }
}

export { DetailListController }