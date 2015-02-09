app.controller('UsersController', function ($scope, usersPostsService) {
    usersPostsService.getUsers().then(
        function (data) {$scope.users = data;},
        function (err) { console.log(err); }
    );
});