var app = angular.module('dispatchList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.dispatchList", {
        url : "/dispatchList",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/dispatchList/_res/html/index.html",
                controller:"dispatchListCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/dispatchList/_res/html/menu.html",
                controller:"dispatchMenuCtrl"
            }
        }
    }).state("root.businessContract.dispatchList.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/add/_res/html/index.html",
                controller:'dispatchAddCtrl'
            }
        }
    }).state("root.businessContract.dispatchList.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessContract.dispatchList":{
                templateUrl : "root/businessContract/dispatchList/edit/_res/html/index.html",
                controller:'dispatchEditCtrl'
            }
        }
    })
});