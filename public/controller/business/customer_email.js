$(document).ready(function(){

    listCusEmail()

});


function listCusEmail(){
    $.ajax({
        url:"/customer/cusemail/listCusEmail",
        type:"get",
        success:function(data){
            var list="";
            $.each(data.data,function(i,item){
                list += ("<section class='%{statusType}'><div class='list-text'><p>%{index}</p><p class='data-id'>%{id}</p><p class='work'>%{work}</p>" +
                "<p class='remark'>%{remark}</p><p class='sendNum'>%{sendNum}</p><p class='sendNumAndUnit'>%{sendNumAndUnit}</p><p></p><p class='customerSendUnit'>%{customerSendUnit}</p>" +
                "<p class='customerCollectUnit'>%{customerCollectUnit}</p><p><a href='javascript:void(0)' class='more'  onclick='listMore(this)'>更多详情</a></p></div>" +
                "<div class='can'><ul class='can-see'><li><p class='see-parent'><span>发送对象</span><span>状态</span></p>" +
                "<p class='see-children'><span class='sendObjectList'>%{sendObjectList}</span><span class='status'>%{status}</span></p></li></ul>" +
                "<div class='module'><div class='see-module'><p class='see-type'></p><p class='see-description'></p><button class='btn' onclick='canMod(this)'>关闭</button>" +
                "</div></div></div>" +
                "<div class='frozen-m'><button onclick='thaw(this)'>解冻</button></div></section>").format({
                    index:i+1,
                    id:item.id,
                    work:item.work==null?"":item.work,
                    remark:item.remark==null?"":item.remark,
                    sendNum:item.sendNum==null?"":item.sendNum,
                    sendNumAndUnit:item.sendNumAndUnit==null?"":item.sendNumAndUnit,
                    sendObjectList:item.sendObjectList==null?"":item.sendObjectList,
                    status:cover(item.status),
                    customerSendUnit:cover(item.customerSendUnit),
                    customerCollectUnit:cover(item.customerCollectUnit),
                    statusType:item.status
                });

            });
            $('.list-all').html(list);
        },
        error:function(msg){
            console.info(msg);
        }
    })
}

function cover(status){
    switch(status){
        case "MINUTE":
            result = "分钟";
            break;
        case "HOURS":
            result = "小时";
            break;
        case "DAY":
            result = "天";
            break;
        case "WEEK":
            result = "周";
            break;
        case "MONTH":
            result = "月";
            break;
        case "QUARTER":
            result = "季度";
            break;
        case "YEAR":
            result = "年";
            break;
        case "EVERYDAY":
            result = "每天";
            break;
        case "EVERYWEEK":
            result = "每周";
            break;
        case "EVERYMONTH":
            result = "每月";
            break;
        case "CONGEAL":
            result = "冻结";
            break;
        case "THAW":
            result = "解冻";
            break;

        case "DELETE":
            result = "删除";
            break;
        case "NOACTIVE":
            result = "未激活";
            break;
        case "UNREVIEW":
            result = "未审核";
            break;
    }
    var result;
    return result;

}

//添加
function addBtn(self){
    $(self).addClass('current').siblings().removeClass('current');
    var $add = $('.content-input.add');
    $add.fadeIn().siblings().hide();
    $.get('/customer/customerbaseinfo/getWorks',function(data){
        var workList="";
       $.each(data.data,function(index,work){
            workList+="<option value='%{work}'>%{work}</option>".format({
                work:work
            })
       });
        $add.find('.works').html(workList)
    })
}
function add(){
    var data={};
    var $add = $('.content-input.add');
    data.works = $add.find('.works option:selected').val();
    data.customerSendUnit = $add.find('.customerSendUnit option:selected').val();
    data.customerCollectUnit = $add.find('.customerCollectUnit option:selected').val();
    data.remark = $add.find('.remark').val();
    data.sendNum = $add.find('.sendNum').val();
    data.sendObjectList = $add.find('.sendObjectList').text();
    console.info(data);
    $.ajax({
        url:'/customer/cusemail/add',
        type:"post",
        data:data,
        success:function(data){
            listCusEmail();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide()
        },
        error:function(msg){

        }
    })
}

//编辑按钮
function editBtn(self){
    if($('section.selected').length>0){
        $(self).addClass('current').siblings().removeClass('current');
        var $select = $('section.selected');
        var $edit = $('.content-input.edit');
        var customerCollectUnit = rcover($select.find('.customerCollectUnit').text());
        var customerSendUnit = rcover($select.find('.customerSendUnit').text());
        var sendNum = $select.find('.sendNum').text();
        var id = $select.find('.data-id').text();
        $edit.fadeIn().siblings().hide();
        $.get('/customer/customerbaseinfo/getWorks',function(data){
            var workList="";
            $.each(data.data,function(index,work){
                workList+="<option value='%{work}'>%{work}</option>".format({
                    work:work
                });
                $edit.find('.works').html(workList);
            });
            $edit.find('.sendNum').val(sendNum);
            $edit.find('.customerSendUnit option[value='+ customerSendUnit+']').attr("selected", true);
            $edit.find('.customerCollectUnit option[value='+ customerCollectUnit+']').attr("selected", true);
            $edit.find('.id-hide').val(id);

        })
        console.info($edit.find('.id-hide').val())
    }
}
function rcover(status){
    switch(status){
        case "分钟":
            result = "MINUTE";
            break;
        case "小时":
            result = "HOURS";
            break;
        case "天":
            result = "DAY";
            break;
        case "周":
            result = "WEEK";
            break;
        case "月":
            result = "MONTH";
            break;
        case "季度":
            result = "QUARTER";
            break;
        case "年":
            result = "YEAR";
            break;
        case "每天":
            result = "EVERYDAY";
            break;
        case "每周":
            result = "EVERYWEEK";
            break;
        case "每月":
            result = "EVERYMONTH";
            break;
    }
    var result;
    return result;

}
//编辑
function edit(){
    var data={};
    var $edit = $('.content-input.edit');
    data.works = $edit.find('.works option:selected').val();
    data.customerSendUnit = $edit.find('.customerSendUnit option:selected').val();
    data.customerCollectUnit = $edit.find('.customerCollectUnit option:selected').val();
    data.remark = $edit.find('.remark').val();
    data.sendNum = $edit.find('.sendNum').val();
    data.sendObjectList = $edit.find('.sendObjectList').text();
    data.id = $edit.find('.id-hide').val();
    console.info(data);
    $.ajax({
        url:'/customer/cusemail/edit',
        type:"post",
        data:data,
        success:function(data){
            listCusEmail();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide()
        },
        error:function(msg){

        }
    })
}

//删除
function deleted(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url:"/customer/cusemail/delete",
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
        url:"/customer/cusemail/congeal",
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
        url:"/customer/cusemail/thaw",
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

function collectd(){
    $('.collect').fadeIn().siblings().hide();
    $.ajax({
        url:"/customer/customerbaseinfo/getWorks",
        type:"get",
        success:function(data){
            var option = "";
            $.each(data.data,function(index,word){
                option+="<p class='option' onclick='collectSelect(this)'>%{word}</p>".format({
                    word:word
                });
                $('.collect .multiselect-sel').html(option)
            })
        },
        error:function(msg){

        }
    })

}
var collectSel=[];
function collectSelect(self){
    var name = $(self).text();
    collectSel.push(name);
    var collectSelArr = collectSel.distinct();
    $('.multiselect-inp').html(collectSelArr.join(','));
    $.ajax({
        url:"/customer/cusemail/Collect",
        type:'post',
        data:{works:collectSelArr},
        success:function(data){
            var collectList="";
            $.each(data.data,function(index,list){
                collectList+="<p><span class='work'>%{work}</span>".format({work:list.work});
                // collectList+="<>"
                    for(var i in list.areaMap){
                        collectList+="<span class='area'>%{area}</span>".format({area:list.areaMap[i].count})
                    }
                    for(var j in list.cusTypeMap){
                        collectList+="<span class='cusTypeMap'>%{cusTypeMap}</span>".format({cusTypeMap:list.cusTypeMap[j].count})
                    }for(var k in list.cusStatusMap){
                        collectList+="<span class='cusStatusMap'>%{cusStatusMap}</span>".format({cusStatusMap:list.cusStatusMap[k].count})
                    }
                    // for(var i=0,len=obj.length; i<len; i++){
                    //
                    // }
                    console.info(list);

                collectList+="</p>";
                $('.collect .sum-tbody').html(collectList);

            });


        },
        error:function(msg){
        
        }
    })
}

Array.prototype.distinct = function() {
    var arr = this,
        result = [],
        len = arr.length;
        for (var i = 0; i < len; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};