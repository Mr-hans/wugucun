$(function () {
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.height = '100vh'
	        document.body.style['overflow-y'] = 'hidden'
	    }else{
	        document.body.style.height = 'unset'
	        document.body.style['overflow-y'] = 'auto'
	    }
	}
	//下拉菜单
	$('.z-classify-tab li').click(function(){
//		下拉菜单定位
		var ztop=$('.z-goods-list').offset().top-$(document).scrollTop();
		$(".z-shopping-classify").css("top",ztop)
		
		$('.z-classify-menu').show();	
		toggleBody(1)  //在跳出弹窗的时候
		var $this = $(this),
			index = $this.attr('data-index');
		$this.addClass('pub-red').siblings().removeClass('pub-red');
		if (index) {
			$this.addClass('pub-red').addClass('on').siblings().removeClass('on');
			$('.z-classify-menu .z-item').eq(index).show().siblings().hide();
		}
		if ($this.hasClass('z-sales-num')) {
			$('.z-classify-menu').hide();
			toggleBody(0)  //弹窗消失的时候
			$('.z-classify-tab').find('.one p').text('综合排序');
			$('.z-classify-tab').find('.two p').text('价格排序')
			$('.z-classify-menu .one li').eq(0).addClass('pub-red on').siblings().removeClass('pub-red on');
			$('.z-classify-menu .two li').removeClass('pub-red on');
			$('.z-classify-tab li').removeClass('on');
		}
	});
	$('.z-classify-menu').click(function(){
		$('.z-classify-menu').hide();	
		toggleBody(0)  //弹窗消失的时候
	})
	$('.z-classify-menu .z-item li').click(function(){
		$(this).addClass('pub-red on').siblings().removeClass('pub-red on');
		$('.z-classify-tab').find('.pub-red p').text($(this).text())
		//阻止冒泡，点击列表时不会关闭弹窗
//		return false;
	})
})
