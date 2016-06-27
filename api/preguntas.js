//SERVICES

var objTest = [{Nombre: "Jose", Apellido: "Daza"},{Nombre: "James", Apellido: "Ravelo"}];
var preguntas = [{
	idPregunta: 1, 
	tituloPregunta: "¿Cuánto es 2 + 2 ?",
	respuestas:[{idRes: 11, res: 3},{idRes: 12, res: 6},{idRes: 13, res: 4},{idRes: 14, res: 8}]
	},{
	idPregunta: 2, 
	tituloPregunta: "¿De qué color es el agua?",
	respuestas:[{idRes: 21, res: "Azul"},{idRes: 22, res: "Verde"},{idRes: 23, res: "Incolora"},{idRes: 24, res: "Violeta"}]
	},{
	idPregunta: 3, 
	tituloPregunta: "¿Cuántos habitantes tiene Colombia?",
	respuestas:[{idRes: 31, res: "40 Millones"},{idRes: 32, res: "50 Millones"},{idRes: 33, res: "10 Millones"},{idRes: 34, res: "1 Millón"}]
	}
	]



exports.getAllQuestions = function(req, res) {
        //console.log(req.body);
        res.status(200).jsonp(objTest);
};

exports.postAnswer = function(req, res) {
        console.log(req.body);
        //res.status(200).jsonp(objTest);
};

exports.getSingleQuestion = function(req, res) {
		var id = req.body.Pregunta.idPregunta;
		var response = {};
		for(var index = 0; index<preguntas.length;index++){
			if(preguntas[index].idPregunta == id){
				response = preguntas[index];
			}
		}
        res.status(200).jsonp(response);
};
