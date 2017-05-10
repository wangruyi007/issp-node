var app = angular.module('firstsubject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.initialize.setting.firstsubject", {
        url : "/firstsubject",
        views : {  
            "content@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/firstsubject/_res/html/index.html",
                controller:"firstsubjectCtrl"
            },"menu@root.initialize.setting" : {
                templateUrl : "root/initialize/setting/firstsubject/_res/html/menu.html",
                controller:"firstsubjectMenuCtrl"
            }
        }
    }).state("root.initialize.setting.firstsubject.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/add/_res/html/index.html",
                controller:'firstsubjectAddCtrl'
            }
        }
    }).state("root.initialize.setting.firstsubject.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.initialize.setting.firstsubject":{
                templateUrl : "root/initialize/setting/firstsubject/edit/_res/html/index.html",
                controller:'EditCtrl'
            }
        }
    })
});