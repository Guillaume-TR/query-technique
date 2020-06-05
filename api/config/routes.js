import ArticleController from '../controllers/ArticleController';

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

  server.get(`/article/:id`, ArticleController.getOne);

  server.post(`/article`, ArticleController.add);

  server.put(`/article/:id`,ArticleController.modify);

  server.delete(`/article/:id`, ArticleController.remove);
}
