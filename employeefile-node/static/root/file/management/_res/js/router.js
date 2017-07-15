var app = angular.module('management', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.file.management", {
        url : "/management",
        views : {
            "content@root.file" : {
                templateUrl : "root/file/management/_res/html/index.html",
                controller:"managementCtrl"
            },"menu@root.file" : {
                templateUrl : "root/file/management/_res/html/menu.html",
                controller:"managementMenuCtrl"
            }
        }
    }).state("root.file.management.list[12]",{
        url:"/list[12]",
        views:{
            "content@root.file.management":{
                templateUrl : "root/file/management/list/_res/html/index.html",
                controller:'managementListCtrl'
            }
        }
    }).state("root.file.management.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.file.management":{
                templateUrl : "root/file/management/upload/_res/html/index.html",
                controller:'manageUploadCtrl'
            }
        }
    })
});