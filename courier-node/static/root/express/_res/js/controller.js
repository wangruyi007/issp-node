var app = angular.module('expressModel', [{
    files: ['root/express/_res/js/service.js']
}]);
app.controller('expressCtrl', function ($scope,$state) {
    if ($state.current.url == '/express') {//默认加载列表
        $state.go('root.express.dispatcher');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,expressSer){
    $scope.navCla='company';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'company';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    // 前面下拉导航权限
    expressSer.navPermission().then(function(response){
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
    // 设置导航权限
    expressSer.setPermission().then(function(response){
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
        {id:"1",item:"快递收发管理",menuList:[{name1:"快递收发",msg:'dispatcher'}],showIs:false},
        {id:"2",item:"快递公司",menuList:[{name2:"快递公司信息",msg:'company'}],showIs:false},
        {id:"3",item:"设置",menuList:[{name3:'设置',msg:'setting'}],showIs:false}
    ];
    if(active){
        for(var i = 0; i < $scope.showsList.length; i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0; j < n.length; j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
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
//绑定的数据出现很多显示不完全的时候,后面加小数点显示,之后双击可以显示完全部内容
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
                        title =  $(".list-head span").eq(Index).text();
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
//自定义过滤器
app.filter('cover',function(){
    return function(val){
        var result;
        switch(val){
            case "LOCAL":
                result = "同城";
                break;
            case "PROVINCE":
                result = "省内";
                break;
            case "OUTSIDE":
                result = "省外";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
            case "PRECIOUS":
                result = "贵重件";
                break;
            case "URGENCY":
                result = "紧急件";
                break;
            case "COMMON":
                result = "普通件";
                break;
        }
        return result;
    }

});
