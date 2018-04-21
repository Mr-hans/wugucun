$(function(){
	// 点击弹出性别选择
	$('.close-gender').click(function(){

		$('.gender-box').removeClass('hide');
	})
	// 点击选择性别
	$('.gender-fox').click(function(){
		var $this = $(this),
			label = $this.find('.label'),
			labelTxt = $this.find('.flex1').text(),
			gender = $('.close-gender').find('.pub-right');
		label.addClass('select').parent().siblings('.gender-fox').find('.label').removeClass('select');
		gender.text(labelTxt);
		$('.gender-box').addClass('hide');
	})
	
	//头像上传
	layui.use('upload', function(){
		var upload = layui.upload;
		//普通图片上传
		var uploadInst = upload.render({
		    elem: '.photo-img' //触发元素
		    ,url: '/upload/' //上传接口
		    ,before: function(obj){
		      //预读本地文件示例，不支持ie8
		      obj.preview(function(index, file, result){
		        $('.photo-img img').attr('src', result); //图片链接（base64）
		      });
		    }
		    ,done: function(res){
		      //如果上传失败
		      if(res.code > 0){
		        return layer.msg('上传失败');
		      }
		      //上传成功
		    }
		    
		});
	});	

		
	
})