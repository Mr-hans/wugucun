$(function () {
	//分式导航
	new Swiper('.z-goods-banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
        pagination: '.z-goods-banner .swiper-pagination',
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
	//评价分类
	$(".z-evaluate-class li").click(function () {
		$(this).addClass("on").siblings().removeClass("on");
	})
//	底部点击变色
	layui.use('layer', function(){
	  	var layer = layui.layer;
	  	$(".ico-star").click(function () {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on").find('p').text('收藏');
				layer.msg('已取消收藏');
			} else{
				$(this).addClass("on").find('p').text('已收藏');
				layer.msg('收藏成功');
			}
		})
	  
	}); 
	//商品详情-组图点击放大展示
   	$('.z-introduce-imgs').EnlargeImage()
	//分享弹窗
	$underpup({
		btn: $(".head-share"),
		box:$("#z-share-box")
	});
	//客服弹窗
	layui.use('layer', function(){
		var layer = layui.layer;
		//点击
		$('.ico-call').click(function(){
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
	$("#z-jioncart-box").scrollTop(0)
	//加入购物车
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.position = 'fixed'
	    }else{
	        document.body.style.position = 'unset'
	    }
	}
	layui.use('layer', function(){
		var layer = layui.layer;
//		单独购买
		$(".alone-buy").click(function(){
			if ($(".goods-spec .list li").hasClass("on")) {
				$("#z-jioncart-box").removeClass('top');
				toggleBody(0);  //弹窗消失的时候
				window.location.href='z-write-order.html';
			} else{
				$("#z-jioncart-box").addClass('top');
				toggleBody(1)  //在跳出弹窗的时候	
			}
		})		
//		拼团购买
		$(".groups-buy").click(function(){
			if ($(".goods-spec .list li").hasClass("on")) {
				$("#z-jioncart-box").removeClass('top');
				toggleBody(0);  //弹窗消失的时候
				window.location.href='z-write-order.html';
			} else{
				$("#z-jioncart-box").addClass('top');
				toggleBody(1)  //在跳出弹窗的时候	
			}
		})
	}); 
	
//	关闭按钮
	$("#z-jioncart-box").find(".z-close-jioncart").click(function(){
		$("#z-jioncart-box").removeClass('top');
		toggleBody(0)  //弹窗消失的时候
		$(".goods-spec .list li").removeClass("on");
	})
	//购物车弹窗-选择产品规格
	$('.goods-spec ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});		
//	产品参数	
	$underpup({
		btn: $(".z-parameter-btn"),
		box:$("#z-parameter")
	});
})
