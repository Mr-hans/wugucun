$(function () {
	//分式导航
	new Swiper('.z-goods-banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
        pagination: '.z-goods-banner .swiper-pagination',
        paginationType: 'fraction',
        autoplayDisableOnInteraction : false//操作之后是否禁止轮播
    });
//  选项卡
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
   	//返回顶部
	$('.back-totop').click(function(){
		var $this = $(this);
		$this.addClass('rubberBand');
		$('body,html').animate({'scrollTop':0}, 300, function(){
			$this.removeClass('rubberBand');	
		});
	});
	/* window.onscroll会导致高频率触发函数
	 * 利用函数去抖进行性能优化
	 * fn 执行函数， delay 等待时间 
	 * */
	function debounce(method, delay) {
		var context = this;
		//如果等待期间函数再次被调用
		//删除上一次调用，重新进行等待
		clearTimeout(method.timer);
		//利用定时器让函数重新进行等待
		method.timer = setTimeout(function(){
			method.call(context);
		}, delay);
	}

	//window高度
	var viewport = $(window).height();
	//滚动距离大于浏览器高度时显示返回顶部按钮，否则隐藏
	function isViewport() {
		var scroll = $(window).scrollTop();
		scroll > 100 ? $('.back-totop').fadeIn() : $('.back-totop').fadeOut();
	}
	//window滚动时执行函数
	$(window).scroll(function(){ 
		debounce(isViewport, 80)
		
	})
	
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
	//	收藏变色
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
})
