import express from 'express';
import tokenParser from '../middleware/tokenParser';
import logger from '../middleware/logger';
import paginator from '../middleware/paginator';
import validateBucket from '../middleware/validateBucket';
import validateItem from '../middleware/validateItem';
import { 
  getUserBucketlists, createBucketlist, getBucketlistById, 
  updateBucketlistById, deleteBucketlistById, addItemToBucket, 
  getBucketItems, getBucketItemById, updateBucketItemById, deleteBucketItemById
} from '../service/bucketService';
const router = express.Router();

/**
 * @description Gets all user bucketlists
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} paginator - Extracts query parameters
 * @returns {Response} JSON
 */
router.get('/', tokenParser, paginator, async (req, res) => {
  try {
    const {userId, search, start, stop} = req;
    const bucketlists = await getUserBucketlists(userId, search, start, stop);
    res.status(200).json(bucketlists);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Creates a single bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateBucket - Validates input data
 * @returns {object} A newly created bucketlist object
 */
router.post('/', tokenParser, validateBucket, async (req, res) => {
  try {
    const { userId, body: { name } } = req;
    const bucketlist = await createBucketlist(name, userId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Gets a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId', tokenParser, async (req, res) => {
  try {
    const { userId, params: { bucketId } } = req;
    const bucketlist = await getBucketlistById(bucketId, userId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Updates a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.put('/:bucketId', tokenParser, async (req, res) => {
  try {
    const { body, params: { bucketId } } = req;
    const bucketlist = await updateBucketlistById(bucketId, body);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Deletes a single user bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.delete('/:bucketId', tokenParser, async (req, res) => {
  try {
    const { params: { bucketId } } = req;
    const removed = await deleteBucketlistById(bucketId);
    res.status(200).json(removed);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Gets all items in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/', tokenParser, async (req, res) => {
  try {
    const { params: {bucketId} } = req;
    const bucketlist = await getBucketItems(bucketId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Gets an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/:itemId', tokenParser, async (req, res) => {
  try {
    const { params: {bucketId, itemId} } = req;
    const bucketlist = await getBucketItemById(bucketId, itemId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Updates an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateItem - Validates input data
 * @returns {object} A bucketlist object
 */
router.put('/:bucketId/items/:itemId', tokenParser, validateItem, async (req, res) => {
  try {
    const { body, params: {bucketId, itemId} } = req;
    const bucketlist = await updateBucketItemById(bucketId, itemId, body);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Deletes an item in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.delete('/:bucketId/items/:itemId', tokenParser, async (req, res) => {
  try {
    const { params: {bucketId, itemId} } = req;
    const bucketlist = await deleteBucketItemById(bucketId, itemId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Gets all items in a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @returns {object} A bucketlist object
 */
router.get('/:bucketId/items/', tokenParser, async (req, res) => {
  try {
    const { params: {bucketId} } = req;
    const bucketlist = await getBucketItems(bucketId);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

/**
 * @description Adds a single item to a bucketlist
 * @param {middleware} tokenParser - Extracts userId from token
 * @param {middleware} validateBucket - Validates input data
 * @returns {object} A bucketlist object
 */
router.post('/:bucketId/items/', tokenParser, validateBucket, async (req, res) => {
  try {
    const { body, params: {bucketId} } = req;
    const bucketlist = await addItemToBucket(bucketId, body);
    res.status(200).json(bucketlist);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
});

export default router;