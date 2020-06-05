import Article from '../models/Article';


class ArticleController {

  async getAll(request, response) {
    try {
      response.status(200).send(await Article.findAll());
    }
    catch (error) {
      response.status(500).send("Internal server error");
    }
  }

  async getOne(request, response) {
    try {
      const { id: articleId } = request.params;
      
      response.status(200).send(await Article.findbyId(articleId));
    }
    catch (error) {
      response.status(500).send("Internal server error");
    }
  }

  async add(request, response) {
    try {
      const {
        title,
        content,
        shortContent
      } = request.body;
      
      if (title &&
          content &&
          shortContent) {

        response.status(201).send(await Article.create(title, content, shortContent));
      }
      else {
        response.status(400).send("Bad request");
      }
    }
    catch (error) {
      response.status(500).send("Internal server error");
    }
  }
}

export default new ArticleController();
