var app = angular.module('list', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.progress.summary.list", {
        url : "/list",
        views : {
            "content@root.progress.summary" : {
                templateUrl : "root/progress/summary/list/_res/html/index.html",
                controller:"listCtrl"
            }
        }
    }).state("root.progress.summary.list.delete[12]", {
        url : "/delete[12]?id=",
        views : {
            "modal@root.progress.summary.list" : {
                templateUrl : "root/progress/summary/list/delete/_res/html/index.html",
                controller:"deleteCtrl"
            }
        }
    })
});