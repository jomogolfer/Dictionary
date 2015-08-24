'use strict';

var app = angular.module('myApp', ['ngSanitize','ngRoute','dictionaryControllers','dictionaryFilters']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/word', {
        templateUrl: 'templates/word.html',
        controller: 'wordCtrl'
      }).     
      otherwise({
        redirectTo: '/'
      });
  }]);





