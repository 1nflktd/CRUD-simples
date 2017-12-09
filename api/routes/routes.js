var appRouter = function(app) {
	app.get("/filmes", function(req, res) {
		var filmes = [
			{id: 1, nome: "The Godfather", ano: 1972, editando: false},
			{id: 0, nome: "The Terminator", ano: 1984, editando: false},
			{id: 3, nome: "Rocky 2", ano: 1979, editando: false},
			{id: 2, nome: "Rocky", ano: 1976, editando: false},
		];
		return res.send(filmes);
	});
}

module.exports = appRouter;
