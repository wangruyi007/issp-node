var app = angular.module('tax', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.tax", {
        url : "/tax",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/tax/_res/html/index.html",
                controller:"taxCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/tax/_res/html/menu.html",
                controller:"taxMenuCtrl"
            }
        }
    }).state("root.compete.tax.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.tax":{
                templateUrl : "root/compete/tax/add/_res/html/index.html",
                controller:'taxAddCtrl'
            }
        }
    }).state("root.compete.tax.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.tax":{
                templateUrl : "root/compete/tax/edit/_res/html/index.html",
                controller:'taxEditCtrl'
            }
        }
    })
});