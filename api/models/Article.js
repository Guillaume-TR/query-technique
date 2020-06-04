import Database from '../config/database';

class Article {

  async findAll() {
    const data = await Database.query('SELECT * FROM artice');

    return {
      error: null,
      count: data.length,
      data,
    }
  }
}

export default new Article();
