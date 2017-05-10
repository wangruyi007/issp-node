var app = angular.module('rightsinterests', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.sort.rightsinterests", {
        url : "/rightsinterests",
        views : {  
            "content@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/rightsinterests/_res/html/index.html",
                controller:"rightsinterestsCtrl"
            },"menu@root.initialize.sort" : {
                templateUrl : "root/initialize/sort/rightsinterests/_res/html/menu.html",
                controller:"rightsinterestsMenuCtrl"
            }
        }
    }).state("root.initialize.sort.rightsinterests.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.sort.rightsinterests":{
                templateUrl : "root/initialize/sort/rightsinterests/add/_res/html/index.html",
                controller:'rightsinterestsAddCtrl'
            }
        }
    }).state("root.initialize.sort.rightsinterests.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.initialize.sort.rightsinterests":{
                templateUrl : "root/initialize/sort/rightsinterests/edit/_res/html/index.html",
                controller:'rightsinterestsEdit'
            }
        }
    })
});