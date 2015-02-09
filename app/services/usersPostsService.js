app.service('usersPostsService', function ($http, $q) {
    var url = 'http://jsonplaceholder.typicode.com/';

    this.getUsers = function () {
        var deferred = $q.defer();
        $http.get(url + 'users').
        success(function (data) {
            deferred.resolve(data);
        }).
        error(function (data, status) {
            deferred.reject('error');
            console.log("data: " + data);
            console.log("status: " + status);
        });
        return deferred.promise;
    };

    this.getUserPosts = function (userID) {
        var deferred = $q.defer();
        $http.get(url + 'users/' + userID + '/posts').
        success(function (data) {
            deferred.resolve(data);
        }).
        error(function (data, status) {
            deferred.reject('error');
            console.log("data: " + data);
            console.log("status: " + status);
        });
        return deferred.promise;
    };
});