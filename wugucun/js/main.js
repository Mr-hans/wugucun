$(function () {
	//返回上一页
	$('.go-back').click(function(){
		window.history.go(-1);
	});
	//		弹窗弹出body不滚动
//	function toggleBody(isPin){
//	    if(isPin){
//	        document.body.style.position = 'fixed'
//	    }else{
//	        document.body.style.position = 'unset'
//	    }
//	}
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.height = '100vh'
	        document.body.style['overflow-y'] = 'hidden'
	    }else{
	        document.body.style.height = 'unset'
	        document.body.style['overflow-y'] = 'auto'
	    }
	}
	//	下方弹出-弹窗	
	;(function($){
		$.fn.underpup = function(options){
			var ops = $.extend({
				btn: '',
				box:''
			}, options || {});
			
			var btn = ops.btn,
				box= ops.box
			btn.click(function(){
				box.addClass('top');
				toggleBody(1)  //在跳出弹窗的时候
			})
			box.find(".make-sure").click(function(){
				box.removeClass('top');
				toggleBody(0)  //弹窗消失的时候
			})
//			点击背景阴影框-取消弹窗
			$(".mask-box").click(function(){
				box.removeClass('top');
				toggleBody(0)  //弹窗消失的时候
			})
			//阻止冒泡
			//如果提供了事件对象，则这是一个非IE浏览器
 			$(".box-con").click(function (e) {
 				if ( e && e.stopPropagation ){
				　　// 因此它支持W3C的stopPropagation()方法
					e.stopPropagation();
				}else{
				　　//否则，我们需要使用IE的方式来取消事件冒泡
				　　
					window.event.cancelBubble = true;
					return false;
				}
 			})
		}
		//暴露给全局环境
		window.$underpup = $.fn.underpup;	
	})(jQuery);
//	确认取消弹窗封装
	;(function($){
		$.fn.confirm = function(options){
			var ops = $.extend({
				msg: '确定此操作吗',
				rightbtn:'',
				cancel: '', //点击取消按钮的回调
				ensure: '' //点击确定按钮的回调
			}, options || {});
			
			var msg = ops.msg,
				rightbtn= ops.rightbtn
				cancel = ops.cancel,
				ensure = ops.ensure,
				confirmBox = layer.open({
				  	type: 1,
				  	anim: 4, //入场动画
				  	title: false, //不要标题
				  	content: msg, //提示内容
				  	skin: 'pub-confirm', //自定义样式类名
				  	area: ['5.7rem', 'auto'], //定义宽高
				  	closeBtn: 0, //不显示关闭按钮
				  	shadeClose: true, //开启遮罩关闭
				  	btn: ['取消', rightbtn], //可以无限个按钮 
				  	btnAlign: 'c', //按钮居中
				  	scrollbar: false, //不允许浏览器窗口滚动
				  	yes: function(index, layero){
					    //按钮【取消】的回调
					    layer.close(confirmBox);
					    if (cancel && typeof cancel === 'function') {
					    	cancel();
					    }
					}
					,btn2: function(index, layero){
					    //按钮【确定】的回调
					    if (ensure && typeof ensure === 'function') {
					    	ensure();
					    }
					    //return false 开启该代码可禁止点击该按钮关闭
					}
				});
		}
		//暴露给全局环境
		window.$confirm = $.fn.confirm;	
	})(jQuery);
	
	//登录input绿线
	$(".z_veri_int input").focus(function () {
		$(".z_veri_int").removeClass("active");
		$(this).parents(".z_veri_int").addClass("active");
	})
	
	//数量加减
	$('.pub-updown .pub-updown-down').click(function(){
		var $txt = $(this).next('.pub-updown-num'),
			val = $txt.val();
		val <= 1 ? val = 1 : val--;
		$txt.val(val);
	});
	$('.pub-updown .pub-updown-up').click(function(){
		var $txt = $(this).prev('.pub-updown-num'),
			val = $txt.val();
		val++;	
		$txt.val(val);
	});
	
	/*	移动端一组图片点击放大展示，滑动支持查看前后图片
	 *	基于swiper二次封装
	 * */
	;(function($){
		$.fn.EnlargeImage = function(options){
			var ops = $.extend({
				//暂时没有参数
			}, options);
			
			var imgList=$(this).find('img'), 		//获取需要放大的图片列表
				swiperInnerHTML='',    //放大的swiper的html
				srcArr = [];          //图片src数组
			
			var bigImgBox = $('<section class="big-img-box flexc"><div class="big-banner swiper-container"><div class="swiper-wrapper ali-c"></div></div></section>'),
				swiperContainer = bigImgBox.find('.swiper-container'),
				swiperWrapper = bigImgBox.find('.swiper-wrapper'),
				//初始化大图swiper
				initSwiper = new Swiper(swiperContainer,{
		            observer:true,		//修改swiper自己或子元素时，自动初始化swiper
		            observeParents:true //修改swiper的父元素时，自动初始化swiper
		       	});	
				
			/*	遍历图片列表，
			 * 	给图片添加下标（之所以做这一步而不是直接使用$(this).index()，是因为img同级元素可能存在一些非img元素）
			 * 	生成轮播项html
			 * 	因为图片的数据量不大，采用本地变量存储html元素再插入
			 * */
	        $.each(imgList, function (index, img) {
	        	//给当前图片添加下标
	        	img.index = index; 
				//生成轮播项html
	            swiperInnerHTML += '<div class="swiper-slide flexc"><img src="' + img.src + '"></div>';
	        });
	        swiperWrapper.html(swiperInnerHTML);  
	       
	        $('body').append(bigImgBox);
	        
	
	        /* 	调用swiper的方法，更新轮播在状态
	         * 	@index {Number} 展示哪张轮播图片
	         * */ 
	        function updateSwiper(index){
	        	//更新swiper
	            initSwiper.update(true);
	            //显示对应状态的图片
	            initSwiper.slideTo(index, 0, false);
	        }
	        /*	禁止弹窗弹出后body可以滚动
	         *	弹窗隐藏后恢复滚动
	         * */
			function stopBodyScroll(){
				$('body').on('touchmove', function(event){
					event = event || window.event;
					event.preventDefault();
				});
			}
			function recoveryBodyScroll(){
				$('body').off('touchmove');
			}
			//点击图片放大
	        imgList.on('click',function(){
	        	updateSwiper(this.index);
	            bigImgBox.fadeIn();
	            stopBodyScroll();
	        }) 
	        //点击swiper关闭自身
	       	bigImgBox.on('click',function(){
	       		
	            $(this).fadeOut();
	            recoveryBodyScroll(); 
	        })
		}
	})(jQuery);
	
	
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
})
