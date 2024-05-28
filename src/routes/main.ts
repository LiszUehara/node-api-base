import { Router, Response, Request } from 'express'
import { CreateListController } from '../controllers/CreateListController'
import { DetailListController } from '../controllers/DetailsListController';
import { UpdateListController } from '../controllers/UpdateListService';
import { FinishListController } from '../controllers/DeleteListController';
import { TudoListController } from '../controllers/TudoListaController';

const router = Router();

router.post('/criar', new CreateListController().handle)
router.get('/detalhes', new DetailListController().handle)
router.put('/atualizar', new UpdateListController().handle)
router.delete('/deletar/:id', new FinishListController().handle)
router.get('/tudo', new TudoListController().handle)

export { router };

