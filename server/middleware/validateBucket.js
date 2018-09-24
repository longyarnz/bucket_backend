'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileoverview validateInput is a middleware that validates the name field in the request object.
 * @exports validateBucket
 */
exports.default = function (req, res, next) {
  /**
   * @description Destructures and extracts name from the Request object
   */
  var name = req.body.name;

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
    } else {
      next();
    }
};
//# sourceMappingURL=validateBucket.js.map