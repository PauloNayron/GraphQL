const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    # Pontos de entradas da API
    type Query {
        ola: String
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Hello World!'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})