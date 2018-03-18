angular.module('customFileUpload', []).directive('uploadFile',function(){
    return{
        templateUrl:'app/custom/upload.html',
        controller:function($scope,$http){
            $scope.myUploadFile = null;
            $scope.uploadItem=[];
            $scope.isShowSliderTable=0;
            $scope.$watch('myUploadFile', function (newVal) {
                if (newVal){
                    console.log("watcher has executed");
                    console.log(newVal);
                    var uploadFile =newVal;
                    var uploadUrl = "/uploads";
                    var fd = new FormData();
                    fd.append('file', uploadFile);
                    $http.post(uploadUrl,fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    }).success(function(data){
                        $scope.customUploaddata(data);
                    }).error(function(){
                        console.log("error!!");
                    });
                }
            });
        }
    }
});
