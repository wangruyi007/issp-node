var app = angular.module('costCollectPro', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.cost.collectPro",{
        url:"/collectPro",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/collectPro/_res/html/index.html",
                controller:'costCollectProCtrl'
            }
        }
    })
});
