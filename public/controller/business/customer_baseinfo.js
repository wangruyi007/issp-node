$(document).ready(function(){

    listCustomerBaseInfo()

});


function listCustomerBaseInfo(){
    $.ajax({
        url : "/customer/customerbaseinfo/listCustomerBaseInfo",
        type : "get",
        success : function(data){
            if(data.data===null){
                return;
            }else {
                var list = "";
                $.each(data.data, function(i, item){
                    list += ("<section class='%{statusType}'><div class='list-text'><p>%{index}</p><p class='data-id'>%{id}</p><p class='customerNum'>%{customerNum}</p>" +
                    "<p class='customerName'>%{customerName}</p><p class='area'>%{area}</p><p class='customerSex'>%{customerSex}</p>" +
                    "<p class='customerType'>%{customerType}</p><p class='customerStatus'>%{customerStatus}</p><p class='relation'>%{relation}</p>" +
                    "<p><a href='javascript:void(0)' onclick='listMore(this)' class='more'>更多详细</a></p></div><div class='can'><ul class='can-see'><li><p class='see-parent'>" +
                    "<span>重要级别</span><span>客户来源</span><span>第一个介绍人姓名</span><span>邮箱</span><span>手机号</span><span>座机</span><span>微信</span>" +
                    "<span>QQ</span></p><p class='see-children'><span class='customerLevelTO'>%{customerLevelTO}</span><span class='origin'>%{origin}</span>" +
                    "<span class='introducer'>%{introducer}</span><span class='cusEmail'>%{cusEmail}</span><span class='tel'>%{tel}</span>" +
                    "<span class='phone'>%{phone}</span><span class='weChart'>%{weChart}</span><span class='qq'>%{qq}</span></p></li>" +
                    "<li><p class='see-parent'><span>行业</span><span>组织机构名称</span><span>组织规模</span><span>岗位</span><span>职级</span>" +
                    "<span>职权</span><span>生活地区</span><span>成长地区</span></p><p class='see-children'><span class='workProfession'>%{workProfession}</span>" +
                    "<span class='origanizion'>%{origanizion}</span><span class='origanizationSize'>%{origanizationSize}</span>" +
                    "<span class='workPosition'>%{workPosition}</span><span class='workLevel'>%{workLevel}</span><span class='workRight'>%{workRight}</span>" +
                    "<span class='lifeArea'>%{lifeArea}</span><span class='grouthArea'>%{grouthArea}</span></p></li>" +
                    "<li><p class='see-parent'><span>以往工作地区</span><span>客户详细信息完整度(%)</span><span>最近一次市场招待时间</span><span>最近一次更新人</span>" +
                    "<span>更新时间</span><span>客户启用状态</span><span>创建时间</span></p><p class='see-children'><span class='oldWorkPlace'>%{oldWorkPlace}</span><span class='infoComplet'>%{infoComplet}</span>" +
                    "<span class='marketReceptTime'>%{marketReceptTime}</span><span class='modifyPersion'>%{modifyPersion}</span>" +
                    "<span class='modifyTime'>%{modifyTime}</span><span class='status'>%{status}</span><span class='createTime'>%{createTime}</span></p></li></ul>" +
                    "<div class='module'><div class='see-module'><p class='see-type'></p><p class='see-description'></p><button class='btn' onclick='canMod(this)'>关闭</button></div></div></div>" +
                    "<div class='frozen-m'><button onclick='thaw(this)'>解冻</button></div></section>").format({
                        index : i + 1,
                        id : item.id,
                        customerNum : item.customerNum,
                        customerName : item.customerName,
                        area : item.area,
                        customerSex : cover(item.customerSex),
                        customerType : cover(item.customerType),
                        customerStatus : cover(item.customerStatus),
                        relation : item.relation,
                        customerLevelTO : item.customerLevelTO,
                        origin : item.origin,
                        introducer : item.introducer,
                        cusEmail : item.cusEmail,
                        tel : item.tel,
                        phone : item.phone,
                        weChart : item.weChart,
                        qq : item.qq,
                        workProfession : item.workProfession,
                        origanizion : item.origanizion,
                        origanizationSize : item.origanizationSize,
                        workPosition : item.workPosition,
                        workLevel : item.workLevel,
                        workRight : item.workRight,
                        lifeArea : item.lifeArea,
                        grouthArea : item.grouthArea,
                        oldWorkPlace : item.oldWorkPlace,
                        marketReceptTime : item.marketReceptTime,
                        modifyPersion : item.modifyPersion,
                        infoComplet : item.infoComplet,
                        status : cover(item.status),
                        createTime : item.createTime,
                        modifyTime : item.modifyTime,
                        statusType : item.status
                    });
                });
                $('.list-all').html(list);
            }
        },
        error : function(msg){
            console.info(msg);
        }
    })
}
function cover(status){
    var result;
    switch(status){
        case "WOMAN":
            result = "女";
            break;
        case "MAN":
            result = "男";
            break;
        case "VIP":
            result = "VIP";
            break;
        case "OLD":
            result = "老客户";
            break;
        case "COOPERATOR":
            result = "合作伙伴";
            break;
        case "ORDINARY":
            result = "普通客户";
            break;
        case "COMPLETEPROJECT":
            result = "已完成项目客户";
            break;
        case "PROJECTING":
            result = "现项目客户";
            break;
        case "POTENTIAL":
            result = "潜在客户";
            break;
        case "THAW":
            result = "解冻";
            break;
        case "CONGEAL":
            result = "冻结";
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
    return result;

}

function rCover(status){
    var result;
    switch(status){
        case "女":
            result = "WOMAN";
            break;
        case "男":
            result = "MAN";
            break;
        case "VIP":
            result = "VIP";
            break;
        case "老客户":
            result = "OLD";
            break;
        case "合作伙伴":
            result = "COOPERATOR";
            break;
        case "普通客户":
            result = "ORDINARY";
            break;
        case "已完成项目客户":
            result = "COMPLETEPROJECT";
            break;
        case "现项目客户":
            result = "PROJECTING";
            break;
        case "潜在客户":
            result = "POTENTIAL";
            break;
        case "解冻":
            result = "THAW";
            break;
        case "冻结":
            result = "CONGEAL";
            break;
        case "删除":
            result = "DELETE";
            break;
        case "未激活":
            result = "NOACTIVE";
            break;
        case "未审核":
            result = "UNREVIEW";
            break;
    }
    return result;

}

function addBtn(self){

    $(self).addClass('current').siblings().removeClass('current');
    $('.content-input.add').fadeIn().siblings().hide();
    $.ajax({
        url:"/customer/customerbaseinfo/generateNumber",
        type:"get",
        success:function(data){
            $('.content-input.add .customerNum').val(data.data.customerNum)
        },
        error:function(msg){
            console.info(msg);
        }
    });
    $.ajax({
        url:"/customer/customerlevel/listCustomerLevel",
        type:"get",
        success:function(data){
            var option="";
            $.each(data.data,function(index,val){
                option+="<option value='%{val}'>%{val}</option>".format({val:val.name})
            });
            $('.content-input.add .customerLevelTO').html(option)
        },
        error:function(msg){

        }
    })
}

function editBtn(self){
    if($('section.selected').length > 0){
        $(self).addClass('current').siblings().removeClass('current');
        $('.content-input.edit').fadeIn().siblings().hide();

        $.ajax({
            url:"/customer/customerlevel/listCustomerLevel",
            type:"get",
            success:function(data){
                var option="";
                $.each(data.data,function(index,val){
                    option+="<option value='%{val}'>%{val}</option>".format({val:val.name})
                });
                $('.content-input.edit .customerLevelTO').html(option)
            },
            error:function(msg){

            }
        })

        var data = {};
        data.id = $('.selected .data-id').text();
        data.customerNum = $('.selected .customerNum').text();
        data.customerName = $('.selected .customerName').text();
        data.area = $('.selected .area').text();
        data.customerSex = $('.selected .customerSex').text();
        data.customerType = $('.selected .customerType').text();
        data.customerStatus = $('.selected .customerStatus').text();
        data.relation = $('.selected .relation').text();
        data.customerLevelTO = $('.selected .customerLevelTO').text();
        data.origin = $('.selected .origin').text();
        data.introducer = $('.selected .introducer').text();
        data.cusEmail = $('.selected .cusEmail').text();
        data.tel = $('.selected .tel').text();
        data.phone = $('.selected .phone').text();
        data.weChart = $('.selected .weChart').text();
        data.qq = $('.selected .qq').text();
        data.workProfession = $('.selected .workProfession').text();
        data.origanizion = $('.selected .origanizion').text();
        data.origanizationSize = $('.selected .origanizationSize').text();
        data.workPosition = $('.selected .workPosition').text();
        data.workLevel = $('.selected .workLevel').text();
        data.workRight = $('.selected .workRight').text();
        data.lifeArea = $('.selected .lifeArea').text();
        data.grouthArea = $('.selected .grouthArea').text();
        data.oldWorkPlace = $('.selected .oldWorkPlace').text();
        data.marketReceptTime = $('.selected .marketReceptTime').text();
        data.modifyPersion = $('.selected .modifyPersion').text();
        data.infoComplet = $('.selected .infoComplet').text();
        data.status = $('.selected .status').text();
        data.createTime = $('.selected .createTime').text();
        data.modifyTime = $('.selected .modifyTime').text();


        /**************编辑框*****************/
        $('.content-input.edit .id-hide').val(data.id);
        $('.content-input.edit .customerNum').val(data.customerNum);
        $('.content-input.edit .customerName').val(data.customerName);
        $('.content-input.edit .area').val(data.area);
        $('.content-input.edit .customerSex option[value=' + rCover(data.customerSex) + ']').attr("selected", true);
        $('.content-input.edit .customerType option[value=' + rCover(data.customerType) + ']').attr("selected", true);
        $('.content-input.edit .customerStatus option[value=' + rCover(data.customerStatus) + ']').attr("selected", true);
        $('.content-input.edit .relation').val(data.relation);
        $('.content-input.edit .customerLevelTO option[value=' + rCover(data.customerLevelTO) + ']').attr("selected", true);
        $('.content-input.edit .origin').val(data.origin);
        $('.content-input.edit .tel').val(data.tel);
        $('.content-input.edit .workProfession').val(data.workProfession);
        $('.content-input.edit .introducer').val(data.introducer);
        $('.content-input.edit .cusEmail').val(data.cusEmail);
        $('.content-input.edit .phone').val(data.phone);
        $('.content-input.edit .weChart').val(data.weChart);
        $('.content-input.edit .qq').val(data.qq);
        $('.content-input.edit .origanizion').val(data.origanizion);
        $('.content-input.edit .origanizationSize').val(data.origanizationSize);
        $('.content-input.edit .workPosition').val(data.workPosition);
        $('.content-input.edit .workLevel').val(data.workLevel);
        $('.content-input.edit .workRight').val(data.workRight);
        $('.content-input.edit .lifeArea').val(data.lifeArea);
        $('.content-input.edit .grouthArea').val(data.grouthArea);
        $('.content-input.edit .oldWorkPlace').val(data.oldWorkPlace);
        $('.content-input.edit .marketReceptTime').val(data.marketReceptTime);

    } else {
        return
    }
}


//添加
function add(){
    var data = {};
    data.customerNum = $('.content-input.add .customerNum').val();
    data.customerName = $('.content-input.add .customerName').val();
    data.area = $('.content-input.add .area').val();
    data.customerSex= $('.content-input.add .customerSex').val();
    data.customerType= $('.content-input.add .customerType').val();
    data.customerStatus= $('.content-input.add .customerStatus').val();
    data.relation = $('.content-input.add .relation').val();
    data.customerLevelName= $('.content-input.add .customerLevelTO').val();
    data.origin = $('.content-input.add .origin').val();
    data.tel = $('.content-input.add .tel').val();
    data.workProfession = $('.content-input.add .workProfession').val();
    data.introducer = $('.content-input.add .introducer').val();
    data.cusEmail = $('.content-input.add .cusEmail').val();
    data.phone = $('.content-input.add .phone').val();
    data.weChart = $('.content-input.add .weChart').val();
    data.qq = $('.content-input.add .qq').val();
    data.origanizion = $('.content-input.add .origanizion').val();
    data.origanizationSize = $('.content-input.add .origanizationSize').val();
    data.workPosition = $('.content-input.add .workPosition').val();
    data.workLevel = $('.content-input.add .workLevel').val();
    data.workRight = $('.content-input.add .workRight').val();
    data.lifeArea = $('.content-input.add .lifeArea').val();
    data.grouthArea = $('.content-input.add .grouthArea').val();
    data.oldWorkPlace = $('.content-input.add .oldWorkPlace').val();
    data.marketReceptTime = $('.content-input.add .marketReceptTime').val();
    console.info(data);
    $.ajax({
        url : "/customer/customerbaseinfo/add",
        type : "post",
        data : data,
        success : function(data){
            console.info(data);
            listCustomerBaseInfo();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide()
        },
        error : function(msg){
            console.info(msg);
        }
    })
}


//编辑
function edit(){
    var data = {};
    data.id = $('.content-input.edit .id-hide').val();
    data.customerNum = $('.content-input.edit .customerNum').val();
    data.customerName = $('.content-input.edit .customerName').val();
    data.area = $('.content-input.edit .area').val();
    data.customerSex= $('.content-input.edit .customerSex').val();
    data.customerType= $('.content-input.edit .customerType').val();
    data.customerStatus= $('.content-input.edit .customerStatus ').val();
    data.relation = $('.content-input.edit .relation').val();
    data.customerLevelName= $('.content-input.edit .customerLevelTO').val();
    data.origin = $('.content-input.edit .origin').val();
    data.tel = $('.content-input.edit .tel').val();
    data.workProfession = $('.content-input.edit .workProfession').val();
    data.introducer = $('.content-input.edit .introducer').val();
    data.cusEmail = $('.content-input.edit .cusEmail').val();
    data.phone = $('.content-input.edit .phone').val();
    data.weChart = $('.content-input.edit .weChart').val();
    data.qq = $('.content-input.edit .qq').val();
    data.origanizion = $('.content-input.edit .origanizion').val();
    data.origanizationSize = $('.content-input.edit .origanizationSize').val();
    data.workPosition = $('.content-input.edit .workPosition').val();
    data.workLevel = $('.content-input.edit .workLevel').val();
    data.workRight = $('.content-input.edit .workRight').val();
    data.lifeArea = $('.content-input.edit .lifeArea').val();
    data.grouthArea = $('.content-input.edit .grouthArea').val();
    data.oldWorkPlace = $('.content-input.edit .oldWorkPlace').val();
    data.marketReceptTime = $('.content-input.edit .marketReceptTime').val();
    console.info(data);
    $.ajax({
        url : "/customer/customerbaseinfo/edit",
        type : "post",
        data : data,
        success : function(data){
            listCustomerBaseInfo();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').hide().fadeIn().siblings().hide();
        },
        error : function(msg){
            console.info(msg);
        }
    })
}

//删除
function deleted(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url : "/customer/customerbaseinfo/delete",
        type : "POST",
        data : {id : id},
        success : function(data){
            $('section.selected').remove();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').show().siblings().hide();
            $('#modalbg').hide();

        },
        error : function(msg){
            console.info(msg);
        }
    })
}

//冻结
function frozen(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url : "/customer/customerbaseinfo/congeal",
        type : "POST",
        data : {id : id},
        success : function(data){
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('section.selected').addClass('CONGEAL').removeClass('selected');
            $('#modalbg,.frozen').hide();
        },
        error : function(msg){
            console.info(msg);
        }
    })
}
//解冻
function thaw(self){
    var id = $(self).parent().siblings('.list-text').children('.data-id').text();
    $.ajax({
        url : "/customer/customerbaseinfo/thaw",
        type : "POST",
        data : {id : id},
        success : function(data){
            $(self).parent().parent().removeClass('CONGEAL')
        },
        error : function(msg){
            console.info(msg);
        }

    })
}


