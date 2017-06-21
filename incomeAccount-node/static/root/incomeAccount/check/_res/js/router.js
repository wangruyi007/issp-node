var app = angular.module('check',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.incomeAccount.check", {
        url: "/check",
        views: {
            "content@root.incomeAccount": {
                templateUrl: "root/incomeAccount/check/_res/html/index.html",
                controller: "checkCtrl"
            }
        }
    })
})