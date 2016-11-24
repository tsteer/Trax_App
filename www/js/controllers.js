
angular.module('starter.controllers', ['ionic', 'ui.router'])
.controller('LoginCtrl', function($scope, $state, $http, $stateParams){

  $scope.login = function(email){

    // $.post(url, data, function () {});

    $http({
      method: 'POST',
      url: "http://localhost:3000/login?json=1", //req.body
      data: "email=test@test.com", //"id=" + 11,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(res) {
      console.log("post success");
      var token = {
        token: res.token
      };
      var id= res.id;
      console.log("check id here sent" + res.id);
  // var id = apiToken.findUserByToken(token);
    //  console.log("user" + id);
            console.log("token key" + token);
         
      window.localStorage.setItem( 'tokenkey', JSON.stringify(token) );
 console.log("the login token: " + token.token);
     // console.log("the login token: " + tokenkey);
      //$window.localStorage.setItem('token', res.token);
     //     console.log("login 2gdfghidf " + $stateParams.token);
      $state.go('tab.account', {id: id}); // for UI
    console.log('login', email);
    }).error(function(err){
      console.log("check this: " + err);
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
.controller('PeopleCtrl', function($scope, $location, $state, $http) {
  if(window.localStorage.getItem('tokenkey')){
    var token = window.localStorage.getItem('tokenkey')
    console.log("correct!" + token);
    $http.defaults.headers.common['X-Auth-Token'] = token;

    $http({
      method: 'GET',
      url: "http://localhost:3000/people/11?json=1", 
      data: "id=" + 11,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, headers,config) {
      console.log("post success");
      console.log(headers);
    }).error(function(err){
      console.log("check this " + err);
    });
  }else{
    $state.go('login');
  };
})
.controller('AccountCtrl', function($scope, $location, $stateParams, $http, $state) {
  //var NAME = 'loginToken';
  //  var session = sessions[token];
 // console.log("gdfghidf" + $stateParams.token);
/*  console.log("get storage " + window.localStorage.getItem('tokenkey')); */
/*
    $http({
      method: 'GET',
      url: "http://localhost:3000/account/:id", 
      data: "id=" + 11,
      //params: {token: token},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, headers,config) {
     // console.log("token is here: " + token);
    // $stateParams.token
    console.log("2gdfghidf" + $stateParams.token);
    
    // $scope.token = $location.search()['token'];
    
     // console.log("headers are" + headers)
      console.log("new check 1 " + data);
      console.log("post success");
    }).error(function(err){
      console.log("check this 2" + err);
    });*/
    var id = $stateParams.id
    console.log("checkkkkkkk" + $stateParams.id);
   $scope.profile = function(){
  $state.go('people', {id: id});
 };
 /* 

    $http({
      method: 'GET',
      url: "http://localhost:3000/people/1?json=1", 
      data: "id=" + 4,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data, status, headers,config) {
      console.log("new check 1 " + data);
      console.log("post success");
    }).error(function(err){
      console.log("check this " + err);
    });
 */
});
