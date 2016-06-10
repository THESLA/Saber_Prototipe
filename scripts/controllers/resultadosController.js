(function () {
    'use strict';

    var controller = app.controller('resultadosController', resultadosController);
    //angular.module('productManagement')
    //    .controller('welcome', welcome);

    resultadosController.$inject = [ '$scope'];
    function resultadosController($scope) {
    
    var dataSet = [
    [ "Tiger Nixon", "6To", "000000000", "12", "313243634x" ],
    [ "Pedro Shause", "6To", "000000001", "14", "313243634x" ],
    [ "Ramon Martinez", "6To", "000000002", "15", "313243634x" ],
    [ "Magda Sarate", "6To", "000000003", "17", "313243634x" ],
    [ "Dario Ramos", "6To", "000000004", "13", "313243634x" ],
    [ "Victor Blash", "6To", "000000005", "15", "313243634x" ],
    [ "BlashT Rita", "5To", "000000006", "13", "313243634x" ],
    [ "Tirion Lanister", "3Ro", "000000007", "11", "313243634x" ],
    [ "Samsa Satark", "2Do", "000000008", "15", "313243634x" ],
];



$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Grado" },
            { title: "ID" },
            { title: "Edad" },
            { title: "telefono" },
        ]
    } );
} );

    }

})();