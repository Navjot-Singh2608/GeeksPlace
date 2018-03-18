angular.module('myProfile').factory('profileService', ['$http', '$q', function ($http, $q) {
    var service = {
        getUserData: getUserData
    }
    return service;


    function getUserData(id) {
        var deferred = $q.defer();
        $http.get('/profile', {params: {id: id}}).then(function (response) {
            deferred.resolve(response || {});
        });
        return deferred.promise;
    }


}]);
