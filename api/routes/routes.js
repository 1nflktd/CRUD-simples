var appRouter = function(app) {
	var prox_id = 4;
	var filmes = [
		{id: 0, nome: "The Terminator", ano: 1984, editando: false},
		{id: 1, nome: "The Godfather", ano: 1972, editando: false},
		{id: 2, nome: "Rocky", ano: 1976, editando: false},
		{id: 3, nome: "Rocky 2", ano: 1979, editando: false},
	];

	app.get("/filmes", function(req, res) {
		return res.status(200).send(filmes);
	});

	app.post("/filmes", function(req, res) {
		req.body.id = prox_id;
		prox_id++;
		filmes.push(req.body);
		return res.sendStatus(200);
	});

	app.put("/filmes/:id", function(req, res) {
		var id = Number(req.params.id);
		var filme = req.body;
		for (i in filmes) {
			if (filmes[i].id === id) {
				filmes[i].nome = filme.nome;
				filmes[i].ano = filme.ano;
				break;
			}
		}
		return res.sendStatus(200);
	});

	app.delete("/filmes/:id", function(req, res) {
		var id = Number(req.params.id);
		filmes = filmes.filter(function(el) {
			return el.id !== id;
		});
		return res.sendStatus(200);
	});
}

module.exports = appRouter;
