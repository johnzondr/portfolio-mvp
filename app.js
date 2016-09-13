angular.module('developedbyjohn', ['ui.router'])

  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base', {
        abstract: true,
        templateUrl: '/pages/base.html',
        url: '',
      })
      .state('base.journal', {
        url: '/',
        templateUrl: '/pages/journal.html',
        controller: 'journalCtrl'
      })
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

  })

  .run(function ($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  })

  .filter('html',function($sce){
      return function(input){
          return $sce.trustAsHtml(input);
      }
  })

  .controller('journalCtrl', function($scope, articlesService) {
    console.log('hello');
    articlesService.get().then(function(articles) {
      console.log(articles);
      $scope.articles = articles;
    });
  })
;