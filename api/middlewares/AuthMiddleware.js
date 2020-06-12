import jwt from 'jsonwebtoken';
import User from '../models/User';

const getToken = (request) => {
  if (request.headers.authorization && request.headers.authorization.split(' ')[0] === 'Token') {
    return request.headers.authorization.split(' ')[1];
  }
};

export const authCheck = (request, response, next) => {
  const token = getToken(request);
  const secret = process.env.SECRET_KEY;

  jwt.verify(token, secret, async (error, decoded) => {
    if (error) {
      response.status(401).send("Token dosen't exit or invalid");
    }
    else {
      try
      {
        const { user: userFound } = await User.findbyEmail(decoded.email);

        if (userFound.email === decoded.email) {
          next()
        }
        else {
          response.status(401).send("Token is no longer valid");
        }
      }
      catch
      {
        response.status(401).send("Token is no longer valid");
      }
    }
  });
};
