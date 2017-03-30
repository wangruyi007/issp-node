$(document).ready(function(){

listCustomerLevel()

});


function listCustomerLevel(){
    $.ajax({
        url:"/customer/customerlevel/listCustomerLevel",
        type:"get",
        success:function(data){
            var list="";
            var addSelect="";
            $.each(data.data,function(i,item){
                list += ("<section class='%{status}'><div class='list-text'><p>%{index}</p><p class='data-id'>%{id}</p><p class='name'>%{name}</p>" +
                "<p class='remark'>%{remark}</p></div><div class='frozen-m'><button onclick='thaw(this)'>解冻</button></div></section>").format({
                    index:i+1,
                    id:item.id,
                    name:item.name==null?"":item.name,
                    remark:(item.remark==null?"":item.remark),
                    status:item.status==null?"":item.status
                });

                addSelect+="<a href='javascript:void(0)'>"+item.name+"</a>";
            });

            $('.list-all').html(list);
            $('.content-input.add .select .option').html(addSelect);
        },
        error:function(msg){
            console.info(msg);
        }
    })
}

//添加
function add(){
    var data ={};
    data.name = $('.content-input.add .select-input').val();
    data.remark = $('.content-input.add .remark input').val();
    $.ajax({
        url:"/customer/customerlevel/add",
        type:"post",
        data:data,
        success:function(data){
            listCustomerLevel();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide()
        },
        error:function(msg){
            console.info(msg);
        }
    })
}

//编辑
function edit(){
    var data ={};
    data.id=$('.content-input.edit .id-hide input').val();
    data.name = $('.content-input.edit .level select').val();
    data.remark = $('.content-input.edit .remark input').val();
    $.ajax({
        url:"/customer/customerlevel/edit",
        type:"post",
        data:data,
        success:function(data){
            listCustomerLevel();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide();
        },
        error:function(msg){
            console.info(msg);
        }
    })
}

//删除
function deleted(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url:"/customer/customerlevel/delete",
        type:"POST",
        data:{id:id},
        success:function(data){
            $('section.selected').remove();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').show().siblings().hide();
            $('#modalbg').hide();

        },
        error:function(msg){
            console.info(msg);
        }
    })
}

//冻结
function frozen(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url:"/customer/customerlevel/congeal",
        type:"POST",
        data:{id:id},
        success:function(data){
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
                $('section.selected').addClass('CONGEAL').removeClass('selected');
                $('#modalbg,.frozen').hide();
        },
        error:function(msg){
            console.info(msg);
        }
    })
}
//解冻
function thaw(self){
    var id = $(self).parent().siblings('.list-text').children('.data-id').text();
    $.ajax({
        url:"/customer/customerlevel/thaw",
        type:"POST",
        data:{id:id},
        success:function(data){
            $(self).parent().parent().removeClass('CONGEAL')
        },
        error:function(msg){
            console.info(msg);
        }

    })
}



//编辑按钮
function editBtn(self){
    if($('section.selected').length>0){
        $('.content-input.edit').fadeIn().siblings().hide();
        $(self).addClass('current').siblings().removeClass('current');
        var level = $('section.selected .name').text();
        var remark = $('section.selected .remark').text();
        var id = $('section.selected .data-id').text();
        $('.content-input.edit .level option[value='+level+']').attr('selected','true');
        $('.content-input.edit .remark input').val(remark);
        $('.content-input.edit .id-hide input').val(id);
    }
}

function addBtn(self){
    $('.content-input.add').fadeIn().siblings().hide();
    $(self).addClass('current').siblings().removeClass('current');
}