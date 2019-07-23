const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entradas da API
    type Query {
        ola: String
        horaAtual: Date!
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query: {
        ola() {
            return 'Hello World!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Paulo Nayron',
                email: 'paulonayron@hotmail.com',
                idade: 25,
                salario_real: 999999.99,
                vip: true
            }
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