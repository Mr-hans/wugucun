$(function () {
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
        var winPos = $('#MainArea1').scrollTop()+100;
        var are1 = $('#MainArea1').offset().top;
        var are2 = $('#MainArea2').offset().top;
        var are3 = $('#MainArea3').offset().top;
        var are4 = $('#MainArea4').offset().top;
        var are5 = $('#MainArea5').offset().top;
        var are6 = $('#MainArea6').offset().top;
        var are7 = $('#MainArea7').offset().top;
        var are8 = $('#MainArea8').offset().top;
        $('.sider-list li').removeClass('checked')
        if (winPos >= are1 && are2 >= winPos||winPos<= are1) {
            $('.li-1').addClass('checked')
        }
        if (winPos>= are2 && are3 >= winPos) {
            $('.li-2').addClass('checked')
        }
        if (winPos>= are3 && are4 >= winPos) {
            $('.li-3').addClass('checked')
        }
        if (winPos >= are4 && are5 >= winPos) {
            $('.li-4').addClass('checked')
        }
         if (winPos >= are5 && are6 >= winPos) {
            $('.li-5').addClass('checked')
        }
          if (winPos >= are6&& are7 >= winPos) {
            $('.li-6').addClass('checked')
        }
           if (winPos >= are7 && are8>= winPos) {
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
        $(".z-cartfood-num").remove()
	})
})
