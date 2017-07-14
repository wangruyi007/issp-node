var app = angular.module('supplier', [{
    files: ['root/supplier/_res/js/service.js']
}]);
app.controller('supplierCtrl', function ($scope,$state) {
    if ($state.current.url == '/supplier') {//默认加载列表
        $state.go('root.supplier.basicinfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('listId', msg)
    });
    $scope.$on('socialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location,supplierSer){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };


    supplierSer.navPermission().then(function(response){   //权限设置
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide= false;
        }
    });
    supplierSer.setPermission().then(function(response){ //权限设置
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList =[
        {id:"1",item:"供应商信息管理",menuList:[{name:'供应商基本信息'},{name2:"供应商类型管理"}],showIs:true},
        {id:"2",item:"设置",menuList:[{name3:'设置'}],showIs:true}
    ];

    $scope.showMenu = function(obj,event){
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };

});
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title = $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});

/*
var app = angular.module('supplier', []);
app.controller('supplierCtrl', function ($scope,$state) {
    if ($state.current.url == '/supplier') {//默认加载列表
        $state.go('root.supplier.basicinfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('listId', msg)
    });
    $scope.$on('socialListId',function(event,msg) {
        $scope.$broadcast('socialListId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='basicinfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    }
});*/



