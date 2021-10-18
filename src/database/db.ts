import mongoose from 'mongoose';

const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;

const startDb = async (): Promise<void> => {
  const mongoDbURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.izyhf.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoDbURI);
    // eslint-disable-next-line no-console
    console.log(`🚀[database]: Connected to the ${MONGO_DATABASE?.toUpperCase()} database`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};

export default startDb;
