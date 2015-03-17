angular.module('starter.controllers', ['ngStorage'])

.controller('ProfileCtrl', function($scope, $localStorage, $http) {
  $scope.data = {};

  if($localStorage.hasOwnProperty("userid") !== true) {
    $state.go('login');
  }
  else {
    $http.get("http://104.236.249.215:3000/profile/" + $localStorage.userid).then(function(result) {
               
               if (result.data.status == "error") {
                  alert("There was a problem getting your profile.  Check the logs for details.");
               }
               else {

                 $scope.data.profile = result.data;

              }
           }, function(error) {
               alert("There was a problem getting your profile.  Check the logs for details.");
               console.log(error);
           });
  }
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, $localStorage) {
  $scope.data = {};
  if($localStorage.hasOwnProperty("userid") === true) {
    $state.go('tab.profile');
  }
  $scope.login = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.profile');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('Post1Ctrl', function($scope, $ionicPopup, $state) {
    $scope.data = {};

    $scope.post1 = function() {
        //LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.post1');
        //})
    }
})

.controller('PostDesireCtrl', function($scope, $ionicPopup, $state, $localStorage, $http) {
    $scope.data = {};

    $scope.postDesire = function() {
      if($scope.data.desire == ""){
        alert("Please Enter Desire");
      }
      else {
        $http.post("http://104.236.249.215:3000/makepost", { type: 'desire', userid: $localStorage.userid, message: $scope.data.desire }).then(function(result) {
               
               if (result.data.status == "success!") {
                 $state.go('tab.profile');

               }
               else {

                 alert('Failed to Post');
               }
           }, function(error) {
               alert("There was a problem posting your desire.");
               console.log(error);
           });
      }
      
    }
})

.controller('PostGratitudeCtrl', function($scope, $ionicPopup, $state, $localStorage, $http) {
    $scope.data = {};
    $scope.postGratitude = function() {
  if($scope.data.gratitude == ""){
        alert("Please Enter Gratitude");
      }
      else {
        $http.post("http://104.236.249.215:3000/makepost", { type: 'gratitude', userid: $localStorage.userid, message: $scope.data.desire }).then(function(result) {
               
               if (result.data.status == "success!") {
                 $state.go('tab.profile');

               }
               else {

                 alert('Failed to Post');
               }
           }, function(error) {
               alert("There was a problem posting your gratitude.");
               console.log(error);
           });
      }
      
    }
})

.controller('PostChallengeCtrl', function($scope, $ionicPopup, $state, $localStorage, $http) {
    $scope.data = {};
    $scope.postGratitude = function() {
  if($scope.data.gratitude == ""){
        alert("Please Enter Gratitude");
      }
      else {
        $http.post("http://104.236.249.215:3000/makepost", { type: 'gratitude', userid: $localStorage.userid, message: $scope.data.desire }).then(function(result) {
               
               if (result.data.status == "success!") {
                 $state.go('tab.profile');

               }
               else {

                 alert('Failed to Post');
               }
           }, function(error) {
               alert("There was a problem posting your gratitude.");
               console.log(error);
           });
      }
      
    }
})

.controller('LocationCtrl', function($scope, $state) {

  // PLEASE NOTE:  you must install the apache cordova geolocation plugin for this to function.
  // You can install it with the following command:  ionic plugin add org.apache.cordova.geolocation

  $scope.locationString = "Please click the button above to get your location.";

  // this function is bound to the button on the location page which gets the current location
  $scope.getCurrentLocation = function() {

    // ensure that the geolocator is available
    // on error, send the appropriate message
    if (navigator.geolocation) {

      // this function gets the current location of the device
      // the current location will be stored in the position attribute variable
      // the device latitude and longitude are located in the position.coords array
      navigator.geolocation.getCurrentPosition(function(position) {

        // get the latitude and longitude and create a string displaying everything
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        $scope.locationString = 'Your current location is... Latitude: '+lat+' and Longitude: '+lng;
        $state.go('tab.location');
      });
    } else {
      $scope.locationString = "Sorry, but the computer Gremlins struck again!  Yell at Rob!";
      $state.go('tab.location');
    }
    
  }
})

.controller('CameraCtrl', function($scope, $state) {

  // PLEASE NOTE:  you must install the apache cordova camera plugin for this to function.
  // You can install it with the following command:  ionic plugin add org.apache.cordova.camera

  // set the default image URI (a color bar image)
  $scope.imageURI = 'http://www.dvinfo.net/forum/attachments/view-video-display-hardware-software/4853d1193613730-smpte-color-bars-bars_pal.jpg';

  // the takePhoto function attached to the button
  $scope.takePhoto = function() {

    // default camera options, please see https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
    // for the complete list
    var cameraOptions = {
      targetWidth: 300,
      targetHeight: 300
    };

    // perform the api call to take the picture.  
    // The success function has a URI containing the file location on the phone of the image
    // The error function sends an alert that an issue has occured
    // The cameraOptions are defined above
    navigator.camera.getPicture(function(imageURI) {
      
      $scope.imageURI = imageURI;
      $state.go('tab.camera');

    }, function(err) {

      alert("Oops!  Can't take your photo!  Either you backed out before saving a photo, or you are not on a device.  Camera will not work from the emulator...");
    }, cameraOptions);
  }
});