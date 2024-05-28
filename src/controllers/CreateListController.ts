import { Request, Response } from "express";
import { CreateListService } from "../../services/CreateListService"

class CreateListController{
    async handle(request: Request, response: Response) {
        const { name, id, status } = request.body;

        
        const createListService = new CreateListService();

        const task = await createListService.execute({
            id,
            name,
            status
        })

        return response.json(task);

    }

}

export { CreateListController }