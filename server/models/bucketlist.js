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


var BucketList = new Schema({
  id: { type: Number, default: 1 },
  name: String,
  items: [{
    id: { type: Number, default: 1 },
    name: String,
    date_created: { type: Date, default: Date.now },
    date_modified: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
  }],
  date_created: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  created_by: { type: String, ref: 'User' }
});

exports.default = _db2.default.model('BucketList', BucketList);
//# sourceMappingURL=bucketlist.js.map