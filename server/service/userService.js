'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateUser = exports.createUser = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _logger = require('../middleware/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @fileoverview Methods for querying data from the users collection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @exports { createUser, authenticateUser }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


/**
 * @description Authenticates a user given a username and a password
 * @param {object} credentials - username and password object
 * @return {object} isValid and id
 */
var authenticateUser = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
    var username, password, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            username = credentials.username, password = credentials.password;
            _context.next = 4;
            return _user2.default.findOne({ username: username, password: password });

          case 4:
            user = _context.sent;
            return _context.abrupt('return', user ? { isValid: true, id: user._id } : { isValid: false, id: null });

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            _logger2.default.error(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function authenticateUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Creates a user given a username and a password
 * @param {object} credentials - username and password object
 * @return {object} isValid and id
 */
var createUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(credentials) {
    var username, password, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            username = credentials.username, password = credentials.password;
            _context2.next = 4;
            return _user2.default.create({ username: username, password: password });

          case 4:
            user = _context2.sent;
            return _context2.abrupt('return', (typeof user === 'undefined' ? 'undefined' : _typeof(user)) === 'object' ? { isCreated: true, id: user._id } : { isCreated: false, id: null });

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            _logger2.default.error(_context2.t0);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 8]]);
  }));

  return function createUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUser = createUser;
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=userService.js.map