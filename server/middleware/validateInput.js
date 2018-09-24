'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileoverview validateInput is a middleware that validates the username and password fields in the request object.
 * @exports validateInput
 */
exports.default = function (req, res, next) {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

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
    } else {
      next();
    }
};
//# sourceMappingURL=validateInput.js.map