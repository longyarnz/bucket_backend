'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileoverview paginator is a middleware that extracts query parameters for pagination. 
 * The query is parsed and piped to the next callback.
 * @exports paginator
 */
exports.default = function (req, res, next) {
  var _req$query = req.query,
      page = _req$query.page,
      limit = _req$query.limit,
      q = _req$query.q;

  var start = 1,
      stop = 20,
      search = q ? q : '';
  if (page) {
    start = Number(page);
    if (isNaN(start) || start < 1) {
      start = 1;
    }
  }
  if (limit) {
    stop = Number(limit);
    if (isNaN(stop)) {
      stop = 20;
    }
    if (stop > 100) {
      stop = 100;
    }
  }
  start = --start * stop;
  req.search = search;
  req.start = start;
  req.stop = stop;
  next();
};
//# sourceMappingURL=paginator.js.map