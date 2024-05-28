import { Request, Response } from "express";
import { UpdateListService } from "../../services/UpdateListService";
import prismaClient from "../prisma";


class UpdateListController{
    async handle(request: Request, response: Response) {
        const { id, name, status} = request.body;
        const updateList = new UpdateListService();
        const tarefa = await updateList.execute({
            id,
            name,
            status
        })
        return response.json({message: 'deu certo, passa pra frente'});


    }
}

export {UpdateListController}