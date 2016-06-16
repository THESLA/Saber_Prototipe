(function () {
    "use strict";

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'views/home.htm',
            controller: 'homeController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });
        $routeProvider.when('/preguntaSimple', {
            templateUrl: 'views/preguntaSimple.htm',
            controller: 'preguntaSimpleController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });
        $routeProvider.when('/diligenciar', {
            templateUrl: 'views/diligenciar.htm',
            controller: 'diligenciarController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });   
        $routeProvider.when('/resultados', {
            templateUrl: 'views/resultados.htm',
            controller: 'resultadosController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        }); 
        $routeProvider.when('/ayuda', {
            templateUrl: 'views/ayuda.htm',
            controller: 'ayudaController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        }); 
        $routeProvider.when('/graficas', {
            templateUrl: 'views/graficas.htm',
            controller: 'graficasController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });  
        $routeProvider.otherwise({
            redirectTo: '/home'
            //redirectTo: '/welcome'
        });
    }]);

    app.run(['$rootScope', '$location', '$cookieStore',
    function ($rootScope, $location, $cookieStore) {
        // keep user logged in after page refresh
        /*
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {

            //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in

           
            if ($rootScope.globals.currentUser && $location.path() == '/login') {
                $rootScope.displayLogout = true;
                $location.path('/home');
            }
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $rootScope.displayLogout = false;
                $location.path('/login');
            }
            
        });
        */
    }]);
}());