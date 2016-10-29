
angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $state){
  $scope.login = function(user){
    console.log('login', user);
    $state.go('tab.dash');
  }
})
.controller('DashCtrl', function($scope, $location, $state) {
  $scope.signUp = function(){
    $state.go('tab.signup');
  }
})
.controller('SignUpCtrl', function($scope, $cordovaSQLite, $timeout){})
.controller('CalendarCtrl', function($scope) {})
.controller('LiftsharingCtrl', function($scope) {})
.controller('StatisticsCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http) {
$scope.result = "";
  $http.get('http://localhost:3000/test?json=1')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
/*
  $scope.settings = {
    enableFriends: true
  };*/
});
