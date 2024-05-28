import prismaClient from '../../to-do/src/prisma/index'

interface FinishRequest {
    id: string;

}
class FinishListService {
    async execute({ id }: FinishRequest) {
        try {
            const itemToDelete = await prismaClient.list.findFirst({
                where: {
                    id: id,
                },
            });

            if (!itemToDelete) {
                throw new Error('Item not found');
            }



            await prismaClient.list.delete({
                where: {
                    id: id,
                },
            });

            return { message: 'Item successfully deleted' };

        } catch (err) {
            console.log(err);
            throw new Error('An error occurred while deleting the item');
        }
    }
}

export { FinishListService };
