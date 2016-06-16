(function () {
    'use strict';

    var controller = app.controller('resultadosController', resultadosController);
    //angular.module('productManagement')
    //    .controller('welcome', welcome);

    resultadosController.$inject = [ '$scope'];
    function resultadosController($scope) {

        
    
    var dataSet = [
    [ "1","Tiger Nixon", "6To", "000000000", "12", "313243634x" ],
    [ "2","Pedro Shause", "6To", "000000001", "14", "313243634x" ],
    [ "3","Ramon Martinez", "6To", "000000002", "15", "313243634x" ],
    [ "4","Magda Sarate", "6To", "000000003", "17", "313243634x" ],
    [ "5","Dario Ramos", "6To", "000000004", "13", "313243634x" ],
    [ "6","Victor Blash", "6To", "000000005", "15", "313243634x" ],
    [ "7","BlashT Rita", "5To", "000000006", "13", "313243634x" ],
    [ "8","Tirion Lanister", "3Ro", "000000007", "11", "313243634x" ],
    [ "9","Samsa Satark", "2Do", "000000008", "15", "313243634x" ],
];



$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
        	{ title: "#" },
            { title: "Name" },
            { title: "Grado" },
            { title: "ID" },
            { title: "Edad" },
            { title: "Telefono" },
        ]
    } );
} );

    }

})();