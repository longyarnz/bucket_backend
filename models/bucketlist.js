import mongoose from '../connection/db';

const Schema = mongoose.Schema;

/**
 * @description Creates a schema for the database
 */
const BucketList = new Schema({
  id: { type: Number, default: 1 },
  name: String,
  items: [
    {
      id: { type: Number, default: 1 },
      name: String,
      date_created: { type: Date, default: Date.now },
      date_modified: { type: Date, default: Date.now },
      done: { type: Boolean, default: false }
    }
  ],
  date_created: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  created_by: { type: String, ref: 'User' }
});

export default mongoose.model('BucketList', BucketList);