angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    // 1. Hits line 43 of index.js
    this.login = function( user ) {
        return $http.post('/login', user)
    };

    // 2. Hits line 54 of index.js
    this.getFriends = function() {
    	return $http.get('/profiles')
    };
  
    // 3. Hits line 56 of index.js
    this.getLoggedUser = function() {
        return $http.get('/loggedUser')
    }
});

