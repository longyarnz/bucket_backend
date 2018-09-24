'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERVER_KEY = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

require('babel-polyfill');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _userService = require('../service/userService');

var _validateInput = require('../middleware/validateInput');

var _validateInput2 = _interopRequireDefault(_validateInput);

var _logger = require('../middleware/logger');

var _logger2 = _interopRequireDefault(_logger);

var _tokenParser = require('../middleware/tokenParser');

var _tokenParser2 = _interopRequireDefault(_tokenParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @fileoverview Authentication Route for server connection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @exports router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var router = _express2.default.Router();
var SERVER_KEY = _uuid2.default.v4();

/**
 * @description Registers a user into the Server
 * @param {string} route An API route to login
 * @param {middleware} validateInput - Callback for post method to routes
 * @returns {Response} JSON
 */
router.post('/create', _validateInput2.default, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.next = 4;
            return (0, _userService.createUser)({ username: username, password: password });

          case 4:
            user = _context.sent;


            if (user.isCreated) {
              res.redirect(307, '/api/v1/auth/login');
            } else {
              res.status(401).json();
            }
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            _logger2.default.error(_context.t0);
            res.status(401).json();

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/**
 * @description Logs a user into the Server
 * @param {string} route An API route to login
 * @param {middleware} validateInput - Callback for post method to routes
 * @returns {Response} JSON
 */
router.post('/login', _validateInput2.default, function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, username, password, user, message;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _userService.authenticateUser)({ username: username, password: password });

          case 4:
            user = _context2.sent;


            if (user.isValid) {
              /**
               * @description Creates JWT token from the username and password
               */
              _jsonwebtoken2.default.sign({ id: user.id }, SERVER_KEY, function (err, token) {
                if (err) throw Error('Server is currently unavailable');

                var message = {
                  text: 'User log-in successful',
                  token: token
                };

                /**
                 * @description Returns user token
                 */
                res.status(200).json(message);
              });
            } else {
              message = {
                text: 'Username and password does not match',
                token: false
              };


              res.status(200).json(message);
            }
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            _logger2.default.error(_context2.t0);
            res.status(401).json(_context2.t0.message);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/**
 * @description Log a user out of the Server
 * @param {string} route An API route to login
 * @returns {Response} JSON
 */
router.get('/logout', _tokenParser2.default, function (req, res) {
  exports.SERVER_KEY = SERVER_KEY = _uuid2.default.v4();
  res.header['authorization'] = '';
  res.status(200).json(true);
});

exports.SERVER_KEY = SERVER_KEY;
exports.default = router;
//# sourceMappingURL=auth.js.map