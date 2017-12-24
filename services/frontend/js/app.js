var http = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 1000,
});

var app = new Vue({
	el: '#app',
	data: {
		filmes: [],
		novoFilme: {id: 0, nome: "", ano: 0},
		adicionandoFilme: false,
	},
	mounted: function() {
		this.listarFilmes();
	},
	methods: {
		limparVariaveis: function() {
			this.novoFilme = {id: 0, nome: "", ano: 0};
			this.adicionandoFilme = false;
		},

		listarFilmes: function() {
			this.limparVariaveis();

			http.get("/filmes")
			.then(function(response) {
				app.filmes = response.data;
			})
			.catch(function(error) {});
		},

		adicionarFilme: function() {
			app.adicionandoFilme = true;
		},

		salvarNovoFilme: function() {
			http.post("/filmes", app.novoFilme)
			.then(function(response) {
				app.listarFilmes();
			})
			.catch(function(error) {});
		},

		removerFilme: function(id) {
			http.delete("/filmes/" + id)
			.then(function(response) {
				app.listarFilmes();
			})
			.catch(function(error) {});
		},

		editarFilme: function(id) {
			for (i in app.filmes) {
				if (app.filmes[i].id === id) {
					app.filmes[i].editando = true;
					break;
				}
			}
		},

		confirmarFilme: function(id) {
			var filme = {};
			for (i in app.filmes) {
				if (app.filmes[i].id === id) {
					filme = app.filmes[i];
					break;
				}
			}

			http.put("/filmes/" + id, filme)
			.then(function(response) {
				app.listarFilmes();
			})
			.catch(function(error) {});
		}
	}
});
