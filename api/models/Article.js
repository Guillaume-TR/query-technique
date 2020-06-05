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

  async update(articleId, title, content, shortContent) {
    const articleUpdated = await Database
      .query(
        'UPDATE article SET title = ?, content = ?, short_content = ? WHERE id = ?',
        [title, content, shortContent, articleId],
      );

      const { data } = await this.findbyId(articleId);

      return {
        error: null,
        modified: articleUpdated.changedRows === 1,
        data,
      };
  }
}

export default new Article();
