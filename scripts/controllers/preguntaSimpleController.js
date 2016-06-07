(function () {
    'use strict';

    var controller = app.controller('preguntaSimpleController', preguntaSimpleController);
    //angular.module('productManagement')
    //    .controller('welcome', welcome);

    preguntaSimpleController.$inject = [ '$scope'];
    function preguntaSimpleController($scope) {
       
    	$scope.preguntaUno="Como se llama su padre";
    }

})();
