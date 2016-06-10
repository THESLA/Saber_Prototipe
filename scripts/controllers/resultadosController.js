(function () {
    'use strict';

    var controller = app.controller('resultadosController', resultadosController);
    //angular.module('productManagement')
    //    .controller('welcome', welcome);

    resultadosController.$inject = [ '$scope'];
    function resultadosController($scope) {
    
    $('#example').DataTable();

    }

})();