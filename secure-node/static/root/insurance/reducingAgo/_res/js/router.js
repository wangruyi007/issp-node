var app = angular.module('reducingAgo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.reducingAgo", {
        url : "/reducingAgo",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/reducingAgo/_res/html/index.html",
                controller:"reduAgoCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/reducingAgo/_res/html/menu.html",
                controller:"reduAgoMenuCtrl"
            }
        }
    }).state("root.insurance.reducingAgo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.reducingAgo":{
                templateUrl : "root/insurance/reducingAgo/list/_res/html/index.html",
                controller:'reduAgoListCtrl'
            }
        }
    }).state("root.insurance.reducingAgo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.reducingAgo":{
                templateUrl : "root/insurance/reducingAgo/add/_res/html/index.html",
                controller:'reduAgoAddCtrl'
            }
        }
    }).state("root.insurance.reducingAgo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.reducingAgo":{
                templateUrl : "root/insurance/reducingAgo/edit/_res/html/index.html",
                controller:'reduAgoEditCtrl'
            }
        }
    })
});