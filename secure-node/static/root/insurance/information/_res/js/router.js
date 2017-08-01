var app = angular.module('information', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.information", {
        url : "/information",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/information/_res/html/index.html",
                controller:"inforCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/information/_res/html/menu.html",
                controller:"inforMenuCtrl"
            }
        }
    }).state("root.insurance.information.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.information":{
                templateUrl : "root/insurance/information/list/_res/html/index.html",
                controller:'inforListCtrl'
            }
        }
    }).state("root.insurance.information.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.information":{
                templateUrl : "root/insurance/information/edit/_res/html/index.html",
                controller:'inforEditCtrl'
            }
        }
    })
});