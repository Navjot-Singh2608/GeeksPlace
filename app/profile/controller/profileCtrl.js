'use strict';
angular.module('myProfile').controller('profileCtrl', ['$scope', '$rootScope', '$state', '$http', 'toastr', 'profileService', function($scope, $rootScope, $state, $http, toastr, profileService) {
    var changeChannel = $rootScope.channelName;
    $scope.myUpload = null;
    $scope.uploadItem = [];
    $scope.isShowSliderTable = 0;
    $scope.user = $rootScope.user;
    $scope.userID = $rootScope.userID;
    /* $scope.user.userPicName = $rootScope.loginUserPicName*/


    /*Saving user profile data*/
    $scope.saveProfile = function() {
        console.log("welcome In");
        console.log($scope.StepObject);
        console.log($scope);
        if ($scope.user._id == undefined || $scope.user._id == null) {
            $http.post('/profile', $scope.user).success(function(response) {
                //   $scope.refresh();
                console.log(response);
            })
        } else {
            $http.put('/profile/' + $scope.userID, $scope.user).success(function(response) {
                //   $scope.refresh();
                console.log(response);
            })
        }

    };
    
    /*upload image in the user Profile*/
    $scope.$watch('myUpload', function(newVal) {
        if (newVal) {
            console.log(newVal);
            $scope.user.userPicName = newVal.name;
            var uploadFile = newVal;
            var uploadUrl = "/uploads";
            var fd = new FormData();
            fd.append('file', uploadFile);
            console.log(fd);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function(data) {
                console.log("success!!" + data);
                $scope.isShowSliderTable = 1;
                $scope.uploadItem.push(data.file)
                $scope.myUploadFile = null;
            })
                .error(function() {
                    console.log("error!!");
                });
        }
    });


}])