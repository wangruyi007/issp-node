var app = angular.module('personalTask', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.personalTask", {
        url : "/personalTask",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/personalTask/_res/html/index.html",
                controller:"taskCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/personalTask/_res/html/menu.html",
                controller:"taskMenuCtrl"
            }
        }
    }).state("root.projectProcessed.personalTask.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/add/_res/html/index.html",
                controller:'taskAddCtrl'
            }
        }
    }).state("root.projectProcessed.personalTask.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectProcessed.personalTask":{
                templateUrl : "root/projectProcessed/personalTask/edit/_res/html/index.html",
                controller:'taskEditCtrl'
            }
        }
    })
});