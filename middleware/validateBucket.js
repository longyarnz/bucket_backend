/**
 * @fileoverview validateInput is a middleware that validates the name field in the request object.
 * @exports validateBucket
 */
export default (req, res, next) => {
  /**
   * @description Destructures and extracts name from the Request object
   */
  const { name } = req.body;

  /**
   * @description Tests for data input
   */
  if (!name) {
    res.status(401).json({ message: 'Invalid Inputs' });
  }

  /**
   * @description Tests for data validity
   */
  else if (typeof name !== 'string') {
    res.status(401).json({ message: 'Invalid Inputs' });
  }

  else {
    next();
  }
};