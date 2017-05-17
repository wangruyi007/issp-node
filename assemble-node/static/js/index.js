$(document).ready(function () {
    $(".select-list .name-thing").on('click','p',function(){
        $(this).addClass("current").siblings().removeClass("current")
    });
    $('.basic-module p .gou').on('click',function(){
        if(!$(this).hasClass('aright')){
            $(this).addClass('aright').children('.gou-img').show();
            $(this).parents('p').addClass('current');
        }else{
            $(this).removeClass('aright').children('.gou-img').hide();
            $(this).parents('p').removeClass('current');
        }
    });
    $.get('/module/list',function(response){
        if(response.code==0){
            var moduleList='',selList='';
            $.each(response.data,function(index,item){
                moduleList+="<p data-id='%{id}' onclick='module(\"%{name}\")'>%{name}</p>".format({name:item.name,id:item.id});
                selList+="<option value='%{name}'>%{name}</option>".format({name:item.name});
            });
            $('.name-thing').html(moduleList);
            $('.select-mod').html(selList);
            var $module = $('.name-thing p');
            $module.eq(0).addClass('current');
            var moduleName = $module.eq(0).text();
            module(moduleName)
        }
    });
});
function module(name){
    var data={
        name:name
    }
    $.ajax({
        url:"/module/listname",
        type:"get",
        data:data,
        success:function(response){
            if(response.code==0){
                var subList='';
                $.each(response.data.relations,function(index,item){
                    subList+=("<p class='%{check}' data-relation='%{relation}' data-id='%{id}'><i class='gou %{aright}' onclick='select(this)'>" +
                    "<img src='images/type/gou.png' class='gou-img'/></i><span>%{subname}</span></p>").format({
                        subname:item.name,id:item.id,check:item.checkType=="CHECK"?"current":"",
                        relation:item.relationId,aright:item.checkType=="CHECK"?"aright":""
                    });
                });
                $('.item').html(subList);
            }
        }
    })
}
function select(self){
    if(!$(self).hasClass('aright')){
        $(self).addClass('aright').children('.gou-img').show();
        $(self).parents('p').addClass('current');
    }else{
        $(self).removeClass('aright').children('.gou-img').hide();
        $(self).parents('p').removeClass('current');
    }
}
function addmodule(){
    var mainMod = $('.name-thing p.current').text();
    var addName=$('#selmod option:selected').val();
    if($('#selmod').parent('.current').length==1){
        var data={
            moduleName:mainMod,
            relationName:addName
        };
        var $item = $('.item p');
        var exist = false;
        $.each($item,function(index,item){
            var hasModule = $(item).find('span').text();
            if(hasModule==addName){
                exist = true;
            }
        });
        if(!exist){
            $.ajax({
                url:'/addmodule',
                type:'post',
                data:data,
                success:function(response){
                    if(response.code==0){
                        var addDom = "<p><i class='gou' onclick='select(this)'><img src='images/type/gou.png' class='gou-img'></i><span>"+addName+"</span></p>";
                        $('.item').append(addDom);
                    }
                }

            })
        }

    }
}
function delmodule(){
    $('.modal').show();
}
function delYes(){
    var delItem = $('.item p.current');
    var delId=[];
    $.each(delItem,function(i,item){
        delId.push($(item).data('id'));
    })
    $.ajax({
        url:"/delmodule",
        type:"get",
        data:{ids:delId.join(',')},
        success:function(response){
            if(response.code==0){
                $('.item .current').remove();
                $('.modal').hide();
                $('.msg').show().text("删除成功");
                setTimeout(function(){
                    $('.msg').hide();
                },3000)
            }
        }
    })
}
function delCancel(){
    $('.modal').hide();
}
function save(){
    var selIdArr=[];
    $('.item .current').each(function(index,item){
        selIdArr.push($(item).data('relation'));
    });
    var data={
        moduleId:$('.name-thing .current').data('id'),
        relationIds:selIdArr.join(',')
    }
    $.ajax({
        url:"/moduleSave",
        type:"post",
        data:data,
        success:function(response){
            if(response.code==0){
                $('.msg').show();
                setTimeout(function(){
                    $('.msg').hide();
                },3000)
            }
        }
    })
}

