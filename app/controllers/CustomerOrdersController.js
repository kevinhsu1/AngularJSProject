app.controller('CustomerOrdersController', function ($scope, $routeParams, customersService) {
    $scope.customer = {};
    $scope.ordersTotal = 0.00;

    var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
    if (customerID > 0) {
        $scope.customer = customersService.getCustomer(customerID);
    }

    $scope.insertOrder = function () {
        var productName = $scope.newOrder.productName;
        var unitPrice = $scope.newOrder.unitPrice;
        var quantity = $scope.newOrder.quantity;
        customersService.insertOrder(productName, unitPrice, quantity, parseInt($routeParams.customerID));
        //$scope.newOrder.productName = '';
        //$scope.newOrder.unitPrice = '';
        //$scope.newOrder.quantity = '';
        //$scope.formAddOrder.$setPristine();
        $scope.getTotal = function () {
            $scope.$broadcast('getTotalEvent');
        }
    };
});