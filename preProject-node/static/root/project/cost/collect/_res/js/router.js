var app = angular.module('costCollect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.project.cost.collect",{
        url:"/collect",
        views:{
            "content@root.project.cost":{
                templateUrl : "root/project/cost/collect/_res/html/index.html",
                controller:'costCollectCtrl'
            }
        }
    })
});
