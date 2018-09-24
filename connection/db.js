import mongoose from 'mongoose';

/**
 * @description Creates a connection to the MongoDB server
 */
mongoose.connect('mongodb://127.0.0.1:27017/bucketdb', { useNewUrlParser: true });

export default mongoose;