
 var app = angular.module('businessModule');
 app.factory('customerSer', function($http){
 return {
 navPermission : navPermission,
 setPermission : setPermission
 };
 function navPermission(){
 return $http.get('/customerlevel/setButtonPermission');
 }
 function setPermission(){
 return $http.get('/customerlevel/sonPermission');
 }
 });
