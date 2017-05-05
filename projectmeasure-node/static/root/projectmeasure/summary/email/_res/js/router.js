var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.summary.email", {
        url : "/email",
        views : {  
            "content@root.projectmeasure.summary" : {
                templateUrl : "root/projectmeasure/summary/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.projectmeasure.summary" : {
                templateUrl : "root/projectmeasure/summary/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.projectmeasure.summary.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.summary.email":{
                templateUrl : "root/projectmeasure/summary/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.projectmeasure.summary.email.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectmeasure.summary.email":{
                templateUrl : "root/projectmeasure/summary/email/edit/_res/html/index.html",
                controller:'EditCtrl'
            }
        }
    })
});