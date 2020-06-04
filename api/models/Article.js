import Database from '../config/database';

class Article {

  async findAll() {
    const data = await Database.query('SELECT * FROM article');

    return {
      error: null,
      count: data.length,
      data,
    }
  }

  async findbyId(articleId) {
    const data = await Database.query('SELECT * FROM article WHERE id = ?', [articleId]);

    return {
      error: null,
      data,
    }
  }
}

export default new Article();
