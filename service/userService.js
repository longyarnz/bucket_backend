/**
 * @fileoverview Methods for querying data from the users collection.
 * @exports { createUser, authenticateUser }
 */
import UserModel from '../models/user';
import logger from '../middleware/logger';

/**
 * @description Authenticates a user given a username and a password
 * @param {object} credentials - username and password object
 * @return {object} isValid and id
 */
const authenticateUser = async (credentials) => {
  try {
    const { username, password } = credentials;
    const user = await UserModel.findOne({ username, password });
    return user ? { isValid: true, id: user._id } : { isValid: false, id: null };
  }
  catch (err) {
    logger.error(err);
    
  }
};

/**
 * @description Creates a user given a username and a password
 * @param {object} credentials - username and password object
 * @return {object} isValid and id
 */
const createUser = async (credentials) => {
  try {
    const { username, password } = credentials;
    const user = await UserModel.create({ username, password });
    return typeof user === 'object' ? { isCreated: true, id: user._id } : { isCreated: false, id: null };
  }
  catch (err) {
    logger.error(err);
    
  }
};

export { createUser, authenticateUser };