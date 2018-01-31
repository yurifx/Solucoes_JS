keys: dialog, caixas, box, alertas, confirm

alert('oi');
confirm('oi');

var apagar = confirm('deseja realmente excluir este registro?');
	if (apagar) {
} else {
	event.preventdefault();
}
