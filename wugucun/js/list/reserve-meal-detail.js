$(function () {
	//分式导航
	new Swiper('.z-hostel-detail-banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
        pagination: '.z-hostel-detail-banner .swiper-pagination',
        paginationType: 'fraction',
        autoplayDisableOnInteraction : false//操作之后是否禁止轮播
    });
    
    //  头部样式
    window.addEventListener('scroll', function(e) {
		if (window.pageYOffset>10) {
			$(".head-title").removeClass("hide");
			$(".pub-head").removeClass("z-goods-detail-head");
		}else{
			$(".head-title").addClass("hide");
			$(".pub-head").addClass("z-goods-detail-head");
		}
	});
//	收藏变色
	layui.use('layer', function(){
	  	var layer = layui.layer;
	  	$(".head-collection").click(function () {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on").find('p').text('收藏');
				layer.msg('已取消收藏');
			} else{
				$(this).addClass("on").find('p').text('已收藏');
				layer.msg('收藏成功');
			}
		})
	  
	}); 
	//客服弹窗
	layui.use('layer', function(){
		var layer = layui.layer;
		//点击
		$('.z-contact-number').click(function(e){
			//调用封装的$comfirm弹窗
			$confirm({
				msg: '电话：0791-87963527',
				rightbtn:'拨打',
				//点击确定的回调
				ensure: function(){
					
				}
			});
		})
	}); 
	//分享弹窗
	$underpup({
		btn: $(".head-share"),
		box:$("#z-share-box")
	});
	//详情、评论选项卡
   	$('.detail-and-comment .title .flex1').click(function(){
   		var index = $(this).index();
   		$(this).addClass('on').siblings().removeClass('on');
   		$('.detail-and-comment .con-box .item').eq(index).show().siblings().hide();
   		$('.under-line').css({
   			"transform":"translateX("+ index*100 +"%)",
   			"-webkit-transform":"translateX("+ index*100 +"%)",
   			"-moz-transform":"translateX("+ index*100 +"%)"
   		})
   	});
// 	预定弹窗
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.height = '100vh'
	        document.body.style['overflow-y'] = 'hidden'
	    }else{
	        document.body.style.height = 'unset'
	        document.body.style['overflow-y'] = 'auto'
	    }
	}
	$(".z-reserve-meal-btn").click(function () {
		var mealval=$(this).parents("li").find(".z-mealclass-name").text();
		$(".z-mealclass-tit").text(mealval+'预定');
		$("#z-privateroom-mask").addClass("z-table");
		toggleBody(1)  //在跳出弹窗的时候
	})
	//			点击背景阴影框-取消弹窗
	$(".mask-box").click(function(){
		$("#z-privateroom-mask").removeClass('z-table');
		toggleBody(0)  //在跳出弹窗的时候
	})
//			阻止冒泡
	//如果提供了事件对象，则这是一个非IE浏览器
	$(".z-mask-con").click(function (e) {
		if ( e && e.stopPropagation ){
		　　// 因此它支持W3C的stopPropagation()方法
			e.stopPropagation();
		}else{
		　　//否则，我们需要使用IE的方式来取消事件冒泡
		　　
			window.event.cancelBubble = true;
			return false;
		}
	})
	
//	外送
	// 滚轮效果
    $(".sider-list a").click(function (event) {
        event.preventDefault();
        var _id = $(this).attr("href").split("#")[1];
        var _top = $("#" + _id).offset().top;
        $(".classify-goods").animate({
            scrollTop: _top-$('#MainArea1').offset().top
        }, 500);
    });
    
    //    滚动监听~
    $(".classify-goods").scroll(function (event) {
        var winPos = $('.z-delivery-box').offset().top+50;
        var are1 = $('#MainArea1').offset().top;
        var are2 = $('#MainArea2').offset().top;
        var are3 = $('#MainArea3').offset().top;
        var are4 = $('#MainArea4').offset().top;
        var are5 = $('#MainArea5').offset().top;
        var are6 = $('#MainArea6').offset().top;
        var are7 = $('#MainArea7').offset().top;
        var are8 = $('#MainArea8').offset().top;
        $('.sider-list li').removeClass('checked')
        if (winPos >= are1 && are2 > winPos||winPos<= are1) {
            $('.li-1').addClass('checked')
        }
        if (winPos>= are2 && are3 > winPos) {
            $('.li-2').addClass('checked')
        }
        if (winPos>= are3 && are4 > winPos) {
            $('.li-3').addClass('checked')
        }
        if (winPos >= are4 && are5 > winPos) {
            $('.li-4').addClass('checked')
        }
         if (winPos >= are5 && are6 > winPos) {
            $('.li-5').addClass('checked')
        }
          if (winPos >= are6&& are7 > winPos) {
            $('.li-6').addClass('checked')
        }
           if (winPos >= are7 && are8> winPos) {
            $('.li-7').addClass('checked')
        }
            if (winPos >= are8) {
            $('.li-8').addClass('checked')
        }
    });
    //  商品数量增减-显示隐藏
	$(".pub-updown-up").click(function () {
		$(this).parents(".pub-updown").addClass("show");
	})
	//数量加减
	$('.z-ordermeal-list .pub-updown .z-pub-updown-down').click(function(){
		var $txt = $(this).next('.pub-updown-num'),
			val = $txt.val();
		if (val <= 0) {
			val = 0;
		} else{
			val--;
			if (val == 0) {
				$(this).parents(".pub-updown").removeClass("show");
			}
		}
		$txt.val(val);
	});
//	购物车弹窗
	$underpup({
		btn: $(".z-menu-cart"),
		box:$("#z-menucart-mask")
	});
	$(".z-clear-cart").click(function () {
		$("#z-menucart-mask .list li").remove();
		$("#z-menucart-mask").removeClass('top');
		document.body.style.height = 'unset'
        document.body.style['overflow-y'] = 'auto' //弹窗消失的时候
        $(".z-menu-cart").removeClass("on");
        $(".z-cartfood-num").remove();
        $(".z-menu-cart-price").remove();
        $(".z-menu-cart-scope").show();
	})
})
