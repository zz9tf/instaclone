import {ApolloServer, gql} from "apollo-server";
import {ApolloServerPluginLandingPageLocalDefault} from "apollo-server-core";

// Create your defination first
const typeDefs = gql`
    scalar DateTime
    type Movie {
        id: String!
        title:String!
        year: Int!
        genre: String
        createdAt: DateTime!
        updateAt: DateTime!
    }
    type Query {
        movies: [Movie]
        movie: Movie
    }
    type Mutation {
        createMovie(title: String!): Boolean
        deleteMovie(title: String!): Boolean
    }
`;
// With ! we will requir the particular field doesn't return null.

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        movies: () => [],
        movie: () => ({title: "Hello", year: 2021}),
    },
    Mutation: {
        // createMovie: (root, args, context, info) => "",
        createMovie: (_, args) => {
            console.log(args)
            return true
        },
        deleteMovie: (_, args) => {
            console.log(args)
            return true
        },
    }
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
    