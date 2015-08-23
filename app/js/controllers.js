app.controller('myCtrl', function($scope, $sce, $http) {
  $http.get("words/data.json").success(function (response) {
    $scope.words = response.words;
  });

	$scope.wordmatch = function (word) {
        if (!angular.isDefined(word) || 
            !angular.isDefined($scope.search)) {
            return false;
        }
        var wordMatch = false;

        if (angular.isDefined($scope.search.word) && 
            $scope.search.word.length > 0) {
          
            if (angular.isDefined(word.de)) {
            	    wordMatch = wordMatch || 
                    word.de.toLowerCase().indexOf($scope.search.word.toLowerCase()) > -1;
                                               }
            if (angular.isDefined(word.en)) {
                wordMatch = wordMatch || 
                    word.en.toLowerCase().indexOf($scope.search.word.toLowerCase()) > -1;
            }
        }
	        return wordMatch;
    };
});