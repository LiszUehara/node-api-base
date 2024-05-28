import prismaClient from '../../to-do/src/prisma/index'


interface List{
    id: string;
    name:string;
    status: boolean;
}


class CreateListService{
    async execute({id, name, status}: List){

        
        if(!name){
            throw new Error("Error de envio de nome campos nao preenchidos")
        }

        const tarefa = await prismaClient.list.create({
            data: {
                name: name,
                status: status,
                id: id,
            }
        })

        return tarefa;
    }
}


export { CreateListService }