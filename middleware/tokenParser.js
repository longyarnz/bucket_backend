import JWT from 'jsonwebtoken';
import { SERVER_KEY } from '../api/auth';

/**
 * @description tokenParser is a middleware that extracts token bearer from the headers of a request. 
 * The token is parsed and piped to the next callback.
 */
export default (req, res, next) => {
  const token = req.headers['authorization'];
  JWT.verify(token, SERVER_KEY, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid User' });
    }
    else {
      req.userId = decoded.id;
      next();
    }
  });
};