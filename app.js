import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Auth from './api/auth';
import BucketLists from './api/bucketlists';

/**
 * @constant {number} PORT
 */
const PORT = process.env.PORT || 3001;

/**
 * @description Creates an express application
 * @constant {object}
 */
const app = express();

/**
 * @description Add middleware for parsing request body to text, json, url object or form data
 * @function EXPRESS_USE_MIDDLEWARE
 * @param {middleware} body-parser A middleware for parsing request body to functional data type
 */
app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * @description Create server Routes
 */
app.use('/api/v1/auth', Auth);
app.use('/api/v1/bucketlists', BucketLists);

/**
 * @description Test server connection
 */
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const response = JSON.stringify({
    status: 200,
    message: 'Server Status - OK',
  });
  res.send(response);
});

/**
 * @description Let express application listen on dedicated PORT
 */
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

export default app;