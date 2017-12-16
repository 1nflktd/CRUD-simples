var appRouter = function(app, database) {
	app.get("/filmes", function(req, res) {
		database.listarFilmes(function(err, ret) {
			var filmes = [];
			if (!err) filmes = ret;
			return res.status(200).send(filmes);
		});
	});

	app.post("/filmes", function(req, res) {
		req.body.id = 0;
		database.salvarFilme(req.body);
		return res.sendStatus(200);
	});

	app.put("/filmes/:id", function(req, res) {
		req.body.id = Number(req.params.id);
		database.salvarFilme(req.body);
		return res.sendStatus(200);
	});

	app.delete("/filmes/:id", function(req, res) {
		req.body.id = Number(req.params.id);
		database.deletarFilme(req.body);
		return res.sendStatus(200);
	});
}

module.exports = appRouter;
