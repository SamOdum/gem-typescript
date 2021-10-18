import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';

import startDb from './database/db';
import schema from './api/schema/events';
import resolvers from './api/resolvers/events';
import Event from './models/event';

const PORT: string = process.env.PORT || '4000';

const app: Application = express();

startDb().catch((err) => {
  throw new Error(err);
});

const context = () => ({ Event });

app.use(
  '/graphql',
  // This 'magic' here mitigates the issue of Promise returned
  // in function argument where a void return was expected.
  (req, res, next) => {
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      context,
    })(req, res).catch((err) => next(err));
  },
);

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
