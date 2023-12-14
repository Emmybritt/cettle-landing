import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
	uri: `http://3.90.228.141:3000/graphql`,
	credentials: "same-origin",
});

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
