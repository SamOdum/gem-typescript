import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Event {
    id: ID!
    title: String!
    description: String
    date: String
  }

  type Person {
    id: ID!
    name: String!
    age: Int
  }

  input EditEventInput {
    id: ID!, title: String!, description: String!, date: String!
  }

  input CreateEventInput {
    title: String!, description: String!, date: String
  }

  type Query {
    event(id: ID!): Event!
    events: [Event!]!
  }

  type Mutation {
    createEvent(createEventInput: CreateEventInput): Event!
    editEvent(editEventInput: EditEventInput): Event!
  }
  
`);

export default schema;
