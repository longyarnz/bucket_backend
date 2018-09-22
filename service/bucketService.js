import BucketListModel from '../models/bucketlist';
import logger from '../middleware/logger';

/**
 * @description Gets all bucketlists that belongs to the user.
 * @param {string} userId - The ID of the logged-in user.
 * @return {array} bucketlists - An array of bucketlists.
 */
const getUserBucketlists = async (userId, search, start, stop) => {
  try {
    const bucketlists = await BucketListModel.find({created_by: userId, name: {$regex: search}}).skip(start).limit(stop);
    return bucketlists;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const createBucketlist = async (name, userId) => {
  try {
    let [{ id }] = await BucketListModel.find().select('id').sort('-date_created').limit(1);
    const bucketlist = await BucketListModel.create({ id: ++id, name, created_by: userId });
    return bucketlist;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const updateBucketlistById = async (bucketId, update) => {
  try {
    update = { $set: update };
    const bucketlist = await BucketListModel.findOneAndUpdate({ _id: bucketId }, update, { new: true });
    return bucketlist;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const deleteBucketlistById = async (bucketId) => {
  try {
    const remove = await BucketListModel.deleteOne({ _id: bucketId });
    return remove.ok === 1;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const getBucketlistById = async (bucketId, userId) => {
  try {
    const bucketlist = await BucketListModel.findOne({ _id: bucketId, created_by: userId });
    return bucketlist;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const getBucketItems = async (bucketId) => {
  try {
    let { items } = await BucketListModel.findOne({ _id: bucketId }).select('items');
    return items;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const getBucketItemById = async (bucketId, itemId) => {
  try {
    const { items } = await BucketListModel.findOne({ _id: bucketId }).select('items');
    return items.find(item => item._id.toString() === itemId);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Updates a bucketlist item for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const updateBucketItemById = async (bucketId, itemId, update) => {
  try {
    const bucketlist = await BucketListModel.findOneAndUpdate({ _id: bucketId, 'items._id': itemId }, {
      $set: { 'items.$': update }
    }, {new: true});
    return bucketlist.items.sort((a, b) => b.date_created - a.date_created)[0];
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Deletes a bucketlist item for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const deleteBucketItemById = async (bucketId, itemId) => {
  try {
    const bucketlist = await BucketListModel.findOneAndUpdate({_id: bucketId}, {$pull: {items: {_id: itemId}}}, {new: true});
    return !bucketlist.items.some(item => item._id.toString() === itemId);
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

/**
 * @description Creates a bucketlist for the user.
 * @param {{name: string, userId: string}} bucketlist - An object containing ID of logged-in user and the name of the new bucketlist.
 * @return {array} An array of bucketlists.
 */
const addItemToBucket = async (bucketId, item) => {
  try {
    let { items } = await BucketListModel.findOne({ _id: bucketId }).select('items');
    item.id = ++items.length;
    item = { $push: { items: item } };
    const bucketlist = await BucketListModel.findOneAndUpdate({ _id: bucketId }, item, { new: true });
    return bucketlist;
  }
  catch (err) {
    logger.error(err);
    console.error(err);
  }
};

export { getUserBucketlists, createBucketlist, getBucketlistById, updateBucketlistById, deleteBucketlistById, addItemToBucket, getBucketItems, getBucketItemById, updateBucketItemById, deleteBucketItemById };