$(function () {
	//轮播
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
    $(".z-collection-btn").click(function () {
    	$(this).hasClass("on")?$(this).removeClass("on"):$(this).addClass("on");
    })
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
})
