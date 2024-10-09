import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import pupilSchema from './graphql/pupilSchema.js';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: pupilSchema,
    graphiql: true,  // Enable the GraphiQL interface for testing queries
}));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
