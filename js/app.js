var app = new Vue({
	el: '#app',
	data: {
		prox_id: 3,
		filmes: [
			{id: 0, nome: "The Terminator", ano: 1984, editando: false},
			{id: 1, nome: "The Godfather", ano: 1972, editando: false},
			{id: 2, nome: "Rocky", ano: 1976, editando: false},
		]
	},
	methods: {
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