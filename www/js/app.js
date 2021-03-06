// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

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



  // setup an abstract state for the tabs directive
.state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

.state('tab.post1', {
      url: '/post1',
      views: {
        'tab-post1': {
        templateUrl: 'templates/tab-post1.html',
        controller: 'Post1Ctrl'
      }
      }
})

.state('tab.postDesire', {
      url: '/postDesire',
      views: {
       'tab-post1': {
       templateUrl: 'templates/tab-postDesire.html',
       controller: 'PostDesireCtrl'
      }
      }
})

.state('tab.postGratitude', {
      url: '/postGratitude',
      views: {
       'tab-post1': {
       templateUrl: 'templates/tab-postGratitude.html',
       controller: 'PostGratitudeCtrl'
      }
      }
})

.state('tab.postChallenge', {
      url: '/postChallenge',
      views: {
       'tab-post1': {
       templateUrl: 'templates/tab-postChallenge.html',
       controller: 'PostChallengeCtrl'
      }
      }
})
  // Each tab has its own nav history stack:

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

.state('tab.location', {
    url: '/location',
    views: {
      'tab-location': {
        templateUrl: 'templates/tab-location.html',
        controller: 'LocationCtrl'
      }
    }
  })

  .state('tab.camera', {
      url: '/camera',
      views: {
        'tab-camera': {
          templateUrl: 'templates/tab-camera.html',
          controller: 'CameraCtrl'
        }
      }
    })

/*
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  */

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
