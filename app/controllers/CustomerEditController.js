app.controller('CustomerEditController', function ($scope, $modalInstance, currentCustomer) {
    $scope.currentCustomer = currentCustomer;

    $scope.Edit = function () {
        $modalInstance.close($scope.currentCustomer);
    };
    $scope.Close = function () {
        $modalInstance.dismiss('cancel');
    };
});