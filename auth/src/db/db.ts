import mongoose from 'mongoose';

const uri = "mongodb://admin:password@mongo:27017";
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connect ion error:', error);
  })

db.once('open', () => {
    console.log("connected to the db successfully.")
})

export default db;