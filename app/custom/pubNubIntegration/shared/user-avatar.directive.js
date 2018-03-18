angular.module('app').directive('userAvatar', function() {
  return {
    restrict: "E",
    template: '<img src="userProfileImage/{{content.userPicName}}" alt="{{uuid}}" class="circle">',
    scope: {
      uuid: "@",
      content: "="
    },
    controller: function($scope){
      // Generating a uniq avatar for the given uniq string provided using robohash.org service
     /* $scope.userPicName = $scope.content.userPicName;*/
      $scope.avatarUrl = '//robohash.org/' + $scope.uuid + '?set=set2&bgset=bg2&size=70x70';
}
};
});