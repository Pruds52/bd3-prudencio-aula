/* NOME DO BANCO DE DADOS */
const database = 'BD3-PEDRO-AULA'

/* NOME DO BANCO DE DADOS */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

/* SELECIONA O LIVRO COM O VALOR MAIOR QUE DETERMINADO NUMERO */
db[collection].find(
    {valor:{$gt:125}}
)


/* SELECIONA O LIVRO COM O VALOR MENOR QUE DETERMINADO NUMERO */
db[collection].find(
    {valor:{$lte:100}}
)