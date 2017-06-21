var app = angular.module('expenses',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.otherexpenses.expenses", {
        url: "/expenses",
        views: {
            "content@root": {
                templateUrl: "root/otherexpenses/expenses/_res/html/index.html",
                controller: "expensesCtrl"
            }
        }
    })
})