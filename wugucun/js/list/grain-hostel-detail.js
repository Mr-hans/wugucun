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
	//分享弹窗
	$underpup({
		btn: $(".head-share"),
		box:$("#z-share-box")
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
	
//	入住日期
	$('#firstSelect').on('click',function (e) {
		e.stopPropagation();
        e.preventDefault();
		$('.mask_calendar').show();
	});
	$('.mask_calendar').on('click',function (e) {
		e.stopPropagation();
        e.preventDefault();
		if(e.target.className == "mask_calendar"){
			$('.calendar').slideUp(200);
            $('.mask_calendar').fadeOut(200);
		}
	})
	$('#firstSelect').calendarSwitch({
		selectors : {
			sections : ".calendar"
		},
        index : 4,      //展示的月份个数
        animateFunction : "slideToggle",        //动画效果
        controlDay:true,//知否控制在daysnumber天之内，这个数值的设置前提是总显示天数大于90天
        daysnumber : "90",     //控制天数
        comeColor : "#2EB6A8",       //入住颜色
        outColor : "#2EB6A8",      //离店颜色
        comeoutColor : "#E0F4F2",        //入住和离店之间的颜色
        callback :function(){//回调函数
        	$('.mask_calendar').fadeOut(200);
        	var startDate = $('#startDate').val();  //入住的天数
            var endDate = $('#endDate').val();      //离店的天数
            var NumDate = $('.NumDate').text();    //共多少晚
            console.log(startDate);
            console.log(endDate);
            console.log(NumDate);
            //下面做ajax请求
        },   
        comfireBtn:'.comfire'//确定按钮的class或者id
    });
	var b=new Date();
//  var ye=b.getFullYear();
    var mo=b.getMonth()+1;
    mo = mo<10?"0"+mo:mo;
    var da=b.getDate();
    da = da<10?"0"+da:da;
    $('#startDate').val(mo+'月'+da+'日');
    b=new Date(b.getTime()+24*3600*1000);
//  var ye=b.getFullYear();
    var mo=b.getMonth()+1;
    mo = mo<10?"0"+mo:mo;
    var da=b.getDate();
    da = da<10?"0"+da:da;
    $('#endDate').val(mo+'月'+da+'日');
})
