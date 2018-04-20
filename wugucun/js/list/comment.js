/* 热销产品js
 * ------layui流加载商品（演示ajax效果，$.get读取的本地json数据）
 * */
$(function(){
	//layer
	layui.use(['layer', 'upload'], function(){
		var layer = layui.layer,
			upload = layui.upload;
		

		//上传图片		
		upload.render({
		    elem: '.service-photos .service-upload-btn'
		    ,url: ''//上传接口
		    ,multiple: true // 允许传多图
		    ,accept: 'images' //上传文件类型为图片
		    ,auto: false // 选择本地图片后不自动上传
			,bindAction: '' //指向一个按钮触发上传，一般配合 auto: false 来使用
		    ,choose: function(obj){ //选择图片后的回调
		      //预读本地文件示例，不支持ie8
		      obj.preview(function(index, file, result){
		        $('#service-upload-btn').before('<div class="item service-upload-btn"><img src="' + result + '" alt="" /></div>');
		      });
		    }
		    ,done: function(res){ 
		      //上传完毕
		      console.log(res);
		    },error:function(err){
		    	console.log(err);
		    }
		});

	});
	// 点击有内容按钮改变颜色
	$('.hots-t').on('input',function(){
		texTare();
	})

	
	function texTare(){
		var _val = $('.hots-t').val();
		if (_val!=="") {
			$('.pub-btn-danger').removeClass('btn-ccc');
		}else{
			$('.pub-btn-danger').addClass('btn-ccc');
		}
	}
	
	
})