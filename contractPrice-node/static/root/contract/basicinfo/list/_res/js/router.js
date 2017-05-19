var app = angular.module('basicinfoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.contract.basicinfo.list",{
        url:"/list",
        views:{
            "content@root.contract.basicinfo":{
                templateUrl : "root/contract/basicinfo/list/_res/html/index.html",
                controller:'basicinfoListCtrl'
            }
        }
    }).state("root.contract.basicinfo.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.contract.basicinfo.list":{
                templateUrl : "root/contract/basicinfo/list/delete/_res/html/index.html",
                controller:'basicinfoDeleteCtrl'
            }
        }
    })
});