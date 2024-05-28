import prismaClient from '../../to-do/src/prisma/index'

interface ListRequest{
    id: string;
    name:string;
    status: boolean | string;
}

class UpdateListService{
    async execute({id, name,  status = true}: ListRequest){
        console.log({id, name})
 

        const tarefa = await prismaClient.list.update({
            where:{
                id: id
            },
            data:{
                name: name,
                status: status === true ? true: false,
                

            }
        })


    }
}

export { UpdateListService}