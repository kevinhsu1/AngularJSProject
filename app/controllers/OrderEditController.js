app.controller('OrderEditController', function ($scope, $modalInstance, currentOrder) {
    $scope.currentOrder = currentOrder;

    $scope.Edit = function () {
        $modalInstance.close($scope.currentOrder);
    };
    $scope.Close = function () {
        $modalInstance.dismiss('cancel');
    };
});