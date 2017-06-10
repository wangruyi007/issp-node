var app = angular.module('messageList', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.otherexpenses.expenses.message.list",{
        url:"/list",
        views:{
            "content@root.otherexpenses.expenses.message":{
                templateUrl : "root/otherexpenses/expenses/message/list/_res/html/index.html",
                controller:'messageListCtrl'
            }
        }
    }).state("root.otherexpenses.expenses.message.list.delete[12]",{
        url:"/delete[12]?id=",
        views:{
            "modal@root.otherexpenses.expenses.message.list":{
                templateUrl : "root/otherexpenses/expenses/message/list/delete/_res/html/index.html",
                controller:'messageDeleteCtrl'
            }
        }
    })
});