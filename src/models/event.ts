import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  date: String,
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
