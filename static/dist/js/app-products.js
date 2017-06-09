(function() {

    var app = angular.module('app-products', []);

    app.directive('productsTitle', function() {
        return {
            restrict: "A",
            templateUrl: "templates/products/product-title.html"
        }
    });

    app.directive('productsInfo', function() {
        return {
            restrict: "E",
            templateUrl: "templates/products/products-info.html"
        }
    });

    app.directive('productsTab', function() {
        return {
            restrict: "E",
            templateUrl: "templates/products/products-tab.html",
            controller: 'tabController',
            controllerAs: 'panel'
        }
    });

})();