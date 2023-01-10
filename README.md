# instaclone

This project is a full stack software "Friends".

Front-end tech:
- [X] [Apollo]()
- [X] React
- [X] React Hook Form
- [X] Styled Components
- [X] React Hooks

Back-end tech: 
- [X] [Apollo Server](#apollo-server--graphql)
- [X] [GraphQL](#apollo-server--graphql)
- [X] [Prisma](#prisma)
  - [X] Studio
  - [X] Migrate
  - [X] Client
- [X] [mysql](https://www.mysql.com/)
- [ ] MongoDB

IOS & Android: 
- [X] Expo
- [X] React Native
- [X] React Native CLI
- [X] React Navigation

Helpful dependence
- [X] [nodemon](#nodemon)
- [X] [babel](#babel)
- [X] [typescript](#typescript)
  
# Appendix

## [Apollo Server & Graphql](https://github.com/apollographql/apollo-server)

1. installation
    
    The following command allows you install and use "apollo server" and "graphql"
    ```
    npm install apollo-server graphql
    ```

2. Usage
   
   Here is a basic example of Apollo Server & Graphql
   ```
   import { ApolloServer } from '@apollo/server';
    import { startStandaloneServer } from '@apollo/server/standalone';

    // The GraphQL schema
    
    // Create your defination first
    const typeDefs = `#graphql
    type Query {
        hello: String
    }
    `;
    // With ! this token will require the particular field doesn't return null.

    // A map of functions which return data for the schema.
    const resolvers = {
    Query: {
        hello: () => 'world',
        // function: (root, args, context, info) => "",
    },
    };

    const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

    const { url } = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);
   ```

## [Nodemon](https://www.npmjs.com/package/nodemon)
This package allows your app automatically restart after file changes.

1. installation
   
   If you want to install nodemon globally.
   ```
   npm install -g nodemon # or using yarn: yarn global add nodemon
   ```
   
   Or you can install it as a development dependency.
   ```
   npm install --save-dev nodemon
   ```

2. Usage
    ```
    nodemon [your node app]
    ```

    For this app, I add the following line in our package.json at "scripts":
    ```
    "dev": "nodemon --exec babel-node server.js". 
    ```
    So that, after git clone this project, you can run this app by:
    ```
    npm run dev
    ```
    It will automatically use nodemon to run our app.

## [Babel](https://babeljs.io/)

This tool helps you to support the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax without waiting for browser support.

1. installation
   
   This command line install babel for node.
   ```
   npm install --save-dev @babel/core
   ```

2. Usage
   For using babel for our app, I add a new file called "babel.config.json" with the following content:
   ```
    {
    "presets": ["@babel/preset-env"]
    }
   ```

   And then, I add a new line(See nodemon usage):
   ```
   "dev": "nodemon --exec babel-node server" 
   ```
   So that, after git clone this project, you can run this app by:
    ```
    npm run dev
    ```
    It will automatically use babel and nodemon to run our app.

## [Prisma](https://www.prisma.io/)
Prisma is a tool to talk with our app database.

1. Installation
   The following command allows you to install the Prisma CLI as a development dependency in the project
   ```
   npm install prisma --save-dev
   ```
   And then, set up Prisma with the init command of the Prisma CLI
   ```
   npx prisma init --datasource-provider sqlite
   ```
   This command will create prisma folder.

2. Usage
    I used the codes like the following codes for Prisma to talk with database, examples:
    ```
    generator client {
    provider = "prisma-client-js"
    }

    datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
    }

    model Movie {
    id Int @default(autoincrement()) @id
    title String
    year Int
    genre String?
    createdAt DateTime @default(now())
    updateAt DateTime @updatedAt
    }
    ```
    For this app, I tried [mysql](https://www.mysql.com/) database(locally) and [mongoDB](https://www.mongodb.com/) database(remotely).

    For the final step, you still need to run the following CLI commands:

    ```
    npx prisma migrate dev --name init
    ```

## [Typescript](https://www.typescriptlang.org/)