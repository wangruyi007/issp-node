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
    })
});