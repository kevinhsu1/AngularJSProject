app.controller('OrdersController', function ($scope, customersService) {
    $scope.customers = [];
    $scope.customers = customersService.getCustomers();
});