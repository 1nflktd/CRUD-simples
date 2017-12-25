var database = function() {
	var mysql = require("mysql");
	var pool = mysql.createPool({
		connectionLimit: 100, //important
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		debug: false
	});

	function listarFilmes(callback) {
		pool.query("SELECT * FROM filme", function (error, results, fields) {
			if (error) console.log(error);
			callback(error, results);
		});
	}

	function inserirFilme(obj) {
		pool.query("INSERT INTO filme SET ?", obj, function (error, results, fields) {
			if (error) console.log(error);
		});
	}

	function atualizarFilme(obj) {
		pool.query("UPDATE filme SET nome = ?, ano = ? WHERE id = ?", [obj.nome, obj.ano, obj.id], function (error, results, fields) {
			if (error) console.log(error);
		});
	}

	function salvarFilme(obj) {
		if (obj.id == 0) {
			inserirFilme(obj);
		} else {
			atualizarFilme(obj);
		}
	}

	function deletarFilme(id) {
		pool.query("DELETE FROM filme WHERE id = ?", [id], function (error, results, fields) {
			if (error) console.log(error);
		});
	}

	return {
		listarFilmes: listarFilmes,
		salvarFilme: salvarFilme,
		deletarFilme: deletarFilme
	};

}();

module.exports = database;