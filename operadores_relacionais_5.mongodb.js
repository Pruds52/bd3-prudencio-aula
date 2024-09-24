/* NOME DO BANCO DE DADOS */
const database = 'BD3-PEDRO-AULA'

/* NOME DO BANCO DE DADOS */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

// /* LISTA TODOS OS LIVROS DO TOLKIEN EM ORDEM CRESCENTE DE VALOR */ 
db[collection].find({
    autor:'J.R.R Tolkien'
}).sort({valor:1})

/* LISTA TODOS OS LIVROS DO TOLKIEN EM ORDEM DECRESCENTE DE VALOR */ 
db[collection].find({
    autor:'J.R.R Tolkien'
}).sort({valor:-1})