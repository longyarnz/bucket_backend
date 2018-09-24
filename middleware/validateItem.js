/**
 * @fileoverview validateInput is a middleware that validates the username and password fields in the request object.
 * @exports validateItem
 */
export default (req, res, next) => {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  const { name } = req.body;

  /**
   * @description Tests for data input
   */
  if (name === null || name === undefined) {
    res.status(401).json({ message: 'Invalid Inputs 1' });
  }

  /**
   * @description Tests for data validity
   */
  else if (typeof name !== 'string') {
    res.status(401).json({ message: 'Invalid Inputs 2' });
  }

  else {
    next();
  }
};