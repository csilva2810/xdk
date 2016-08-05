angular.module('gs1').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'views/home.html'
    });

    $urlRouterProvider.otherwise("/");

  }
]);