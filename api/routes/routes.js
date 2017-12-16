var appRouter = function(app, database) {
	function validarFilme(body) {
		return !(body.nome == "" || body.ano <= 0);
	};

	app.get("/filmes", function(req, res) {
		database.listarFilmes(function(err, ret) {
			var filmes = [];
			if (!err) {
				filmes = ret;
				for (f in filmes) {
					filmes[f]["editando"] = false;
				}
			}
			return res.status(200).send(filmes);
		});
	});

	app.post("/filmes", function(req, res) {
		if (!validarFilme(req.body)) {
			return res.sendStatus(400);
		}

		req.body.id = 0;
		database.salvarFilme(req.body);
		return res.sendStatus(201);
	});

	app.put("/filmes/:id", function(req, res) {
		if (!validarFilme(req.body)) {
			return res.sendStatus(400);
		}

		req.body.id = Number(req.params.id);
		database.salvarFilme(req.body);
		return res.sendStatus(200);
	});

	app.delete("/filmes/:id", function(req, res) {
		var id = Number(req.params.id);
		database.deletarFilme(id);
		return res.sendStatus(200);
	});
}

module.exports = appRouter;
