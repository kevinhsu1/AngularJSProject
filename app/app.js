var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: '/app/views/customers.html'
            })
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/views/customerOrders.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '/app/views/orders.html'
            })
        .when('/customerEdit',
            {
                controller: 'CustomerEditController',
                templateUrl: '/app/views/customerEdit.html'
            })
        .when('/orderEdit',
            {
                controller: 'OrderEditController',
                templateUrl: '/app/views/orderEdit.html'
            })
        .otherwise({ redirectTo: '/customers' });
});