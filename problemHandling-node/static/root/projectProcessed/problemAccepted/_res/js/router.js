var app = angular.module('problemAccepted', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectProcessed.problemAccepted", {
        url : "/problemAccepted",
        views : {
            "content@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/problemAccepted/_res/html/index.html",
                controller:"problemCtrl"
            },"menu@root.projectProcessed" : {
                templateUrl : "root/projectProcessed/problemAccepted/_res/html/menu.html",
                controller:"problemMenuCtrl"
            }
        }
    }).state("root.projectProcessed.problemAccepted.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/add/_res/html/index.html",
                controller:'problemAddCtrl'
            }
        }
    }).state("root.projectProcessed.problemAccepted.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectProcessed.problemAccepted":{
                templateUrl : "root/projectProcessed/problemAccepted/edit/_res/html/index.html",
                controller:'problemEditCtrl'
            }
        }
    })
});