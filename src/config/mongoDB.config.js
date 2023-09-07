import mongoose from 'mongoose';
import { floweryLogger } from '../utils/logger.js';

export default function configureMongo() {
  const logger = floweryLogger();
  const mongo = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
  mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
      floweryLogger('info', `MongoDB connection successful to ${process.env.DB_NAME} database`);
  })
  .catch(err => {
      floweryLogger('error', `Cannot connect to MongoDB ${process.env.DB_NAME} database - ${err}`);        
  });
}