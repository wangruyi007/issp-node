var app = angular.module('summaryDepartmentSummary', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.summary.departmentSummary",{
        url:"/departmentSummary",
        views:{
            "content@root.compete.summary":{
                templateUrl : "root/compete/summary/departmentSummary/_res/html/index.html",
                controller:'departmentSummaryCtrl'
            }
        }
    })
});