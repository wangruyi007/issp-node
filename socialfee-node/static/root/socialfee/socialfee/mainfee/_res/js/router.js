var app = angular.module('mainfee', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.socialfee.socialfee.mainfee", {
        url : "/mainfee",
        views : {  
            "content@root.socialfee.socialfee" : {
                templateUrl : "root/socialfee/socialfee/mainfee/_res/html/index.html",
                controller:"mainfeeCtrl"
            },"menu@root.socialfee.socialfee" : {
                templateUrl : "root/socialfee/socialfee/mainfee/_res/html/menu.html",
                controller:"mainfeeMenuCtrl"
            }
        }
    }).state("root.socialfee.socialfee.mainfee.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/add/_res/html/index.html",
                controller:'mainfeeAddCtrl'
            }
        }
    }).state("root.socialfee.socialfee.mainfee.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/edit/_res/html/index.html",
                controller:'mainfeeEditCtrl'
            }
        }
    }).state("root.socialfee.socialfee.mainfee.collect[12]",{
        url:"/collect[12]?id=",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/collect/_res/html/index.html",
                controller:'collectCtrl'
            }
        }
    }).state("root.socialfee.socialfee.mainfee.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/view/_res/html/index.html",
                controller:'viewCtrl'
            }
        }
    }).state("root.socialfee.socialfee.mainfee.generate[12]",{
        url:"/generate[12]?id=",
        views:{
            "content@root.socialfee.socialfee.mainfee":{
                templateUrl : "root/socialfee/socialfee/mainfee/generate/_res/html/index.html",
                controller:'generateCtrl'
            }
        }
    })
});