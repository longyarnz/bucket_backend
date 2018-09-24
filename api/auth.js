import express from 'express';
import JWT from 'jsonwebtoken';
import UUID from 'uuid';
import { authenticateUser, createUser } from '../service/userService';
import validateInput from '../middleware/validateInput';
import logger from '../middleware/logger';
import tokenParser from '../middleware/tokenParser';

const router = express.Router();
let SERVER_KEY = UUID.v4();

/**
 * @description Registers a user into the Server
 * @param {string} route An API route to login
 * @param {middleware} validateInput - Callback for post method to routes
 * @returns {Response} JSON
 */
router.post('/create', validateInput, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUser({ username, password });

    if (user.isCreated) {
      res.redirect(307, '/auth/login');
    }

    else {
      res.status(401).json();
    }
  }
  catch (err) {
    logger.error(err);
    res.status(401).json();
  }
});

/**
 * @description Logs a user into the Server
 * @param {string} route An API route to login
 * @param {middleware} validateInput - Callback for post method to routes
 * @returns {Response} JSON
 */
router.post('/login', validateInput, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authenticateUser({ username, password });

    if (user.isValid) {
      /**
       * @description Creates JWT token from the username and password
       */
      JWT.sign({ id: user.id }, SERVER_KEY, (err, token) => {
        if (err) throw Error('Server is currently unavailable');

        const message = {
          text: 'User log-in successful',
          token
        };

        /**
         * @description Returns user token
         */
        res.status(200).json(message);
      });
    }

    else {
      const message = {
        text: 'Username and password does not match',
        token: false
      };

      res.status(200).json(message);
    }
  }

  catch (err) {
    logger.error(err);
    res.status(401).json(err.message);
  }
});

/**
 * @description Log a user out of the Server
 * @param {string} route An API route to login
 * @returns {Response} JSON
 */
router.get('/logout', tokenParser, (req, res) => {
  SERVER_KEY = UUID.v4();
  res.status(200).json(true);
});

export { SERVER_KEY };

export default router;