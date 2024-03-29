// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services']) /*'ngcordova'*/

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    });
})

/*
.controller('ListController', ['$scope', '$http',
  function($scope, $http){
    $http.get('js/testprofile.json').success(function(testprofile){
      $scope.profile = data;
    });
  }]);*/
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'  
  })
  .state('forgotpassword', {
    url: '/login/forgotpassword',
    templateUrl: 'templates/forgotpassword.html',
    controller: 'ForgotpasswordCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })
  .state('signedup', {
    url: '/signedup',
    templateUrl: 'templates/signedup.html',
    controller: 'SignedupCtrl'
  })
  .state('passwordresetsent', {
    url: '/login/passwordresetsent',
    templateUrl: 'templates/passwordresetsent.html',
    controller: 'PasswordresetsentCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.liftsharing', {
    url: '/liftsharing',
    views: {
      'tab-liftsharing': {
        templateUrl: 'templates/tab-liftsharing.html',
        controller: 'LiftsharingCtrl'
      }
    }
  })

  .state('tab.calendar', {
    url: '/calendar',
    views: {
      'tab-calendar': {
        templateUrl: 'templates/tab-calendar.html',
        controller: 'CalendarCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account/:id',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('people', {
    url: '/people/:id',
    templateUrl: 'templates/people.html',
    controller: 'PeopleCtrl'
  })

  .state('edituser', {
    url: '/edituser/:id',
    templateUrl: 'templates/edituser.html',
    controller: 'EditUserCtrl'
  })  
    .state('joinclub', {
    url: '/joinclub/:id',
    templateUrl: 'templates/joinclub.html',
    controller: 'JoinClubCtrl'
  })  
        .state('newclub', {
    url: '/newclub/:id',
    templateUrl: 'templates/newclub.html',
    controller: 'NewClubCtrl'
  }) 
   .state('clubadded', {
    url: '/newclub/:id/clubadded',
    templateUrl: 'templates/clubadded.html',
    controller: 'ClubAddedCtrl'
  })       
  .state('clubs', {
    url: '/clubs/:id',
    templateUrl: 'templates/clubs.html',
    controller: 'ClubsCtrl'
  })    

  .state('useredited', {
    url: '/edituser/:id/useredited',
    templateUrl: 'templates/useredited.html',
    controller: 'UserEditedCtrl'
  })
     .state('deleteuser', {
    url: '/deleteuser/:id',
    templateUrl: 'templates/deleteuser.html',
    controller: 'DeleteUserCtrl'
  })  
      .state('userdeleted', {
    url: '/userdeleted/:id',
    templateUrl: 'templates/userdeleted.html',
    controller: 'UserDeletedCtrl'
  })  

  .state('tab.committee', {
    url: '/committee/:id',
    views: {
      'tab-committee': {
        templateUrl: 'templates/tab-committee.html',
        controller: 'CommitteeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
