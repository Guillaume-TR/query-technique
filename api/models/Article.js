import Database from '../config/database';
import { dateFormat } from '../utils/functions';

class Article {

  async findAll() {
    const sql = 'SELECT * FROM article ORDER BY created_at DESC';

    const articlesFound = await Database.query(sql);

    const articles = articlesFound.map((article) => {

      return {
        id: article.id,
        slug: article.slug,
        title: article.title,
        content: article.content,
        shortContent: article.short_content,
        date: dateFormat(article.created_at)
      }
    })

    return {
      error: null,
      articlesNumber: articlesFound.length,
      articles,
    }
  }

  async findbyId(articleId) {
    const sql    = 'SELECT * FROM article WHERE id = ?';
    const values = [articleId];

    const articleFound = await Database.query(sql, values);

    return {
      error: null,
      article : { 
        id: articleFound[0]?.id,
        slug: articleFound[0]?.slug,
        title: articleFound[0]?.title,
        content: articleFound[0]?.content,
        date: dateFormat(articleFound[0]?.created_at)
      },
    }
  }

  async create(title, slug, content, shortContent) {
    const sql    = 'INSERT INTO article(title, slug, content, short_content) VALUE(?, ?, ?, ?)';
    const values = [title, slug, content, shortContent];

    const articleCreated = await Database.query(sql, values);

    return {
      error: null,
      newId: articleCreated.insertId
    }
  }

  async update(articleId, title, slug, content, shortContent) {
    const sql    = 'UPDATE article SET title = ?, slug = ?, content = ?, short_content = ? WHERE id = ?';
    const values = [title, slug, content, shortContent, articleId];

    const articleUpdated = await Database.query(sql, values);
    
    if (articleUpdated.changedRows === 1) {

      const { article } = await this.findbyId(articleId);

      return {
        error   : null,
        modified: articleUpdated.changedRows === 1,
        article
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
