angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
    friendService.getLoggedUser().then(function(response) {
        console.log("User: ", response)
        $scope.currentUser = response.data;
    })
    friendService.getFriends().then(response => {
        console.log("Friends: ", response)
        $scope.friends = response.data.message
    })
});