'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBucketItemById = exports.updateBucketItemById = exports.getBucketItemById = exports.getBucketItems = exports.addItemToBucket = exports.deleteBucketlistById = exports.updateBucketlistById = exports.getBucketlistById = exports.createBucketlist = exports.getUserBucketlists = undefined;

var _bucketlist = require('../models/bucketlist');

var _bucketlist2 = _interopRequireDefault(_bucketlist);

var _logger = require('../middleware/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @fileoverview Methods for querying data from the bucketlists collection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @exports { getUserBucketlists, createBucketlist, getBucketlistById, updateBucketlistById, deleteBucketlistById, addItemToBucket, getBucketItems, getBucketItemById, updateBucketItemById, deleteBucketItemById }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


/**
 * @description Gets all bucketlists that belongs to the user.
 * @param {string} userId - The ID of the logged-in user.
 * @return {array} bucketlists - An array of bucketlists.
 */
var getUserBucketlists = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId, search, start, stop) {
    var bucketlists;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _bucketlist2.default.find({ created_by: userId, name: { $regex: search } }).skip(start).limit(stop);

          case 3:
            bucketlists = _context.sent;
            return _context.abrupt('return', bucketlists);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            _logger2.default.error(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function getUserBucketlists(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
var createBucketlist = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, userId) {
    var id, lastBucketlist, bucketlist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = 0;
            _context2.next = 4;
            return _bucketlist2.default.find().select('id').sort('-date_created').limit(1);

          case 4:
            lastBucketlist = _context2.sent;

            if (!Array.isArray(lastBucketlist)) id = lastBucketlist.id;
            _context2.next = 8;
            return _bucketlist2.default.create({ id: ++id, name: name, created_by: userId });

          case 8:
            bucketlist = _context2.sent;
            return _context2.abrupt('return', bucketlist);

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2['catch'](0);

            _logger2.default.error(_context2.t0);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 12]]);
  }));

  return function createBucketlist(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @description Updates a bucketlist for the user.
 * @param {string} bucketId - A unique bucketlist ID.
 * @param {object} update - An object to update the bucketlist.
 * @return {object} A bucketlist object.
 */
var updateBucketlistById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bucketId, update) {
    var bucketlist;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            update = { $set: update };
            _context3.next = 4;
            return _bucketlist2.default.findOneAndUpdate({ _id: bucketId }, update, { new: true });

          case 4:
            bucketlist = _context3.sent;
            return _context3.abrupt('return', bucketlist);

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

  return function updateBucketlistById(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @description Deletes a bucketlist for the user.
 * @param {string} bucketId - A unique bucketlist ID.
 * @return {boolean} A boolean value.
 */
var deleteBucketlistById = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(bucketId) {
    var remove;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _bucketlist2.default.deleteOne({ _id: bucketId });

          case 3:
            remove = _context4.sent;
            return _context4.abrupt('return', remove.ok === 1);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            _logger2.default.error(_context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 7]]);
  }));

  return function deleteBucketlistById(_x9) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * @description Gets a bucketlist for the user by the ID.
 * @param {string} bucketId - A unique bucketlist ID.
 * @param {string} update - A unique user ID.
 * @return {object} A bucketlists object.
 */
var getBucketlistById = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(bucketId, userId) {
    var bucketlist;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _bucketlist2.default.findOne({ _id: bucketId, created_by: userId });

          case 3:
            bucketlist = _context5.sent;
            return _context5.abrupt('return', bucketlist);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](0);

            _logger2.default.error(_context5.t0);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 7]]);
  }));

  return function getBucketlistById(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * @description Gets all items in a bucketlist.
 * @param {string} bucketId - A unique bucketlist ID.
 * @return {array} An array of bucketlists.
 */
var getBucketItems = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(bucketId) {
    var _ref7, items;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _bucketlist2.default.findOne({ _id: bucketId }).select('items');

          case 3:
            _ref7 = _context6.sent;
            items = _ref7.items;
            return _context6.abrupt('return', items);

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

  return function getBucketItems(_x12) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @description Gets a single item in a bucketlist.
 * @param {string} bucketId - A unique bucketlist ID.
 * @param {string} itemId - A unique item ID.
 * @return {array} An array of bucketlists.
 */
var getBucketItemById = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(bucketId, itemId) {
    var _ref9, items;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _bucketlist2.default.findOne({ _id: bucketId }).select('items');

          case 3:
            _ref9 = _context7.sent;
            items = _ref9.items;
            return _context7.abrupt('return', items.find(function (item) {
              return item._id.toString() === itemId;
            }));

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

  return function getBucketItemById(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * @description Updates a bucketlist item for the user.
 * @param {string} bucketId - A unique bucketlist ID.
 * @param {string} itemId - A unique item ID.
 * @param {object} update - An object to update the bucketlist.
 * @return {array} An array of bucketlists.
 */
var updateBucketItemById = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(bucketId, itemId, update) {
    var bucketlist;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _bucketlist2.default.findOneAndUpdate({ _id: bucketId, 'items._id': itemId }, {
              $set: { 'items.$': update }
            }, { new: true });

          case 3:
            bucketlist = _context8.sent;
            return _context8.abrupt('return', bucketlist.items.sort(function (a, b) {
              return b.date_created - a.date_created;
            })[0]);

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8['catch'](0);

            _logger2.default.error(_context8.t0);

          case 10:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 7]]);
  }));

  return function updateBucketItemById(_x15, _x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * @description Deletes a bucketlist item for the user.
 * @param {string} bucketId - A unique bucketlist ID.
 * @param {string} itemId - A unique item ID.
 * @return {boolean} true or false.
 */
var deleteBucketItemById = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(bucketId, itemId) {
    var bucketlist;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _bucketlist2.default.findOneAndUpdate({ _id: bucketId }, { $pull: { items: { _id: itemId } } }, { new: true });

          case 3:
            bucketlist = _context9.sent;
            return _context9.abrupt('return', !bucketlist.items.some(function (item) {
              return item._id.toString() === itemId;
            }));

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9['catch'](0);

            _logger2.default.error(_context9.t0);

          case 10:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 7]]);
  }));

  return function deleteBucketItemById(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * @description Adds an item to a bucketlist.
 * @param {{name: string, string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {object} An item object.
 */
var addItemToBucket = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(bucketId, item) {
    var _ref13, items, bucketlist;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _bucketlist2.default.findOne({ _id: bucketId }).select('items');

          case 3:
            _ref13 = _context10.sent;
            items = _ref13.items;

            item.id = ++items.length;
            item = { $push: { items: item } };
            _context10.next = 9;
            return _bucketlist2.default.findOneAndUpdate({ _id: bucketId }, item, { new: true });

          case 9:
            bucketlist = _context10.sent;
            return _context10.abrupt('return', bucketlist.items.sort(function (a, b) {
              return b.date_created - a.date_created;
            })[0]);

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10['catch'](0);

            _logger2.default.error(_context10.t0);

          case 16:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined, [[0, 13]]);
  }));

  return function addItemToBucket(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getUserBucketlists = getUserBucketlists;
exports.createBucketlist = createBucketlist;
exports.getBucketlistById = getBucketlistById;
exports.updateBucketlistById = updateBucketlistById;
exports.deleteBucketlistById = deleteBucketlistById;
exports.addItemToBucket = addItemToBucket;
exports.getBucketItems = getBucketItems;
exports.getBucketItemById = getBucketItemById;
exports.updateBucketItemById = updateBucketItemById;
exports.deleteBucketItemById = deleteBucketItemById;
//# sourceMappingURL=bucketService.js.map