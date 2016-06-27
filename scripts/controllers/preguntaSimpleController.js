(function () {
    'use strict';

    var controller = app.controller('preguntaSimpleController', preguntaSimpleController);
    //angular.module('productManagement')
    //    .controller('welcome', welcome);

    preguntaSimpleController.$inject = [ '$scope','Preguntas'];
    function preguntaSimpleController($scope,Preguntas) {
    
    $scope.idPregunta = 1;
    $scope.pregunta = {};
    
       
    //Traer una pregunta
    $scope.getPregunta = function () {
        
        var obj = {
            Pregunta: {
                idPregunta:  $scope.idPregunta
            }
        };
        
        Preguntas.obtenerPregunta(obj)
           .$promise
               .then(function (response) {
                    $scope.pregunta = response; 
                    //console.log($scope.pregunta);
                })
               .catch(function (response) {
                    console.log(response); 
                });
                
        
               
    }
    
    $scope.getPregunta();
    
    }

})();
