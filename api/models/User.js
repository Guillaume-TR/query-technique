import Database from '../config/database';

class User {

  async findbyEmail(userEmail) {
    const sql = 'SELECT * FROM user WHERE email = ?';
    const values = [userEmail];

    const userFound = await Database.query(sql, values);
    
    return {
      error: null,
      user: {
        id: userFound[0]?.id,
        email: userFound[0]?.email,
        password: userFound[0]?.password
      }
    }
  }
}

export default new User();
