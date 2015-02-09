app.controller('CustomersController', function ($scope, $modal, customersService) {
    $scope.customers = customersService.getCustomers();
    $scope.orderByField = 'firstName';
    $scope.reverseSort = true;

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        //$scope.newCustomer.firstName = '';
        //$scope.newCustomer.lastName = '';
        //$scope.newCustomer.city = '';
        //$scope.formAddCustomer.$setPristine();
    };

    $scope.EditCustomer = function (customerId) {
        var currentCustomer = customersService.getCustomer(customerId);
        var modalInstance = $modal.open({
            templateUrl: '/app/views/customerEdit.html',
            controller: 'CustomerEditController',
            resolve: {
                currentCustomer: function () {
                    return currentCustomer;
                }
            }
        });

        modalInstance.result.then(function (currentCustomer) {
            //works with two way binding
            //should call customersService.editCustomer in reality
            alert('Finished editing customer');
        });
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };
});