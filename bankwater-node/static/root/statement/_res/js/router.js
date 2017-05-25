var app = angular.module('statement',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.statement", {
        url: "/statement",
        views: {
            "content@root": {
                templateUrl: "root/statement/_res/html/index.html",
                controller: "statementCtrl"
            },"nav@root": {
                templateUrl: "root/statement/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})