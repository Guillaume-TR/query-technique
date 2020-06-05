import Database from '../config/database';

class Article {

  async findAll() {
    const data = await Database
      .query(
        'SELECT * FROM article'
      );

    return {
      error: null,
      count: data.length,
      data,
    }
  }

  async findbyId(articleId) {
    const data = await Database
      .query(
        'SELECT * FROM article WHERE id = ?',
        [articleId],
      );

    return {
      error: null,
      data,
    }
  }

  async create(title, content, shortContent) {
    const data = await Database
      .query(
        'INSERT INTO article(title, content, short_content) VALUE(?, ?, ?)',
        [title, content, shortContent],
      );
    return {
      error: null,
      newId: data.insertId,
    }
  }
}

export default new Article();
