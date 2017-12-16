var database = function() {
	var mysql = require("mysql");
	var pool = mysql.createPool({
		connectionLimit: 100, //important
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'vue_js_node_crud',
		debug:  false
	});

	function listarFilmes(callback) {
		pool.query("SELECT * FROM filmes", function (error, results, fields) {
			callback(error, results);
		});
	}

	function inserirFilme(obj) {
		pool.query("INSERT INTO filmes SET ?", obj, function (error, results, fields) {});
	}

	function atualizarFilme(obj) {
		pool.query("UPDATE filmes SET nome = ?, ano = ? WHERE id = ?", [obj.nome, obj.ano, obj.id], function (error, results, fields) {});
	}

	function salvarFilme(obj) {
		if (obj.id == 0) {
			inserirFilme(obj);
		} else {
			atualizarFilme(obj);
		}
	}

	function deletarFilme(id) {
		pool.query("DELETE FROM filmes WHERE id = ?", [id], function (error, results, fields) {});
	}

	return {
		listarFilmes: listarFilmes,
		salvarFilme: salvarFilme,
		deletarFilme: deletarFilme
	};

}();

module.exports = database;