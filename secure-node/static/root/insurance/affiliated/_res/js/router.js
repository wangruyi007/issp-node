var app = angular.module('affiliated', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.insurance.affiliated", {
        url : "/affiliated",
        views : {
            "content@root.insurance" : {
                templateUrl : "root/insurance/affiliated/_res/html/index.html",
                controller:"affilCtrl"
            },"menu@root.insurance" : {
                templateUrl : "root/insurance/affiliated/_res/html/menu.html",
                controller:"affilMenuCtrl"
            }
        }
    }).state("root.insurance.affiliated.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.insurance.affiliated":{
                templateUrl : "root/insurance/affiliated/list/_res/html/index.html",
                controller:'affilListCtrl'
            }
        }
    }).state("root.insurance.affiliated.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.insurance.affiliated":{
                templateUrl : "root/insurance/affiliated/add/_res/html/index.html",
                controller:'affilAddCtrl'
            }
        }
    }).state("root.insurance.affiliated.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.insurance.affiliated":{
                templateUrl : "root/insurance/affiliated/edit/_res/html/index.html",
                controller:'affilEditCtrl'
            }
        }
    }).state("root.insurance.affiliated.completion[12]",{
        url:"/completion[12]?id=&page=",
        views:{
            "content@root.insurance.affiliated":{
                templateUrl : "root/insurance/affiliated/completion/_res/html/index.html",
                controller:'affilCompletionCtrl'
            }
        }
    })
});