angular.module('layout').controller('layoutCtrl', ['$scope', '$state', '$rootScope', 'profileService', function ($scope, $state, $rootScope, profileService) {

    $scope.fullName = $rootScope.fullName;

   /* dynamic height of the header*/
  /*  var dynamicHeaderHeight = document.getElementById('headerId').style.height;
    $rootScope.dynamicHeaderHeight = dynamicHeaderHeight;*/



    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    //fetch the user data
    $scope.fetchUserData = function () {
        var id = $rootScope.userChannelName;
        profileService.getUserData(id).then(function (response) {
            if (response.data!=null) {
                $rootScope.userID = response.data._id;
                $rootScope.user = {
                    fullName: response.data.fullName,
                    email: response.data.email,
                    company: response.data.company,
                    experience: response.data.experience,
                    skills: response.data.skills,
                    userPicName: response.data.userPicName,
                    _id:response.data._id
                };
            }
        })


    }

    $scope.fetchUserData();



    $scope.groupPage = function(){
        $state.go("groups");
    }




    if($rootScope.user != undefined){
        $rootScope.userPicName = $rootScope.user.userPicName;
    }else{
        $rootScope.userPicName = ''
    }


    $scope.myProfileState = function () {
        $state.go("myProfile");
    }


}])

