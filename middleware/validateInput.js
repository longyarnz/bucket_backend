/**
 * @description validateInput is a middleware that validates the username and password fields in the request object
 */
export default (req, res, next) => {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  const { username, password } = req.body;

  /**
   * @description Tests for data input
   */
  if (!username || !password) {
    res.status(401).json({ message: 'Invalid Inputs' });
  }

  /**
   * @description Tests for data validity
   */
  else if (typeof username !== 'string' || typeof password !== 'string') {
    res.status(401).json({ message: 'Invalid Inputs' });
  }

  else {
    next();
  }
}