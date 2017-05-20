var app = angular.module('taxInfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.payable.taxInfo", {
        url : "/taxInfo",
        views : {
            "content@root.payable" : {
                templateUrl : "root/payable/taxInfo/_res/html/index.html",
                controller:"taxInfoCtrl"
            },"menu@root.payable" : {
                templateUrl : "root/payable/taxInfo/_res/html/menu.html",
                controller:"taxInfoMenuCtrl"
            }
        }
    }).state("root.payable.taxInfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.payable.taxInfo":{
                templateUrl : "root/payable/taxInfo/add/_res/html/index.html",
                controller:'taxInfoAddCtrl'
            }
        }
    }).state("root.payable.taxInfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.payable.taxInfo":{
                templateUrl : "root/payable/taxInfo/edit/_res/html/index.html",
                controller:'taxInfoEditCtrl'
            }
        }
    }).state("root.payable.taxInfo.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.payable.taxInfo":{
                templateUrl : "root/payable/taxInfo/summary/_res/html/index.html",
                controller:'taxInfoSummaryCtrl'
            }
        }
    }).state("root.payable.taxInfo.tax[12]",{
        url:"/tax[12]",
        views:{
            "content@root.payable.taxInfo":{
                templateUrl : "root/payable/taxInfo/tax/_res/html/index.html",
                controller:'taxInfoSummaryTaxCtrl'
            }
        }
    })
});