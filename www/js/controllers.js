
angular.module('starter.controllers', ['ionic', 'ui.router'])
.controller('LoginCtrl', function($scope, $state, $http, $stateParams, $rootScope){
  $scope.login = function(email, password){
    $http({
      method: 'POST',
      url: "http://localhost:3000/login?json=1", 
      data: "email=" + email + "&password=" + password, 
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(res) {
      var token = {
        token: res.token
      };  
      window.localStorage.setItem( 'tokenkey', token.token );
      $rootScope.id = res.id;
      $state.go('tab.account', {id: $rootScope.id}); 
    }).error(function(err){
      console.log("check this: " + err);
      $state.go('login'); 
    });
  }

  $scope.forgotpassword = function(email){
    $state.go('forgotpassword');
  }

  $scope.signup = function(){
    $state.go('signup');
  }
})
.controller('ForgotpasswordCtrl', function($scope, $location, $state) {
  $scope.passwordreset = function(){
    $state.go('passwordresetsent');
  };
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


.controller('PeopleCtrl', function($scope, $location, $state, $http, $stateParams, $rootScope) {
  var id = $rootScope.id;
  if(window.localStorage.getItem('tokenkey')){
    var token = window.localStorage.getItem('tokenkey');
    $http.defaults.headers.common['X-Auth-Token'] = token;
    $http({
      method: 'GET',
      url: "http://localhost:3000/people/" + id + "?json=1", 
      headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Auth-Token': token}
    }).success(function(data, status, headers,config) {
      $scope.people = data;
    }).error(function(err){
      console.log("check this " + err);
    });
  }else{
    $state.go('login');
  };
})

.controller('EditUserCtrl', function($scope, $location, $state, $http, $stateParams, $rootScope) {
  var id = $rootScope.id;
  if(window.localStorage.getItem('tokenkey')){
    var token = window.localStorage.getItem('tokenkey');
    $http.defaults.headers.common['X-Auth-Token'] = token;
    $http({
      method: 'GET',
      url: "http://localhost:3000/edituser/" + id + "?json=1", 
      headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Auth-Token': token}
    }).success(function(data, status, headers,config) {
      $scope.edituser = data;
    }).error(function(err){
      console.log("check this " + err);
    });
  }else{
    $state.go('login');
  };

  $scope.savechanges = function(first_name, last_name){
      if(window.localStorage.getItem('tokenkey')){
      var token = window.localStorage.getItem('tokenkey');
      $http.defaults.headers.common['X-Auth-Token'] = token;
      console.log("first_name " + first_name + "last_name " + last_name);
      $http({
        method: 'POST',
        url: "http://localhost:3000/edituser/" + id + "?json=1",  
        data: "first_name=" + first_name + "&last_name=" + last_name, /* + "&dob=" + dob + "&address=" + address + "&email=" + email + "&telephone=" + telephone + "&year=" + year, */ 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res) {
         $state.go('useredited', {id: $rootScope.id});
      }).error(function(err){
        console.log("check this: " + err);
      });
       }else{
    $state.go('login');
  };
  };
})

.controller('UserEditedCtrl', function($scope, $location, $state, $http, $stateParams, $rootScope) {
})
.controller('DeleteUserCtrl', function($scope, $location, $state, $http, $stateParams, $rootScope) {
 var id = $rootScope.id;
  if(window.localStorage.getItem('tokenkey')){
    var token = window.localStorage.getItem('tokenkey');
    $http.defaults.headers.common['X-Auth-Token'] = token;
    

   $scope.deleteuser = function(){
    $state.go('userdeleted', {id: id});
  };

    $scope.cancel = function(){
    $state.go('account', {id: id});
  };
         }else{
    $state.go('login');
  };
})
.controller('UserDeletedCtrl', function($scope, $location, $state, $http, $stateParams, $rootScope) {
    $scope.savechanges = function(first_name, last_name){
      if(window.localStorage.getItem('tokenkey')){
      var token = window.localStorage.getItem('tokenkey');
      $http.defaults.headers.common['X-Auth-Token'] = token;
      console.log("first_name " + first_name + "last_name " + last_name);
      $http({
        method: 'POST',
        url: "http://localhost:3000/edituser/" + id + "?json=1",  
        data: "first_name=" + first_name + "&last_name=" + last_name, /* + "&dob=" + dob + "&address=" + address + "&email=" + email + "&telephone=" + telephone + "&year=" + year, */ 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(res) {
         $state.go('useredited', {id: $rootScope.id});
      }).error(function(err){
        console.log("check this: " + err);
      });
       }else{
    $state.go('login');
  };
  };
})
.controller('AccountCtrl', function($scope, $location, $stateParams, $http, $state, $rootScope) {
  var id = $rootScope.id
  $scope.profile = function(){
    console.log("this is here");
    $state.go('people', {id: id});
  };

  $scope.edituser = function(){
    $state.go('edituser', {id: id});
  };

    $scope.deleteuser = function(){
    $state.go('deleteuser', {id: id});
  };
});
