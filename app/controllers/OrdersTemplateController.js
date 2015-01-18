app.controller('OrdersTemplateController', function ($scope) {
    $scope.orderByField = 'firstName';
    $scope.reverseSort = true;
    $scope.ordersTotal = 0.00;

    $scope.getTotal = function () {
        var total = 0.00;
        for (var i = 0; i < $scope.customer.orders.length; i++) {
            var order = $scope.customer.orders[i];
            total += (order.price * order.quantity);
        }
        return total;
    }

    $scope.$on('getTotalEvent', function (e) {
        $scope.getTotal();
    });
});