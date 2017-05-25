var app = angular.module('interactContact', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessInteraction.interactContact", {
        url : "/interactContact",
        views : {
            "content@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/interactContact/_res/html/index.html",
                controller:"contactCtrl"
            },"menu@root.businessInteraction" : {
                templateUrl : "root/businessInteraction/interactContact/_res/html/menu.html",
                controller:"contactMenuCtrl"
            }
        }
    }).state("root.businessInteraction.interactContact.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessInteraction.interactContact":{
                templateUrl : "root/businessInteraction/interactContact/add/_res/html/index.html",
                controller:'contactAddCtrl'
            }
        }
    }).state("root.businessInteraction.interactContact.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessInteraction.interactContact":{
                templateUrl : "root/businessInteraction/interactContact/edit/_res/html/index.html",
                controller:'contactEditCtrl'
            }
        }
    }).state("root.businessInteraction.interactContact.messageList[12]",{
        url:"/messageList[12]?id=",
        views:{
            "content@root.businessInteraction.interactContact":{
                templateUrl : "root/businessInteraction/interactContact/messageList/_res/html/index.html",
                controller:'messageListCtrl'
            }
        }
    }).state("root.businessInteraction.interactContact.messageAdd[12]",{
        url:"/messageAdd[12]?id=",
        views:{
            "content@root.businessInteraction.interactContact":{
                templateUrl : "root/businessInteraction/interactContact/messageAdd/_res/html/index.html",
                controller:'messageAddCtrl'
            }
        }
    })
});