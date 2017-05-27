var app = angular.module('courseCollectList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.courseCollect.list",{
        url:"/list",
        views:{
            "content@root.compete.courseCollect":{
                templateUrl : "root/compete/courseCollect/list/_res/html/index.html",
                controller:'courseCollectListCtrl'
            }
        }
    }).state("root.compete.courseCollect.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.courseCollect.list":{
                templateUrl : "root/compete/courseCollect/list/delete/_res/html/index.html",
                controller:'courseCollectDeleteCtrl'
            }
        }
    })
});