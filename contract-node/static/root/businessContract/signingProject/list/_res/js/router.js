var app = angular.module('signingList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.signingProject.list",{
        url:"/list",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/list/_res/html/index.html",
                controller:'signingListCtrl'
            }
        }
    }).state("root.businessContract.signingProject.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.businessContract.signingProject.list":{
                templateUrl : "root/businessContract/signingProject/list/delete/_res/html/index.html",
                controller:'signingDeleteCtrl'
            }
        }
     })
});