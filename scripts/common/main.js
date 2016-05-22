var preguntasLink = "/common/mockPreguntas.json";

$( document ).ready(function() {
	$.getJSON(preguntasLink, function(result){
		console.log(result);
	});
});