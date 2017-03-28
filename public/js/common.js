
window.onload=function(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/font/icons/svg-symbols.svg", true);
    ajax.onload = function(e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    }
    ajax.send();
}

$(document).ready(function(){

    $('.list-all').on("click","section .list-text ",function(){
        $(this).parent().addClass('selected').siblings().removeClass('selected')
    })

    $('.nav').on("click","a",function(){
        $('.nav li').removeClass('active');
        $('.nav h3').removeClass('big');
        $(this).parent().addClass('active');
        $(this).parents(".nav-list").children("h3").addClass("big");
    });

    $('.input-list').on("click",".select .arrow-down",function(){
        if(!$(this).hasClass('ac')){
            $(this).addClass('ac');
            $(this).siblings('.wrap-op').show()
        }else {
            $(this).removeClass('ac');
            $(this).siblings('.wrap-op').hide()
        }
    });
    $('.input-list').on("click",".wrap-op .option a",function(){
        var val = $(this).text();
        $(this).parents('.select').children('.select-input').val(val);
        $(this).parents('.wrap-op').siblings('.arrow-down').removeClass('ac')
        $(this).parent().parent().hide()
    });

    $('.input-list').on("keydown",".select input",function(){
        if($(this).siblings('.wrap-op').show()){
            $(this).siblings('.wrap-op').hide().siblings('i').removeClass('ac');
        }
    })

    $('.list-text').on("click",".more",function(){
        $(this).parents('.list-text').next().find('.can-see').stop();
        $('.module').hide();

        if(!$(this).hasClass("ac")){
            $(this).addClass("ac");
            $(this).parent().parent().parent().siblings().find('.more').removeClass('ac');
            $(this).parent().parent().parent().siblings().find('.can-see').slideUp("fast")
            $(this).parents('.list-text').next().find('.can-see').slideDown()
        }else {
            $(this).removeClass("ac");
            $(this).parents('.list-text').next().find('.can-see').slideUp("fast")
        }
    });



    function modal(){
        $('.content-tab .list-all').on("mouseover",".list-text p,.see-children span",function(){
            var boxWidth = $(this).width();
            var textLen = $(this).text().length;
            var textWidth = 12*textLen;
            if(textWidth>boxWidth){
                $(this).css("cursor","pointer");
            }
        });
        $('.content-tab .list-all').on("click",".list-text p:not(p:last-child),.see-children span",function(){
            var boxWidth = $(this).width();
            var text = $(this).text();
            var textLen = text.length;
            var ind = $(this).index();
            var textWidth = 12*textLen;
            if(textWidth>boxWidth){
                var title;
                var tag = this.tagName;
                if(tag=="P"){
                    title =  $(".list-head span").eq(ind).text();
                }else if(tag=="SPAN"){
                    title = $(this).parent().siblings('.see-parent').children().eq(ind).text();
                }
                $(this).parents('.can').children('.module').show();
                $(this).parents('.can').find('.see-type').text(title);
                $(this).parents('.can').find('.see-description').text(text);
            }
        });

    }
    modal();




    // click more slide
    $(".see-children").on('click','span',function() {
        var inx = $(this).index(),
            selfText = $(this).text(),
            num = selfText.length,
            width = $(this).width(),
            titleText = $(this).parent().siblings().children().eq(inx).text(),
            fontSize = $(this).css("font-size").split("p")[0]*num;
            console.log(fontSize,width);
        if (fontSize>width){
            $(".module").show();
            $(".module .see-type").text(titleText);
            $(".module .see-description").text(selfText);
        }else {
            return
        }
    });

    $(".module .see-module").on('click','.btn',function() {
        $(".module ").hide();
    });
    //切换菜单栏
    $('.top-fixed .list').on("click","li",function(){
        var listTitle = $(this).attr("data-title");
        if(listTitle=="delete"){
            $('.content').children('.delete').show();
            $("#modalbg").show();
        }else if(listTitle=="review"){
            $('.content').children('.review').show();
            $("#modalbg").show();
        }else {
            $('.content').children("."+listTitle).show().siblings().hide();
        }
    });
    // //删除框
    // $('.content').on("click",".delete button,.review button",function(){
    //     $('.delete').hide();
    //     $('.review').hide();
    //     $("#modalbg").hide()
    // });
    // //冻结
    // $('.content').on("click",".freeze button,.review button",function(){
    //     $('.freeze').hide();
    //     $('.review').hide();
    //     $("#freeze").hide()
    // });
    // //解冻
    // $('.content').on("click",".unfreeze button,.review button",function(){
    //     $('.unfreeze').hide();
    //     $('.review').hide();
    //     $("#unfreeze").hide()
    // });

    $('.annex .annex-layout').on("click","li",function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        var layout = $(this).attr("data-title");
        if(layout=="column"){
            $('.annex .file-list ul').addClass('column');
        }else {
            $('.annex .file-list ul').removeClass('column');
        }
    })


});

//日历
var i18n = {
    previousMonth   : '上个月',
    nextMonth       : '下个月',
    months          : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    weekdays        : ['周日','周一','周二','周三','周四','周五','周六'],
    weekdaysShort   : ['S','M','T','W','T','F','S']
}


//子模块tab
$('.boarding ').on("click",".boa-title li",function(){

    var dataTitle = $(this).attr('data-title');
    $(this).addClass("boa-cur").siblings().removeClass('boa-cur');
    $(this).parents('.boarding').find('.'+dataTitle).show().siblings().hide();
});


//进度条
function proChange(slef){
    var proVal = $(slef).val();
    $(slef).parent().children('.per').children('span').text(proVal);
    $(slef).mousemove(function(){
        var proVal = $(slef).val();
        $(slef).parent().children('.per').children('span').text(proVal);
        $(slef).css( 'background-size', proVal + '% 100%' );

    });
}



function alertBtn(name,self){

    if($('section.selected').length>0){
        $(self).addClass('current').siblings().removeClass('current');
        $('#modalbg,.content .'+name).show();
    }
}

function cancelBtn(name){
    $('.'+name).hide();
    $('#modalbg').hide();
    $('.content .list').fadeIn().siblings().hide();
    $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current')
}


//列表更多
function listMore(self){
    $(self).parents('.list-text').next().find('.can-see').stop();
    $('.module').hide();

    if(!$(self).hasClass("ac")){
        $(self).addClass("ac");
        $(self).parent().parent().parent().siblings().find('.more').removeClass('ac');
        $(self).parent().parent().parent().siblings().find('.can-see').slideUp("fast")
        $(self).parents('.list-text').next().find('.can-see').slideDown()
    }else {
        $(self).removeClass("ac");
        $(self).parents('.list-text').next().find('.can-see').slideUp("fast")
    }
}

function canMod(self){
    $(self).parents('.module').hide();
}


function listBtn(self){
    $(self).addClass('current').siblings().removeClass('current');
    $('.content .list').fadeIn().siblings().hide()
}

$('.multiselect').on('click','.multiselect-inp',function(){
    if(!$(this).hasClass('ac')){
        $(this).addClass('ac');
        $(this).siblings('.multiselect-sel').slideDown("fast")
    }else {
        $(this).removeClass('ac');
        $(this).siblings('.multiselect-sel').slideUp("fast")
    }

});




