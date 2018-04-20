$(function(){
	// 点赞
	      //点击更换图片
	$('.give-like').click(function(){

		var $this = $(this),
		$src = $this.find('img').attr('src'),
		src = 'images/me-icon/like-light.png',
		SRC = 'images/me-icon/like-fill-light.png';
		if($src==src){
			$this.find('img').attr('src',SRC);
		}else{
			$this.find('img').attr('src',src);
		}

	})
})