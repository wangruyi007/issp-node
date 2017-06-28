var app = angular.module('businessModule', [
    {
        files: ['root/customer/_res/js/service.js']
    }
]);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/customer') {//默认加载列表
        $state.go('root.customer.basicinfo');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('changeCusnum',function(event,num){
        $scope.$broadcast('getCustomer',num)
    });
    $scope.$on('changeLevelName',function(event,name){
        $scope.$broadcast('levelName',name)
    });

}).controller('navCtrl',function($scope,$state,$location,customerSer){
    $scope.navCla='basicinfo';
    var active =$location.path().split('/')[3];
    $scope.navCla=active?active:'basicinfo';
    $scope.navClass= function(name){
       $scope.navCla=name
    }

    customerSer.navPermission().then(function(response){   //权限设置
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
    customerSer.setPermission().then(function(response){ //权限设置
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

    $scope.showsList = [
        {id:"1",item:"客户信息",menuList:[{name:'客户基本信息'},{name2:"客户详细信息"},{name3:"客户级别设置"},{name4:"邮件发送定制"}],showIs:false},
        {id:"2",item:"设置",menuList:[{name5:'设置'}],showIs:false}
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                /* angular.forEach(function(item){ showSubAble sublist*/
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

