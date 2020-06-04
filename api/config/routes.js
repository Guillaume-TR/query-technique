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

  server.post(`/article`, (request, response) => {
    response.status(201).send('The article was created');
  });

  server.put(`/article/:id`, (request, response) => {
    response.status(response.statusCode).send(`The article with id ${request.params.id} was modified`);
  });

  server.delete(`/article/:id`, (request, response) => {
    response.status(response.statusCode).send(`The article with id ${request.params.id} was deleted`);
  });
}
