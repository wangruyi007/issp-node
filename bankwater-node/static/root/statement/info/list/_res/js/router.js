var app = angular.module('infoList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.statement.info.list", {
        url : "/list",
        views : {
            "content@root.statement.info" : {
                templateUrl : "root/statement/info/list/_res/html/index.html",
                controller:"infoListCtrl"
            }
        }
    }).state("root.statement.info.list.delete[12]", {
        url : "/delete[12]?id=",
        views : {
            "modal@root.statement.info.list" : {
                templateUrl : "root/statement/info/list/delete/_res/html/index.html",
                controller:"infoDelCtrl"
            }
        }
    })
});