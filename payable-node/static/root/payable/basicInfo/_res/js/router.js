var app = angular.module('basicInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payable.basicInfo", {
        url : "/basicInfo",
        views : {
            "content@root.payable" : {
                templateUrl : "root/payable/basicInfo/_res/html/index.html",
                controller:"basicInfoCtrl"
            },"menu@root.payable" : {
                templateUrl : "root/payable/basicInfo/_res/html/menu.html",
                controller:"basicInfoMenuCtrl"
            }
        }
    }).state("root.payable.basicInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/add/_res/html/index.html",
                controller:'basicInfoAddCtrl'
            }
        }
    }).state("root.payable.basicInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/edit/_res/html/index.html",
                controller:'basicInfoEditCtrl'
            }
        }
    }).state("root.payable.basicInfo.proAdd[12]",{
        url:"/proAdd[12]?id=",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/proAdd/_res/html/index.html",
                controller:'basicInfoProAddCtrl'
            }
        }
    }).state("root.payable.basicInfo.share[12]",{
        url:"/share[12]?id=",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/share/_res/html/index.html",
                controller:'basicInfoShareCtrl'
            }
        }
    }).state("root.payable.basicInfo.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/summary/_res/html/index.html",
                controller:'basicInfoSummaryCtrl'
            }
        }
    }).state("root.payable.basicInfo.tax[12]",{
        url:"/tax[12]",
        views:{
            "content@root.payable.basicInfo":{
                templateUrl : "root/payable/basicInfo/tax/_res/html/index.html",
                controller:'basicInfoTaxCtrl'
            }
        }
    })
});