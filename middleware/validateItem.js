/**
 * @description validateInput is a middleware that validates the username and password fields in the request object
 */
export default (req, res, next) => {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  const { name, done } = req.body;

  /**
   * @description Tests for data input
   */
  if (name === null || done === null || name === undefined || done === undefined) {
    res.status(403).json({ message: 'Invalid Inputs 1' });
  }

  /**
   * @description Tests for data validity
   */
  else if (typeof name !== 'string' || typeof done !== 'boolean') {
    res.status(403).json({ message: 'Invalid Inputs 2' });
  }

  else {
    next();
  }
}