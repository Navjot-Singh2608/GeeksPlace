angular.module('app').directive('messageItem', function(MessageService) {
  return {
    restrict: "E",
    templateUrl: 'app/custom/pubNubIntegration/components/message-item/message-item.html',
    scope: {
      senderUuid: "@",
      content: "=",
      date: "@"
    },
    controller:function($scope,$rootScope){
      var counter = 1;
     /* $scope.tabs = [];
      $rootScope.tabs = $scope.tabs;*/
      var file = $scope.content.file;
      var img = new Image();   // Create new img element
      img.src = $scope.content.file;
      $scope.imagePath = img.src;

       /* $scope.addTab = function () {
            $scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
            counter++;
            $scope.tabs[$scope.tabs.length - 1].active = true;
            $rootScope.tabs = $scope.tabs;
        };

        $scope.removeTab = function (event, index) {
            event.preventDefault();
            event.stopPropagation();
            $scope.tabs.splice(index, 1);
            $rootScope.tabs = $scope.tabs;
        };*/

       /* $scope.addTab    = addTab;
        $scope.removeTab = removeTab;*/

       /* for (var i = 0; i < 5; i++) {
            $scope.addTab();
        }*/

    }
  };
});

