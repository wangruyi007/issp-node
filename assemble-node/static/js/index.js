$(document).ready(function () {
    $(".select-list .name-thing").on('click','span',function(){
        $(this).parent().addClass("current").siblings().removeClass("current")
    });
    $.get('/module/list',function(response){
        if(response.code==0){
            var moduleList='',selList='';
            $.each(response.data,function(index,item){
                moduleList+=("<p data-id='%{id}' ><span onclick='module(\"%{name}\")'>%{name}</span> <i class='gou %{selected}' onclick='select(this)'>" +
                    "<img src='images/type/gou.png' /></i></p>").format({name:item.name,id:item.id,selected:item.checkType=="CHECK"?"select":""});
            });
            $('.name-thing').html(moduleList);
            $('.select-mod').html(selList);
            var $module = $('.name-thing p');
            $module.eq(0).addClass('current');
            var moduleName = $module.eq(0).children('span').text();
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
                    subList+=("<p data-relation='%{relation}' data-id='%{id}'>" +
                    "<span>%{subname}</span></p>").format({
                        subname:item.name,id:item.id,
                        relation:item.relationId
                    });
                });
                $('.item').html(subList);
            }
        }
    })
}
function select(self){
    if(!$(self).hasClass('select')){
        $(self).addClass('select')
    }else {
        $(self).removeClass('select')
    }
}
function save(){
    var selIdArr=[];
    $('.name-thing .select').each(function(index,item){
        selIdArr.push($(item).parent().data("id"));
    });
    var data={
        ids:selIdArr.join(',')
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

