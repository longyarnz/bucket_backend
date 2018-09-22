import mongoose from '../connection/db';

const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  date_created: { type: Date, default: Date.now },
});

export default mongoose.model('User', User);