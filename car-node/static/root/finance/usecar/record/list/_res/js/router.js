var app = angular.module('angleList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.usecar.record.list",{
        url:"/list",
        views:{
            "content@root.finance.usecar.record":{
                templateUrl : "root/finance/usecar/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    })
});