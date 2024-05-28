import { Request, Response, json } from "express";
import { FinishListService } from "../../services/DeleteListService";



class FinishListController{
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        console.log(id)
        const finishListService = new FinishListService();
        const list = await finishListService.execute({
            id,
         })
        /*


        
                return response.json(list)
        */
        return response.json({})

    }
}


export { FinishListController }