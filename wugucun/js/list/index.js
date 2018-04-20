$(function () {
	//swiper初始化
	new Swiper('.z_index_banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
		pagination : '.z_index_banner .swiper-pagination',//分页
		autoplayDisableOnInteraction : false,//操作之后是否禁止轮播
	});
	//公告小轮播
   	var $list = $('.z_notice_list');
	setTimeout(function(){
		$list.animate(
			{'margin-top': '-0.44rem'}, 300,
			function(){
				$list.find('li').eq(0).appendTo($list);
				$list.css({'margin-top': 0});
			}
		)
		setTimeout(arguments.callee, 3000);
	},3000);
//	倒计时-限时抢购
	var endtime=new Date("2018/03/30,10:10:00");
    var nowtime = new Date();
    var intDiff = parseInt((endtime.getTime()-nowtime.getTime())/1000); //倒计时总秒数量

    function timer(intDiff) {
        window.setInterval(function() {
        	$("strong").css('font-weight','normal')
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值     
            if (intDiff > 0) {
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $('#day_show').html(day + "天");
            $('#hour_show').html('<s id="h"></s>' + hour);
            $('#minute_show').html('<s></s>' + minute);
            $('#second_show').html('<s></s>' + second);
            intDiff--;
        }, 1000);
    }
    timer(intDiff);
    
    
    //客服弹窗
	layui.use('layer', function(){
		var layer = layui.layer;
		//点击
		$('.z-call').click(function(){
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
		btn: $(".z-extension-now"),
		box:$("#z-share-box")
	});
})
