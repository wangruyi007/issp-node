var app = angular.module('salaryconfirmList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.salaryconfirm.list",{
        url:"/list",
        views:{
            "content@root.compete.salaryconfirm":{
                templateUrl : "root/compete/salaryconfirm/list/_res/html/index.html",
                controller:'salaryconfirmListCtrl'
            }
        }
    }).state("root.compete.salaryconfirm.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.compete.salaryconfirm.list":{
                templateUrl : "root/compete/salaryconfirm/list/delete/_res/html/index.html",
                controller:'salaryconfirmDeleteCtrl'
            }
        }
    })
});