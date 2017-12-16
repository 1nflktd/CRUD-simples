var mysql = require("mysql");
var pool = mysql.createPool({
	connectionLimit: 100, //important
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'vue_js_node_crud',
	debug:  false
});

var database = {
	listarFilmes: function(callback) {
		pool.query("SELECT * FROM filmes", function (error, results, fields) {
			callback(error, results);
		});
	},

	inserirFilme: function(obj) {
		pool.query("INSERT INTO filmes SET ?", obj, function (error, results, fields) {});
	},

	atualizarFilme: function(obj) {
		pool.query("UPDATE filmes SET nome = ?, ano = ? WHERE id = ?", [obj.nome, obj.ano, obj.id], function (error, results, fields) {});
	},

	salvarFilme: function(obj) {
		if (obj.id == 0) {
			this.inserirFilme(obj);
		} else {
			this.atualizarFilme(obj);
		}
	},

	deletarFilme: function(id) {
		pool.query("DELETE FROM filmes WHERE id = ?", [id], function (error, results, fields) {});
	}
};

module.exports = database;