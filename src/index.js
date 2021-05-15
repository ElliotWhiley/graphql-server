import { ApolloServer } from "apollo-server";

const typeDefs = `
    type Query {
        info: String!
    }
`;

const resolvers = {
	Query: {
		info: () => `Something useful`,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await server.listen();
console.log(`Server running on ${url}`);
