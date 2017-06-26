var app = angular.module('developModule', [{
    files: ['root/developProgress/_res/js/service.js']
}]);
app.controller('progressCtrl', function ($scope,$state) {
    if ($state.current.url == '/developProgress') {//默认加载列表
        $state.go('root.developProgress.plan');
    }

}).controller('navCtrl',function($scope,$state,$location,developSer){
    $scope.navCla='yearPlan';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'yearPlan';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    developSer.navPermission().then(function(response){
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
    developSer.setPermission().then(function(response){
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
        {id:"1",item:"计划管理",menuList:[{name:'年计划'},{name2:"月计划"},{name3:"周计划"},{name4:"日计划"}],showIs:true},
        {id:"2",item:"市场管理",menuList:[{name5:'市场需求分析'},{name6:"目标信息"},{name7:"市场挖掘"},{name8:"市场调研"},{name9:"市场测算"}],showIs:true},
        {id:"3",item:"其他",menuList:[{name10:'业务类型管理'},{name11:"业务方向科目"}],showIs:true},
        {id:"4",item:"设置",menuList:[{name12:'设置'}],showIs:true}
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