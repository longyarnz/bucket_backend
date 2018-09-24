'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tokenParser = require('../middleware/tokenParser');

var _tokenParser2 = _interopRequireDefault(_tokenParser);

var _logger = require('../middleware/logger');

var _logger2 = _interopRequireDefault(_logger);

var _paginator = require('../middleware/paginator');

var _paginator2 = _interopRequireDefault(_paginator);

var _validateBucket = require('../middleware/validateBucket');

var _validateBucket2 = _interopRequireDefault(_validateBucket);

var _validateItem = require('../middleware/validateItem');

var _validateItem2 = _interopRequireDefault(_validateItem);

var _bucketService = require('../service/bucketService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @fileoverview Bucketlists Routes and API endpoints.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @exports router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var router = _express2.default.Router();

/**
 * @description Gets all user bucketlists
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} paginator - Extracts query parameters
 * @returns {Response} JSON
 */
router.get('/', _tokenParser2.default, _paginator2.default, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userId, search, start, stop, bucketlists;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userId = req.userId, search = req.search, start = req.start, stop = req.stop;
            _context.next = 4;
            return (0, _bucketService.getUserBucketlists)(userId, search, start, stop);

          case 4:
            bucketlists = _context.sent;

            res.status(200).json(bucketlists);
            _context.next = 11;
            break;

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

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/**
 * @description Creates a single bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateBucket - Validates input data
 * @returns {object} A newly created bucketlist object
 */
router.post('/', _tokenParser2.default, _validateBucket2.default, function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userId, name, bucketlist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            userId = req.userId, name = req.body.name;
            _context2.next = 4;
            return (0, _bucketService.createBucketlist)(name, userId);

          case 4:
            bucketlist = _context2.sent;

            // eslint-disable-next-line
            console.log(bucketlist, 1);
            res.status(200).json(bucketlist);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            _logger2.default.error(_context2.t0);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/**
 * @description Gets a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId', _tokenParser2.default, function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var userId, bucketId, bucketlist;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userId = req.userId, bucketId = req.params.bucketId;
            _context3.next = 4;
            return (0, _bucketService.getBucketlistById)(bucketId, userId);

          case 4:
            bucketlist = _context3.sent;

            res.status(200).json(bucketlist);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](0);

            _logger2.default.error(_context3.t0);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

/**
 * @description Updates a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.put('/:bucketId', _tokenParser2.default, function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var body, bucketId, bucketlist;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            body = req.body, bucketId = req.params.bucketId;
            _context4.next = 4;
            return (0, _bucketService.updateBucketlistById)(bucketId, body);

          case 4:
            bucketlist = _context4.sent;

            res.status(200).json(bucketlist);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4['catch'](0);

            _logger2.default.error(_context4.t0);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

/**
 * @description Deletes a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.delete('/:bucketId', _tokenParser2.default, function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var bucketId, removed;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            bucketId = req.params.bucketId;
            _context5.next = 4;
            return (0, _bucketService.deleteBucketlistById)(bucketId);

          case 4:
            removed = _context5.sent;

            res.status(200).json(removed);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5['catch'](0);

            _logger2.default.error(_context5.t0);

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

/**
 * @description Gets all items in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/', _tokenParser2.default, function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var bucketId, bucketlist;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            bucketId = req.params.bucketId;
            _context6.next = 4;
            return (0, _bucketService.getBucketItems)(bucketId);

          case 4:
            bucketlist = _context6.sent;

            res.status(200).json(bucketlist);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6['catch'](0);

            _logger2.default.error(_context6.t0);

          case 11:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/**
 * @description Gets an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/:itemId', _tokenParser2.default, function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$params, bucketId, itemId, bucketlist;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _req$params = req.params, bucketId = _req$params.bucketId, itemId = _req$params.itemId;
            _context7.next = 4;
            return (0, _bucketService.getBucketItemById)(bucketId, itemId);

          case 4:
            bucketlist = _context7.sent;

            res.status(200).json(bucketlist);
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7['catch'](0);

            _logger2.default.error(_context7.t0);

          case 11:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 8]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

/**
 * @description Updates an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateItem - Validates input data
 * @returns {object} A bucketlist object
 */
router.put('/:bucketId/items/:itemId', _tokenParser2.default, _validateItem2.default, function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var body, _req$params2, bucketId, itemId, bucketlist;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            body = req.body, _req$params2 = req.params, bucketId = _req$params2.bucketId, itemId = _req$params2.itemId;
            _context8.next = 4;
            return (0, _bucketService.updateBucketItemById)(bucketId, itemId, body);

          case 4:
            bucketlist = _context8.sent;

            res.status(200).json(bucketlist);
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8['catch'](0);

            _logger2.default.error(_context8.t0);

          case 11:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 8]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

/**
 * @description Deletes an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.delete('/:bucketId/items/:itemId', _tokenParser2.default, function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$params3, bucketId, itemId, bucketlist;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _req$params3 = req.params, bucketId = _req$params3.bucketId, itemId = _req$params3.itemId;
            _context9.next = 4;
            return (0, _bucketService.deleteBucketItemById)(bucketId, itemId);

          case 4:
            bucketlist = _context9.sent;

            res.status(200).json(bucketlist);
            _context9.next = 11;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9['catch'](0);

            _logger2.default.error(_context9.t0);

          case 11:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 8]]);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

/**
 * @description Gets all items in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/', _tokenParser2.default, function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var bucketId, bucketlist;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            bucketId = req.params.bucketId;
            _context10.next = 4;
            return (0, _bucketService.getBucketItems)(bucketId);

          case 4:
            bucketlist = _context10.sent;

            res.status(200).json(bucketlist);
            _context10.next = 11;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10['catch'](0);

            _logger2.default.error(_context10.t0);

          case 11:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined, [[0, 8]]);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

/**
 * @description Adds a single item to a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateBucket - Validates input data
 * @returns {object} A bucketlist object
 */
router.post('/:bucketId/items/', _tokenParser2.default, _validateBucket2.default, function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var body, bucketId, bucketlist;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            body = req.body, bucketId = req.params.bucketId;
            _context11.next = 4;
            return (0, _bucketService.addItemToBucket)(bucketId, body);

          case 4:
            bucketlist = _context11.sent;

            res.status(200).json(bucketlist);
            _context11.next = 11;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11['catch'](0);

            _logger2.default.error(_context11.t0);

          case 11:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined, [[0, 8]]);
  }));

  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

exports.default = router;
//# sourceMappingURL=bucketlists.js.map