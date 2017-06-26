var app = angular.module('contract',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.contract", {
        url: "/contract",
        views: {
            "content@root.business": {
                templateUrl: "root/business/contract/_res/html/index.html",
                controller: "contractCtrl"
            }
        }
    })
})