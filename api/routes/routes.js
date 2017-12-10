var appRouter = function(app) {
	var filmes = [
		{id: 0, nome: "The Terminator", ano: 1984, editando: false},
		{id: 1, nome: "The Godfather", ano: 1972, editando: false},
		{id: 2, nome: "Rocky", ano: 1976, editando: false},
		{id: 3, nome: "Rocky 2", ano: 1979, editando: false},
	];

	app.get("/filmes", function(req, res) {
		return res.send(filmes);
	});

	app.post("/filmes", function(req, res) {
		console.log('req');
		console.log(req);
		//return res.send(null, 200);
	});
}

module.exports = appRouter;
