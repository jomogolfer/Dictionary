/* Services 


var dictionaryServices = angular.module('dictionaryServices', ['ngResource']);

dictionaryServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('word/:wordId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

  */
