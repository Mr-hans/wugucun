$(function () {
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
	//商品评论图片-点击放大展示
   	$('.comment-list .comment-imgs ').EnlargeImage();
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
		$(".join-cart").click(function(){
			if ($(".goods-spec .list li").hasClass("on")) {
				$("#z-jioncart-box").removeClass('top');
				toggleBody(0);  //弹窗消失的时候
				layer.msg('宝贝在购物车等亲');
				$(".goods-spec .list li").removeClass("on");
			} else{
				$("#z-jioncart-box").addClass('top');
				toggleBody(1)  //在跳出弹窗的时候
			}
		})
		
		$(".buy-now").click(function(){
			if ($(".goods-spec .list li").hasClass("on")) {
				$("#z-jioncart-box").removeClass('top');
				toggleBody(0);  //弹窗消失的时候
				window.location.href='index.html';
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
})
