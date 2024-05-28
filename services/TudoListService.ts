import prismaClient from '../../to-do/src/prisma/index'


interface ListRequest{
    status: boolean | string;
}


class TudoListService{
    async execute({status} : ListRequest){

        const tasks = await prismaClient.list.findMany({
            where:{
                status: status === 'true' ? true : false
                
            }
        })

        return tasks;
    }
}

export { TudoListService}