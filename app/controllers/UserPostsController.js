app.controller('UserPostsController', function ($scope, $routeParams, usersPostsService) {
    var userID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
    usersPostsService.getUserPosts(userID).then(
        function (data) { $scope.posts = data; },
        function (err) { console.log(err); }
    );

    $scope.insertUser = function () {
        usersPostsService.insertUser($scope.newUser).then(
            function (data) {
                $scope.newUser.name = '';
                $scope.newUser.email = '';
                $scope.newUser.phone = '';
            },
            function (err) { console.log(err); }
        );
    };
});