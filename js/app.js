var http = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 1000,
	//headers: {"Access-Control-Allow-Origin": "http://localhost:8080"},
});

var app = new Vue({
	el: '#app',
	data: {
		prox_id: 4,
		filmes: []
	},
	created: function() {
		console.log('CREATED');
		this.listarFilmes()
	},
	methods: {
		listarFilmes: function() {
			console.log('LISTAR FILMES');
			http.get("/filmes")
			.then(function(response) {
				this.filmes = response.data;
			})
			.catch(function(error) {
				console.log('erro');
				console.log(error);
			});
		},

		adicionarFilme: function() {
			this.filmes.push({id: this.prox_id, editando: true});
			this.prox_id++;
		},

		removerFilme: function(id) {
			this.filmes = this.filmes.filter(function(el) {
				return el.id !== id;
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
