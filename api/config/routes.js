import ArticleController from '../controllers/ArticleController';
import UserController from '../controllers/UserController';
import { authCheck } from '../middlewares/AuthMiddleware';

export default (server) => {
  server.param('id', (request, response, next, id) => {
    id = Number(request.params.id);
    
    if (isNaN(id)) {
      console.error('[ROUTE ERROR]: The parametre is not a number');
      response.status(400).send('Bad request');
    }
    else next();
  })

  server.get(`/article`, ArticleController.getAll);

  server.get(`/article/:slug`, ArticleController.getOne);

  server.post(`/article`, authCheck, ArticleController.add);

  server.put(`/article/:id`, authCheck, ArticleController.modify);
  
  server.delete(`/article/:id`, authCheck, ArticleController.remove);

  server.post('/connection', UserController.connection);
}
