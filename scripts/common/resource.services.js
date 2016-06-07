(function () {
    "use strict";
    var services = angular.module('common.services').factory("appSettings", ['ngResource', 'ngRoute', '$http']);

    services.factory("Producto", function ($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/producto/:id", null,
             {
                 'update': { method: 'PUT' }
             });
    });
    services.factory("Customers", function ($resource, appSettings) {
        return $resource(null, {}, {
            query: { method: 'GET', params: {}, isArray: true, url: appSettings.serverPath + "/api/customer" },
            get: { method: 'GET', isArray: false, url: appSettings.serverPath + "/api/customer" },
            save: {
                method: 'POST', url: appSettings.serverPath + "/api/customer"
            },
            update: { method: 'PUT', url: '/api/customer/:id' },
            todos: { method: 'GET', params: {}, isArray: true, url: appSettings.serverPath + "/api/customer" }
        });
    })
}());