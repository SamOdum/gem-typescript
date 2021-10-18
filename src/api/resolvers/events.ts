/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'mongodb';
import mongoose, { Model } from 'mongoose';

interface EditEventType {
  editEventInput: {
    id: Record<string, string | number>;
    title: string;
    description: string;
    date: string;
  };
}

interface CreateEventType {
  createEventInput: { title: string; description: string; date: string };
}

interface ModelType {
  T: Record<string, unknown>;
}

interface ContextType {
  context: () => PromiseLike<{
    Event: Model<unknown, ModelType, ModelType, ModelType>;
  }>;
}

const resolvers = {
  event: async ({ id }: Record<string, string | number>, context: ContextType['context']): Promise<Document | null> => {
    const { Event } = await context();
    return Event.findOne({ id });
  },

  events: async (_: unknown, context: ContextType['context']): Promise<Document[]> => {
    const { Event } = await context();
    return Event.find();
  },

  createEvent: async (
    { createEventInput }: CreateEventType,
    context: ContextType['context'],
  ): Promise<Document | null> => {
    const { title, description, date } = createEventInput;
    const { Event } = await context();

    try {
      const newEvent = new Event({
        id: new mongoose.Types.ObjectId(),
        title,
        description,
        date,
      });

      const savedEvent = await newEvent.save();
      return savedEvent;
    } catch (err: any) {
      throw new Error(err);
    }
  },

  editEvent: async ({ editEventInput }: EditEventType, context: ContextType['context']): Promise<Document | null> => {
    const { id, title, description, date } = editEventInput;
    const { Event } = await context();

    try {
      const updateValues = { $set: { title, description, date } };
      const newEvent = await Event.findOneAndUpdate({ id }, updateValues, { new: true });
      const savedEvent = await newEvent?.save();
      return savedEvent || null;
    } catch (err: any) {
      throw new Error(err);
    }
  },
};

export default resolvers;
