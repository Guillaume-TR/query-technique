import Database from '../config/database';

class Article {

  async findAll() {
    const sql = 'SELECT * FROM article';

    const articlesFound = await Database.query(sql);

    return {
      error: null,
      count: articlesFound.length,
      data : articlesFound,
    }
  }

  async findbyId(articleId) {
    const sql    = 'SELECT * FROM article WHERE id = ?';
    const values = [articleId];

    const articleFound = await Database.query(sql, values);
    
    return {
      error: null,
      data : articleFound,
    }
  }

  async create(title, content, shortContent) {
    const sql    = 'INSERT INTO article(title, content, short_content) VALUE(?, ?, ?)';
    const values = [title, content, shortContent];

    const articleCreated = await Database.query(sql, values);

    return {
      error: null,
      newId: articleCreated.insertId
    }
  }

  async update(articleId, title, content, shortContent) {
    const sql    = 'UPDATE article SET title = ?, content = ?, short_content = ? WHERE id = ?';
    const values = [title, content, shortContent, articleId];

    const articleUpdated = await Database.query(sql, values);
    
    if (articleUpdated.changedRows === 1) {

      const { data } = await this.findbyId(articleId);

      return {
        error   : null,
        modified: articleUpdated.changedRows === 1,
        data
      };
    }
    return {
      error   : null,
      modified: articleUpdated.changedRows === 1
    };
  }

  async delete(articleId) {
    const sql    = 'DELETE FROM article WHERE id = ?';
    const values = [articleId];

    const articleDeleted = await Database.query(sql, values);

    return {
      error  : null,
      deleted: articleDeleted.affectedRows === 1
    };
  }
}

export default new Article();
