angular.module('starter.services', ['ngStorage'])

.service('LoginService', function($q, $http, $localStorage) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 

            $http.post("http://104.236.249.215:3000/login", { email: name, password: pw }).then(function(result) {
               
               if (result.data.status == "success!") {
                    $localStorage.userid = result.data.userID;
                   deferred.resolve('Welcome ' + name + '!');

               }
               else {

                 deferred.reject('Wrong credentials.');
               }
           }, function(error) {
               alert("There was a problem getting your profile.  Check the logs for details.");
               console.log(error);
           });
            /*
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            */
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})