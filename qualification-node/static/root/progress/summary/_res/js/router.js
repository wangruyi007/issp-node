var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.progress.summary", {
        url : "/summary",
        views : {
            "content@root.progress" : {
                templateUrl : "root/progress/summary/_res/html/index.html",
                controller:"summaryCtrl"
            },"menu@root.progress.summary" : {
                templateUrl : "root/progress/summary/_res/html/menu.html",
                controller:"summaryMenuCtrl"
            }
        }
    }).state("root.progress.summary.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/add/_res/html/index.html",
                controller:'addCtrl'
            }
        }
    }).state("root.progress.summary.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.progress.summary":{
                templateUrl : "root/progress/summary/edit/_res/html/index.html",
                controller:'editCtrl'
            }
        }
    })
});