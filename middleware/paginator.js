/**
 * @description paginator is a middleware that extracts query parameters for pagination. 
 * The query is parsed and piped to the next callback.
 */
export default (req, res, next) => {
  const { query: { page, limit, s } } = req;
  let start = 1, stop = 20, search = s ? s : '';
  if (page) {
    start = Number(page);
    if (start === NaN || start < 1) {
      start = 1;
    }
  }
  if (limit) {
    stop = Number(limit);
    if (stop === NaN) {
      stop = 20;
    }
    if (stop > 100) {
      stop = 100
    }
  }
  start = --start * stop;
  req.search = search;
  req.start = start;
  req.stop = stop;
  console.log(search);
  next();
};