import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
	uri: `http://35.153.181.192:3000/graphql`,
	credentials: "same-origin",
});

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
