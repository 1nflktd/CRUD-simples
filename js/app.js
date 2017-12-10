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
		limparVariaveis() {
			this.novoFilme = {id: 0, nome: "", ano: 0};
			this.adicionandoFilme = false;
		},

		listarFilmes: function() {
			this.limparVariaveis();

			http.get("/filmes")
			.then(function(response) {
				app.filmes = response.data;
			})
			.catch(function(error) {
				console.log('erro');
				console.log(error);
			});
		},

		adicionarFilme: function() {
			app.adicionandoFilme = true;
		},

		salvarNovoFilme: function() {
			http.post("/filmes", app.novoFilme)
			.then(function(response) {
				app.listarFilmes();
			})
			.catch(function(error) {
				console.log('erro');
				console.log(error);
			});
		},

		removerFilme: function(id) {
			http.delete("/filmes/" + id)
			.then(function(response) {
				app.listarFilmes();
			})
			.catch(function(error) {
				console.log('erro');
				console.log(error);
			});
		},

		editarFilme: function(id) {
			for (i in this.filmes) {
				if (this.filmes[i].id === id) {
					this.filmes[i].editando = true;
					break;
				}
			}
		},

		confirmarFilme: function(id) {
			for (i in this.filmes) {
				if (this.filmes[i].id === id) {
					this.filmes[i].editando = false;
					break;
				}
			}
		}
	}
});
