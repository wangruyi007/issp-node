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
    })
});