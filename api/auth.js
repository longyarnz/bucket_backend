import express from 'express';
import JWT from 'jsonwebtoken';
import UUID from 'uuid';
import { authenticateUser, createUser } from '../service/userService';
import validateInput from '../middleware/validateInput';
import logger from '../middleware/logger';

const router = express.Router();
let SERVER_KEY = UUID.v4();

router.post('/create', validateInput, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUser({ username, password });

    if (user.isCreated) {
      res.redirect(307, '/auth/login');
    }

    else {
      res.status(403).json();
    }
  }
  catch (err) {
    logger.error(err);
    res.status(403).json();
  };
});

/**
 * @description Log a user into the Server
 * @param {string} route An API route to login
 * @param {API_ROUTES_CALLBACK} callback - Callback for post method to routes
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
          token,
          key: SERVER_KEY
        };

        /**
         * @description Returns user token
         */
        res.status(200).json(message);
      });
    }

    else {
      throw new Error('User does not exist');
    }
  }

  catch (err) {
    logger.error(err);
    res.status(403).send(err.message);
  }
});

router.get('/logout', (req, res) => {
  SERVER_KEY = UUID.v4();
  res.status(200).json();
});

export { SERVER_KEY };

export default router;