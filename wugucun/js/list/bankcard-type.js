$(function(){
	$('.close-card .border-b').click(function(){
		var $this = $(this);
		$this.addClass('select').siblings().removeClass('select');
	})
})