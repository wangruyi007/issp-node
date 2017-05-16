var app = angular.module('summary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.finance.usecar", {
        url : "/usecar",
        views : {
            "content@root.finance" : {
                templateUrl : "root/finance/usecar/_res/html/index.html",
                controller:"usecarCtrl"
            }
        }
    })
});