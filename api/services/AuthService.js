import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

class AuthService {

  generateToken(user) {
    const payload = user;
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: 1000 * 60 };

    return jwt.sign(payload, secret, options);
  }

  async login(email, password) {
    const { user } = await User.findbyEmail(email);

    if (user?.email === email) {
      const correctPassword = await bcrypt.compare(password, user.password);

      if (correctPassword) {
        delete user.password;

        return {
          error: null,
          user,
          token: this.generateToken(user)
        }
      } 
    }
    return {
      error: true
    };

  }
}

export default new AuthService();
