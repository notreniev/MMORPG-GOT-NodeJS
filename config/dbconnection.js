/**
 * Importar o mongodb
 */
var mongo = require('mongodb');

var connMongoDB = function(){ // variável para não executar a conexão a todo instante
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //String contendo o endereço do banco de dados
            27017, // porta de conexão
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}

