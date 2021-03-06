var myApp = angular.module('el_baraton', ['ngRoute','ngStorage'] );

myApp.config(function($routeProvider,$locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider.when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    .when('/products', {
        templateUrl: 'templates/products.html',
        controller: 'prodCtrl'
    })
    .when('/cart', {
        templateUrl: 'templates/cart.html',
        controller: 'cartViewCtrl'
        
    })
    .when('/checkout', {
        templateUrl: 'templates/checkout.html',
        
        
    })
    .otherwise({
    	redirectTo: '/home',
    })


 });