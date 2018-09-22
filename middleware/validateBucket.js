/**
 * @description validateInput is a middleware that validates the username and password fields in the request object
 */
export default (req, res, next) => {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  const { name } = req.body;

  /**
   * @description Tests for data input
   */
  if (!name) {
    res.status(403).json({ message: 'Invalid Inputs' });
  }

  /**
   * @description Tests for data validity
   */
  else if (typeof name !== 'string') {
    res.status(403).json({ message: 'Invalid Inputs' });
  }

  else {
    next();
  }
}