
angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $state, $http){
  $scope.login = function(email){

    // $.post(url, data, function () {});

    $http({
      method: 'POST',
      url: "http://localhost:3000/login", //req.body
      data: "id=" + 1,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function() {
      console.log("post success");
      $state.go('tab.dash'); // for UI
    console.log('login', email);
    }).error(function(err){
      console.log("check this " + err);
    });
  //     url: "http://localhost:3000/login?id=1", req.params
    /*
   $http.post("http://localhost:3000/login", {id: $scope.id}).success(function(message, status) {
    console.log("post success");
    });
    */

     // console.log('Message posted');
  //    console.log(id); // for browser console
      
  //  $state.go('tab.dash');
/*.controller('LoginCtrl', function($scope, $state, $http){
  $scope.data = {};
  $scope.login = function(){
    $http.post('http://localhost:3000/login', {id: $scope.id})
     .success(function(data, status, headers,config){
      console.log('data success');
      console.log(id); // for browser console
      $state.go('tab.dash'); // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
 //   .then(function(result){
 //     things = result.data;
 //   });
*/
//    })
  }
  $scope.forgotpassword = function(email){
    $state.go('forgotpassword');
        console.log('login to forgotpassword', email);
  }
  $scope.signup = function(){
    $state.go('signup');
    console.log('signup');
  }
})
.controller('ForgotpasswordCtrl', function($scope, $location, $state) {
     console.log('forgotpassword to reset', email);
  $scope.passwordreset = function(){
  $state.go('passwordresetsent');
  console.log('forgotpassword to reset', email);
  }
})
.controller('PasswordresetsentCtrl', function($scope, $location, $state) {
   console.log('reset to login');
  $scope.login = function(){
    $state.go('login');
  }
})
.controller('DashCtrl', function($scope, $location, $state) {
  $scope.signUp = function(){
    $state.go('signup');
  }
})
.controller('SignUpCtrl', function($scope, $location, $state){
  $scope.adduser = function(){
    $state.go('signedup');
  }
})
.controller('SignedupCtrl', function($scope, $location, $state){
  $scope.login = function(){
    $state.go('login');
  }
})
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

    $http({
      method: 'GET',
      url: "http://localhost:3000/people/1?json=1", 
      data: "id=" + 1,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function() {
      console.log("post success");
    }).error(function(err){
      console.log("check this " + err);
    });
 /* $scope.result = "";
  $http.get('http://localhost:3000/people/1?json=1')
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
