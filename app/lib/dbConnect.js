import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const db = process.env.DB_NAME;

if (!MONGODB_URI) {
    throw new Error(
        'No MONGODB_URI variable found in .env'
    )
};

const options = {
  bufferCommands: false,
  dbName: db
}

export default async function dbConnect() {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    return await mongoose.connect(MONGODB_URI, options);
};


