var app = angular.module('app', ['ngRoute', 'ngAnimate']);

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
        .otherwise({ redirectTo: '/customers' });
});