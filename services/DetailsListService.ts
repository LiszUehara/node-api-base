import prismaClient from '../../to-do/src/prisma/index'


interface DetailRequest{
    list_id: string;
}

class DetailListService {

    async execute({ list_id }: DetailRequest){
        const lista = await prismaClient.list.findFirst({
            where: {
                id: list_id
            }
        })

        return lista;
    }
}

export { DetailListService }