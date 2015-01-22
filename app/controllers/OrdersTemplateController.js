app.controller('OrdersTemplateController', function ($scope, $routeParams, $modal, customersService) {
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

    $scope.EditOrder = function (orderId) {
        var currentOrder = customersService.getOrder(orderId);
        var modalInstance = $modal.open({
            templateUrl: '/app/views/orderEdit.html',
            controller: 'OrderEditController',
            resolve: {
                currentOrder: function () {
                    return currentOrder;
                }
            }
        });

        modalInstance.result.then(function (currentOrder) {
            //works with two way binding
            //should call customersService.editOrder in reality
            alert('Finished editing order');
        });
    };

    $scope.deleteOrder = function (orderId) {
        customersService.deleteOrder(orderId);
    };

    $scope.$on('getTotalEvent', function (e) {
        $scope.getTotal();
    });
});