var app = angular.module('departmentList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.department.list",{
        url:"/list",
        views:{
            "content@root.organize.management.department":{
                templateUrl : "root/organize/management/department/list/_res/html/index.html",
                controller:'departmentListCtrl'
            }
        }
    }).state("root.organize.management.department.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.organize.management.department.list":{
                templateUrl : "root/organize/management/department/list/delete/_res/html/index.html",
                controller:'departmentDeleteCtrl'
            }
        }
    }).state("root.organize.management.department.list.congeal[12]",{
        url:"/congeal[12]?id=",
        views:{
            "modal@root.organize.management.department.list":{
                templateUrl : "root/organize/management/department/list/congeal/_res/html/index.html",
                controller:'departmentCongealCtrl'
            }
        }
    })
});