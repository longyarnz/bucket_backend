'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileoverview validateInput is a middleware that validates the username and password fields in the request object.
 * @exports validateItem
 */
exports.default = function (req, res, next) {
  /**
   * @description Destructures and extracts username and password from Request object
   */
  var name = req.body.name;

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
    } else {
      next();
    }
};
//# sourceMappingURL=validateItem.js.map