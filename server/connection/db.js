'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Creates a connection to the MongoDB server
 */
/**
 * @fileoverview MongoDB Database configuration.
 * @exports mongoose
 */
_mongoose2.default.Promise = _bluebird2.default;
// mongodb://127.0.0.1:27017/bucketdb
// mongodb+srv://lekan:forntenddeveloper@cluster0-dydyx.mongodb.net/bucket?retryWrites=true
_mongoose2.default.connect('mongodb+srv://lekan:forntenddeveloper@cluster0-dydyx.mongodb.net/bucket?retryWrites=true', { useNewUrlParser: true });

exports.default = _mongoose2.default;
//# sourceMappingURL=db.js.map