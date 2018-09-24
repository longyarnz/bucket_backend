'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../api/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview tokenParser is a middleware that extracts token bearer from the headers of a request. 
 * The token is parsed and piped to the next callback.
 * @exports tokenParser
 */
exports.default = function (req, res, next) {
  var token = req.headers['authorization'];
  _jsonwebtoken2.default.verify(token, _auth.SERVER_KEY, function (err, decoded) {
    if (err) {
      res.status(401).json({ message: 'Invalid User' });
    } else {
      req.userId = decoded.id;
      next();
    }
  });
};
//# sourceMappingURL=tokenParser.js.map