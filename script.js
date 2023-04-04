var dados = {
  "Selecione": "Selecione",
	"João": "Lava roupa",
	"Maria": "Varre a casa",
	"Pedro": "Limpa o banheiro",
	"Ana": "Programa HTML"
};

function carregaTarefas() {
	var selectTarefa = document.getElementById("tarefas");
	var selectUsuario = document.getElementById("usuarios");

	for (var usuario in dados) {
		var option = document.createElement("option");
		option.value = usuario;
		option.text = usuario;
		selectUsuario.appendChild(option);
	}

	for (var tarefa in dados) {
		var option = document.createElement("option");
		option.value = dados[tarefa];
		option.text = dados[tarefa];
		selectTarefa.appendChild(option);
	}

	selectUsuario.onchange = function() {
		selectTarefa.value = dados[selectUsuario.value];
	}

	selectTarefa.onchange = function() {
		for (var usuario in dados) {
			if (dados[usuario] == selectTarefa.value) {
				selectUsuario.value = usuario;
			}
		}
	}
}
