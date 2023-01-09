import {ApolloServer, gql} from "apollo-server";
import {ApolloServerPluginLandingPageLocalDefault} from "apollo-server-core";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "hiiii",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugin: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true })
    ]
})

server
    .listen()
    .then(() => {
        console.log('🚀 app running at http://localhost:4000')
    })
    .catch((err) => {
        console.log(err);
    });
    