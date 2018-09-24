'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../connection/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _db2.default.Schema; /**
                                   * @fileoverview Creates a schema for the database.
                                   * @exports mongoose.model
                                   */


var User = new Schema({
  username: String,
  password: String,
  date_created: { type: Date, default: Date.now }
});

exports.default = _db2.default.model('User', User);
//# sourceMappingURL=user.js.map