import mongoose from '../connection/db';

const Schema = mongoose.Schema;

const BucketList = new Schema({
  id: { type: Number, default: 0 },
  name: String,
  items: [
    {
      id: { type: Number, default: 0 },
      name: String,
      date_created: { type: Date, default: Date.now },
      date_modified: { type: Date, default: Date.now },
      done: Boolean
    }
  ],
  date_created: { type: Date, default: Date.now },
  date_modified: { type: Date, default: Date.now },
  created_by: { type: String, ref: 'User' }
});

export default mongoose.model('BucketList', BucketList);

// id,
//   name,
//   items: [
//     {
//       id,
//       name,
//       done
//     }
//   ],
//   created_by