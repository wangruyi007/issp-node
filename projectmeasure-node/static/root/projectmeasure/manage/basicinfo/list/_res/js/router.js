var app = angular.module('basicinfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.basicinfo.list",{
        url:"/list",
        views:{
            "content@root.projectmeasure.manage.basicinfo":{
                templateUrl : "root/projectmeasure/manage/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.projectmeasure.manage.basicinfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.projectmeasure.manage.basicinfo.list":{
                templateUrl : "root/projectmeasure/manage/basicinfo/list/delete/_res/html/index.html",
                controller:'basicinfoDeleteCtrl'
            }
        }
    })
});