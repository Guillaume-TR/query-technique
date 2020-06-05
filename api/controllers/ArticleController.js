import Article from '../models/Article';
import { slugifyArticle } from '../utils/functions';


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
      let { title, content, shortContent } = request.body;
      
      title = title.trim();
      const slug = slugifyArticle(title);
      content = content.trim();
      shortContent = shortContent.trim();

      if (title && content && shortContent) {
        response.status(201).send(await Article.create(title, slug, content, shortContent));
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
      let { title, content, shortContent } = request.body;
      
      title = title.trim();
      const slug = slugifyArticle(title);
      content = content.trim();
      shortContent = shortContent.trim();

      const { article: articleFetch } = await Article.findbyId(articleId);
      
      if (articleFetch.id === Number(articleId)) {
        if (title && content && shortContent) {
          response.status(200).send(await Article.update(articleId, title, slug, content, shortContent));
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

      const { article: articleFetch } = await Article.findbyId(articleId);
      
      if (articleFetch.id === Number(articleId)) {
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
