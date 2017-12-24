var database = function() {
	var mysql = require("mysql");
	var pool = mysql.createPool({
		connectionLimit: 100, //important
		host: "127.0.0.1", // localhost, 127.0.0.1
		port: "3307",
		user: "root", // docker_user
		password: "", // 123456
		database: "crud_simples",
		debug:  false
	});

	function listarFilmes(callback) {
		pool.query("SELECT * FROM filme", function (error, results, fields) {
			callback(error, results);
		});
	}

	function inserirFilme(obj) {
		pool.query("INSERT INTO filme SET ?", obj, function (error, results, fields) {});
	}

	function atualizarFilme(obj) {
		pool.query("UPDATE filme SET nome = ?, ano = ? WHERE id = ?", [obj.nome, obj.ano, obj.id], function (error, results, fields) {});
	}

	function salvarFilme(obj) {
		if (obj.id == 0) {
			inserirFilme(obj);
		} else {
			atualizarFilme(obj);
		}
	}

	function deletarFilme(id) {
		pool.query("DELETE FROM filme WHERE id = ?", [id], function (error, results, fields) {});
	}

	return {
		listarFilmes: listarFilmes,
		salvarFilme: salvarFilme,
		deletarFilme: deletarFilme
	};

}();

module.exports = database;