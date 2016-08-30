
angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $location, $state) {
  $scope.signUp = function(){
    $state.go('tab.signup');
  }
})
.controller('SignUpCtrl', function($scope, $cordovaSQLite, $timeout){
    $scope.add= function(user){
    /*  var scrypt = require('scrypt-hash')

      var password = Buffer(user.password)
      var salt = Buffer('adashofsalt')
      var N = 1024 * 64
      var r = 8
      var p = 1
      var len = 32

      scrypt(password, salt, N, r, p, len, function (err, hash) {
    if (err) {
        return console.error(err)
    }
    console.assert(hash.length === len)
    console.log('The hashed password is', hash.toString('hex'))
  })*/

      console.log(user.firstname);
      var query="INSERT INTO people(firstname,lastname,email,address,dob,phone,year,car,seats, password) VALUES (?,?,?,?,?,?,?,?,?,?)";
      $cordovaSQLite.execute(db,query,[user.firstname,user.lastname,user.email,user.address,user.dob,user.phone,user.year,user.car,user.seats,user.password]).then(function(res){
        $scope.load();
      });

    }
   $scope.load=function(){
      $scope.alldata=[];
       $cordovaSQLite.execute(db,"SELECT * FROM people",[]).then(function(result){
        if(result.rows.length>0){
          for(var i=0; i<result.rows.length;i++){
          $scope.alldata.push(result.rows.item(i));
          }
//$scope.$apply();
        $timeout(function(){}, 0);
        }else{
            console.log("No data Found");
          }
      },function(err){
        console.log("error"+err);
      });
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

.controller('AccountCtrl', function($scope, $http, $cordovaSQLite, $timeout) {
  $scope.load=function(){
     $scope.userdata=[];
      $cordovaSQLite.execute(db,"SELECT * FROM people WHERE id = '1'",[]).then(function(result){
       if(result.rows.length>0){
         for(var i=0; i<result.rows.length;i++){
         $scope.userdata.push(result.rows.item(i));
         }
  //$scope.$apply();
       $timeout(function(){}, 0);
       }else{
           console.log("No data Found");
         }
     },function(err){
       console.log("error"+err);
     });
   }

/*
    $scope.result = "";
    $http.get('http://date.jsontest.com/')
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
    });*/
});
