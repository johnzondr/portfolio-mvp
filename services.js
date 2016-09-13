angular.module('developedbyjohn')
.factory('articlesService', function($http, $sce){
  
  var service = {
    get: getPosts,
  }
  return service;

  function getPosts() {
    return $http.get('http://developedbyjohn.com/wp/wp-json/wp/v2/posts', {params: {per_page: '5'}}).then(function(response){
    

      console.log($sce.trustAsHtml('asddasd asdsd'))
      response.data.forEach(function(article) {
         article.title.rendered = $sce.trustAsHtml(article.title.rendered);
      });
    // $http.get('wp/wp-json/wp/v2/posts').then(function(response){
      return response.data;
    })
  }
});