angular.module('home').controller('homeCtrl',['$scope','$rootScope','$state','$http','toastr',function($scope,$rootScope,$state,$http,toastr){

    $scope.askExpert = function(){
        $state.go("expert");
    }

    /*-------------------------------------user registration--------------------------------------*/
    $scope.userRegistration = function(){
            console.log("demoooo"+$scope.user.firstName)
            if ($scope.user.fullname != "" && $scope.user.email!= undefined && $scope.user.password != ""){
                $http.post('/register',$scope.user)
                    .then(function(response) {
                        console.log(response);
                        $rootScope.userID = response.data.data.insertedIds[0];
                        if(response="undefined" &&response!=null){
                            $rootScope.fullName = $scope.user.fullname;
                            $rootScope.userChannelName = $scope.user.email;
                            toastr.success('Successfully Registered.');
                            $('#modal-signin').hide();
                            $('body').removeClass('modal-open');
                            $('.modal-backdrop').remove();
                           /* $uibModalInstance.dismiss('cancel')*/
                           /* $uibModalStack.dismissAll();*/
                            $state.go('expert');

                            console.log("success!!"+response);
                        }
                    }, function(error) {
                        console.log("error!!");
                        console.log("success!!"+$scope.user.EmailAddress);
                        if($scope.user==$scope.user){
                            toastr.error('Email Already Registered.');
                        }
                    });
            }

    }


    /*-------------------------------------user login----------------------------------------------*/
    $scope.userLogin = function(){
        console.log($scope.user)
        $http.post('/login',$scope.user)
            .then(function(response) {
                $rootScope.userID = response.data.userData.id;
                $rootScope.fullName = response.data.userData.fullName;
                $rootScope.userChannelName = response.data.userData.email;
                console.log("success!!"+response);

                console.log("success!!"+response);

                toastr.success('Successfully logged in.');
                $('#modal-signin').hide();
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
               /* $uibModalInstance.dismiss('cancel')*/
                $state.go('expert');
                //  console.log( User.getEmailAddress());
                //User.build(data.userData);
               // User.saveLocalStorage();
            }, function(error) {
                console.log("success!!"+$scope.user.EmailAddress);
                if($scope.user.EmailAddress!=$scope.user){
                    toastr.error('Email or Password is incorrect.');
                }

                // toastr.error('Your credentials are gone', 'Error');
            });
    }


  



















}])

