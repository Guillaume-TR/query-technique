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
}

export default new ArticleController();
