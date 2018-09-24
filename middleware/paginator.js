/**
 * @fileoverview paginator is a middleware that extracts query parameters for pagination. 
 * The query is parsed and piped to the next callback.
 * @exports paginator
 */
export default (req, res, next) => {
  const { query: { page, limit, q } } = req;
  let start = 1, stop = 20, search = q ? q : '';
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