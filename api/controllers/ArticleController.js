import Article from '../models/Article';


class ArticleController {

  async getAll(request, response) {
    try
    {
      response.status(200).send(await Article.findAll());
    }
    catch
    {
      response.status(500).send("Internal server error");
    }
  }

  async getOne(request, response) {
    try
    {
      const { id: articleId } = request.params;
      
      response.status(200).send(await Article.findbyId(articleId));
    }
    catch
    {
      response.status(500).send("Internal server error");
    }
  }

  async add(request, response) {
    try
    {
      const { title, content, shortContent } = request.body;
      
      if (title && content && shortContent) {
        response.status(201).send(await Article.create(title, content, shortContent));
      }
      else response.status(400).send("Bad request");
    }
    catch
    {
      response.status(500).send("Internal server error");
    }
  }

  async modify(request, response) {
    try
    {
      const { id: articleId } = request.params;
      const { title, content, shortContent } = request.body;

      const { data: articleFetch } = await Article.findbyId(articleId);
      
      if (articleFetch.length === 1) {
        if (title && content && shortContent) {
          response.status(200).send(await Article.update(articleId, title, content, shortContent));
        }
        else response.status(400).send("Bad request");
      }
      else response.status(404).send("Article not found");
    }
    catch
    { 
      response.status(500).send("Internal server error");
    }
  }

  async remove(request, response) {
    try
    {
      const { id: articleId } = request.params;

      const { data: articleFetch } = await Article.findbyId(articleId);
      
      if (articleFetch.length === 1) {
        response.status(200).send(await Article.delete(articleId));
      }
      else response.status(404).send("Article not found");
    }
    catch
    { 
      response.status(500).send("Internal server error");
    }
  }
}

export default new ArticleController();
