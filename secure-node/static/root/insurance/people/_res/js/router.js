var app = angular.module('people', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.people", {
        url : "/people",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/people/_res/html/index.html",
                controller:"peopleCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/people/_res/html/menu.html",
                controller:"peopleMenuCtrl"
            }
        }
    }).state("root.insurance.people.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.people":{
                templateUrl : "root/insurance/people/list/_res/html/index.html",
                controller:'peopleListCtrl'
            }
        }
    }).state("root.insurance.people.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.people":{
                templateUrl : "root/insurance/people/edit/_res/html/index.html",
                controller:'peopleEditCtrl'
            }
        }
    })
});