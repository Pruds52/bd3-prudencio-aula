/* NOME DO BANCO DE DADOS */
const database = 'BD3-PEDRO-AULA'

/* NOME DO BANCO DE DADOS */
const collection = 'LIVRARIA'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

/* SELECIONA UM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINADO */
db[collection].find({

    $and:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]
})