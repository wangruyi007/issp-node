var app = angular.module('increaseAgo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.increaseAgo", {
        url : "/increaseAgo",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/increaseAgo/_res/html/index.html",
                controller:"increAgoCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/increaseAgo/_res/html/menu.html",
                controller:"increAgoMenuCtrl"
            }
        }
    }).state("root.insurance.increaseAgo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.increaseAgo":{
                templateUrl : "root/insurance/increaseAgo/list/_res/html/index.html",
                controller:'increAgoListCtrl'
            }
        }
    }).state("root.insurance.increaseAgo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.increaseAgo":{
                templateUrl : "root/insurance/increaseAgo/add/_res/html/index.html",
                controller:'increAgoAddCtrl'
            }
        }
    }).state("root.insurance.increaseAgo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.increaseAgo":{
                templateUrl : "root/insurance/increaseAgo/edit/_res/html/index.html",
                controller:'increEditCtrl'
            }
        }
    }).state("root.insurance.increaseAgo.completion[12]",{
        url:"/completion[12]?id=&page=",
        views:{
            "content@root.insurance.increaseAgo":{
                templateUrl : "root/insurance/increaseAgo/completion/_res/html/index.html",
                controller:'increCompletionCtrl'
            }
        }
    })
});