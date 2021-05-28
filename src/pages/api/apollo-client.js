import { ApolloClient, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
    uri: 'http://192.168.100.44:4000/shop/graphql',
    cache: new InMemoryCache()
});


export default client;
